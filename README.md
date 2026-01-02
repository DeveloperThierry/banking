![Screenshot](/public/views/view1.png)
![Screenshot](/public/views/view2.png)
![Screenshot](/public/views/view3.jpg)
![Screenshot](/public/views/view4.jpg)
![Screenshot](/public/views/view5.jpg)
![Screenshot](/public/views/view6.jpg)

# Banking Finance Management

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)

---

## 🤖 Introduction

Built with **Next.js 14**, Horizon is designed to be a one-stop solution for personal and small business finance. It integrates with industry-standard APIs like Plaid and Dwolla to bridge the gap between traditional banking and modern software interfaces.

---

## ⚙️ Tech Stack

### Frontend
* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS, ShadCN
* **Charts**: Chart.js
* **Forms**: React Hook Form, Zod

### Backend & Services
* **Backend-as-a-Service**: Appwrite (Auth & Database)
* **Banking API**: Plaid
* **Payment Processing**: Dwolla

---

## 🔋 Features

* **Secure Authentication**: Ultra-secure SSR-based authentication with proper validation and authorization via Appwrite.
* **Connect Banks**: Integration with Plaid for linking multiple bank accounts simultaneously.
* **Home Page Dashboard**: Overview of total balances across all banks, recent transactions, and category-based spending charts.
* **Funds Transfer**: Securely transfer funds using Dwolla to other platform users with real-time status updates.
* **Transaction Management**: Advanced filtering and pagination for viewing full transaction histories.

---

## 🤸 Installation

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en) (v18+)
* [npm](https://www.npmjs.com/)

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/DeveloperThierry/banking.git
   cd banking
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   # NEXT
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

   # APPWRITE
   NEXT_PUBLIC_APPWRITE_ENDPOINT=[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)
   NEXT_PUBLIC_APPWRITE_PROJECT=
   APPWRITE_DATABASE_ID=
   APPWRITE_SECRET=

   # PLAID
   PLAID_CLIENT_ID=
   PLAID_SECRET=
   PLAID_ENV=sandbox

   # DWOLLA
   DWOLLA_KEY=
   DWOLLA_SECRET=
   DWOLLA_BASE_URL=[https://api-sandbox.dwolla.com](https://api-sandbox.dwolla.com)
   ```

4. **Running the Project**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

---

## 🚀 Usage

To test the application in a sandbox environment:

1. **Sign Up**: Create a new account.
2. **Link Bank**: Navigate to "Connect Bank" and use the Plaid sandbox credentials.
3. **Analyze**: View the dashboard to see your balance and transaction history automatically populated.
4. **Transfer**: Use the "Payment Transfer" tab to send a test payment to another user on the platform.

---

## 🤝 Contributing

We encourage community contributions! Please check out our [CONTRIBUTING.md](https://www.google.com/search?q=%23) for our submission process and coding standards.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](https://www.google.com/search?q=%23) file for full details.

## 🙏 Special Thanks

Thank you for your assests and guidance @jsmastery
