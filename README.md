# Mind Tree Communication - Global VoIP, SMS & CPaaS Platform

> **Voice • SMS • Global Reach**  
> Headquartered in Hong Kong SAR  
> Direct Carrier Desk: **connect@mindtreecom.com**

A modern enterprise website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons** for **Mind Tree Communication Limited**, an international telecommunications company specializing in wholesale voice trading, A2P SMS messaging, CPaaS developer APIs, cloud contact center dialers, and bulk SMS CRM platforms.

---

## 🌐 Live Architecture & Solutions

| Route | Solution | Highlights |
| :--- | :--- | :--- |
| **`/`** | **Home** | Hero with live metric indicators, real-time Route Search Widget, interactive Global PoP Map, solutions showcase, and carrier inquiry form. |
| **`/voice`** | **Wholesale Voice** | Carrier-grade termination, Direct Premium CLI routes, CC traffic handling, SIP 2.0 / TLS specs, and Anti-FAS defense. |
| **`/messaging`** | **Wholesale SMS** | Ultra-low latency A2P SMS, Sub-3s OTP verification, SMPP v3.4 binds (up to 5,000+ TPS), dynamic alphanumeric sender IDs. |
| **`/cpaas`** | **CPaaS APIs** | Programmable Voice, SMS, WhatsApp Business API, and RCS messaging endpoints with cURL and Node.js code snippets. |
| **`/dialer`** | **Call Center Solutions** | Cloud Predictive, Progressive, and Preview dialers with WebRTC browser softphones, supervisor live wallboards, and CRM integration. |
| **`/advance-sms-portal`**| **Bulk SMS CRM Portal** | Enterprise self-service portal, contact segmentation, scheduled campaigns, dynamic placeholders, and automated DND filtering. |
| **`/virtual-numbers-did`**| **Global DID Numbers** | Local, national, and toll-free virtual DID numbers across 140+ countries with two-way SMS and direct SIP trunk forwarding. |
| **`/about`** | **About Us** | Corporate story, Hong Kong headquarters, Tier-1 carrier network, and 99.999% SLA commitment. |
| **`/contact`** | **Carrier Interconnect Desk**| Inquiries dispatched directly to `connect@mindtreecom.com` with Hong Kong office details. |
| **`/blog`** | **Telecom Insights** | In-depth telecom industry analysis on VoIP trading, A2P SMS security, and contact center optimization. |
| **`/security-and-compliance`** | **Security & Compliance** | ISO 27001, GDPR compliance, real-time Wangiri / IRSF protection, and TLS 1.3 / SRTP encryption. |
| **`/privacy-policy`** & **`/terms-of-service`** | **Legal** | Hong Kong telecom regulatory agreements and privacy policies. |

---

## 🏢 Corporate Address & Contact

* **Hong Kong Headquarters:**  
  Unit 1805, 18/F, Crawford House, 70 Queen's Road Central, Central, Hong Kong
* **Official Email:**  
  [connect@mindtreecom.com](mailto:connect@mindtreecom.com)
* **Phone Policy:**  
  Direct digital and email communication only. All inquiries are handled via `connect@mindtreecom.com`.

---

## ⚙️ Environment Variables & Deployment Setup

To dispatch inquiries from the contact form directly via Gmail SMTP to `connect@mindtreecom.com`, configure these 3 variables in your deployment settings (e.g. Vercel, Netlify, Render):

```env
# 1. Your normal Gmail address that will send the email
GMAIL_USER=yourgmailaddress@gmail.com

# 2. Your 16-character Google App Password (generate at https://myaccount.google.com/apppasswords)
GMAIL_APP_PASSWORD=wxyzabcdefghijkl

# 3. Destination email where you want to receive inquiries
RECIPIENT_EMAIL=connect@mindtreecom.com
```

### How to Get Your 16-Character Gmail App Password
1. Visit your **[Google Account Security Page](https://myaccount.google.com/security)** and verify **2-Step Verification** is **ON**.
2. Go to **[Google App Passwords](https://myaccount.google.com/apppasswords)**.
3. Enter an app name (e.g. `Mind Tree Website`) and click **Create**.
4. Copy the generated 16-character code (e.g. `wxyz abcd efgh ijkl`) and paste it as `GMAIL_APP_PASSWORD` (spaces are stripped automatically by the server).

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/abhishekaryan0/mind-tree.git
cd mind-tree
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create your local environment file
```bash
cp .env.example .env.local
```
*(Add your Gmail credentials in `.env.local`)*

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 5. Build for production
```bash
npm run build
npm run start
```

---

## 📦 Deployment to Vercel

1. Push your code to GitHub (already synced on `main`).
2. Log into **[Vercel](https://vercel.com)** and click **"Add New Project"**.
3. Select the **`abhishekaryan0/mind-tree`** repository.
4. In **Environment Variables**, add:
   * `GMAIL_USER`
   * `GMAIL_APP_PASSWORD`
   * `RECIPIENT_EMAIL` (`connect@mindtreecom.com`)
5. Click **Deploy**.

---

## 📄 License & Ownership
Copyright © 2026 Mind Tree Communication Limited (Hong Kong). All rights reserved.
