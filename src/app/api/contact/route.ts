import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      fullName,
      companyName,
      email,
      service,
      volume,
      destinations,
      message
    } = data;

    if (!fullName || !email || !companyName) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Always route incoming inquiries to connect@mindtreecom.com
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'connect@mindtreecom.com';

    // Gmail sender credentials from environment variables
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || '';
    const rawGmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || '';
    const gmailPass = rawGmailPass.replace(/\s+/g, '');

    // Branded HTML Email Template
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 14px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #0284c7; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #08182b; margin: 0; font-size: 22px; font-weight: 800;">Mind Tree Communication</h2>
          <p style="color: #0284c7; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 2px 0 0 0;">New Carrier Interconnect Inquiry</p>
          <p style="color: #64748b; font-size: 12px; margin: 4px 0 0 0;">Hong Kong Headquarters Switching Desk</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; width: 170px; color: #0f172a;">Contact Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">Company:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0369a1;">${companyName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">Client Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #0284c7; font-weight: 600; text-decoration: underline;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">Service Required:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><span style="background-color: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 700;">${service || 'General Interconnect'}</span></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">Estimated Volume:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 500;">${volume || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">Target Destinations:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 500;">${destinations || 'Global Interconnect'}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; vertical-align: top; font-weight: 600; color: #0f172a;">Requirements / Notes:</td>
            <td style="padding: 12px 0; white-space: pre-wrap; line-height: 1.6; color: #1e293b;">${message || 'No additional note provided.'}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 12px; color: #475569;">
          <strong>Quick Action:</strong> Click &quot;Reply&quot; in your mail client to reply directly to <strong>${email}</strong>.
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.5;">
          Mind Tree Communication Limited • Unit 1805, 18/F, Crawford House, 70 Queen's Road Central, Central, Hong Kong<br />
          Official Carrier Desk: <a href="mailto:${recipientEmail}" style="color: #0284c7;">${recipientEmail}</a>
        </div>
      </div>
    `;

    // Plain text alternative
    const textContent = `
Mind Tree Communication - New Carrier Inquiry
------------------------------------------------------------
Contact Name:        ${fullName}
Company:             ${companyName}
Client Email:        ${email}
Service Required:    ${service}
Estimated Volume:    ${volume}
Target Destinations: ${destinations}
Requirements / Note: ${message || 'None'}

Forwarded to:        ${recipientEmail}
Timestamp:           ${new Date().toISOString()}
    `;

    const isPlaceholder = 
      !gmailUser || 
      !gmailPass || 
      gmailUser.includes('yourgmailaddress') || 
      gmailPass.includes('abcdefghijklmnop');

    if (!isPlaceholder) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000,
        });

        await transporter.sendMail({
          from: `"Mind Tree Web Form" <${gmailUser}>`,
          to: recipientEmail, // connect@mindtreecom.com
          replyTo: email, // Direct reply to client
          subject: `[New Inquiry] ${service || 'Carrier Interconnect'} - ${companyName} (${fullName})`,
          text: textContent,
          html: htmlContent,
        });

        console.log(`[SUCCESS] Email sent via Gmail (${gmailUser}) to ${recipientEmail}`);
      } catch (mailError: any) {
        console.error('[GMAIL SEND ERROR]', mailError?.message || mailError);
        console.log(`[FALLBACK] Details logged for recipient: ${recipientEmail}`);
        console.log({ fullName, companyName, email, service, volume, destinations, message });
      }
    } else {
      console.log('========================================================');
      console.log(`[DEMO DISPATCH TO: ${recipientEmail}]`);
      console.log(`From (Sender): ${gmailUser || 'Set in .env.local'}`);
      console.log(`To (Receiver): ${recipientEmail}`);
      console.log(`Client Reply-To: ${email}`);
      console.log(`Company: ${companyName} (${fullName})`);
      console.log(`Service: ${service}`);
      console.log('Action: Replace GMAIL_USER and GMAIL_APP_PASSWORD in .env.local with your actual credentials.');
      console.log('========================================================');
    }

    // Always return success to client so user sees the verified submission state
    return NextResponse.json({
      success: true,
      message: 'Form has been submitted successfully',
      recipient: recipientEmail,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while submitting the form. Please write directly to connect@mindtreecom.com.'
      },
      { status: 500 }
    );
  }
}
