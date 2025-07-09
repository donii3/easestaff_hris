# EaseStaff™

**EaseStaff™** is an all-in-one HR software solution tailored for schools and SMEs in Nigeria. Built with Next.js, it offers a simple, intuitive, and secure platform for managing staff records, payroll, performance, and internal communication.

From secure document uploads to seamless salary disbursements and performance reviews, **EaseStaff™** brings peace and efficiency to HR processes for everyone involved.

---

## 🌟 Key Features

- ✅ **Automated Payroll**  
  Easily manage payroll in compliance with Nigerian tax, pension, and regulatory laws.

- 📂 **Centralized Staff Records**  
  Store and manage staff profiles, documents, and performance data securely.

- 📱 **Mobile-Optimized Employee Dashboard**  
  Responsive dashboard for staff access to salary, performance, and documents on any device.

- 🔔 **Real-Time Notifications**  
  Send updates via email, in-app dashboard alerts, and bulk SMS.

- ⬆️⬇️ **Secure Document Management**  
  Admins/HR can upload and retrieve documents like contracts, CVs, and appraisals.

- 💳 **Wallet-Based Salary Disbursement**  
  Integrated with Nigerian payment APIs for salary transfer and digital wallet access.

- 🔐 **NDPR-Compliant & Secure**  
  Built with modern best practices for privacy, authentication, and data handling.

---

## 🎯 Core Objectives

1. **Simplify Payroll Automation**  
   - Salary computation, tax & pension handling  
   - Export reports and disburse funds using connected payment gateways

2. **Centralized Staff Data**  
   - Staff profile management, documentation, and performance evaluations

3. **Mobile Dashboard Accessibility**  
   - Clean UX for mobile-first access to payslips, history, and HR updates

4. **Multi-channel Notification System**  
   - Email (SendGrid, Nodemailer), in-app toasts/alerts, and SMS integration (e.g., Termii, Twilio)

5. **Digital Wallet Integration**  
   - Manage salary disbursement through staff wallets linked to payment APIs like **Paystack** or **Flutterwave**

6. **Compliance with NDPR**  
   - Secure authentication, encryption, and access controls aligned with Nigerian data privacy law

---

## 🏗️ Tech Stack

- **Frontend & Backend:** [Next.js](https://nextjs.org/) (App Router, Full-stack)
- **UI:** Tailwind CSS, Shadcn/UI, Framer Motion
- **State Management:** React Context / Zustand
- **Authentication:** NextAuth.js / Clerk / Auth.js (customizable per use case)
- **Database:** PostgreSQL / MySQL (via Prisma ORM)
- **File Storage:** AWS S3 / Cloudinary / Supabase Storage
- **Notifications:** Nodemailer, Twilio, Termii SMS, In-App Toaster
- **Payments & Wallets:** Paystack / Flutterwave REST APIs
- **Security:** HTTPS, JWT, RBAC, NDPR-compliance strategies

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/easestaff_hris.git
cd easestaff_hris
