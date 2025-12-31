import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser()

  const banks: Array<Bank & Account> = [
    {
      // Bank fields
      $id: "bank_001",
      accountId: "acc_001",
      bankId: "chase",
      accessToken: "access_token_001",
      fundingSourceUrl: "https://api.bank.com/funding/001",
      userId: "user_123",
      sharableId: "share_001",
  
      // Account fields
      id: "account_001",
      availableBalance: 2500.75,
      currentBalance: 2600.0,
      officialName: "Chase Total Checking",
      mask: "1234",
      institutionId: "ins_chase",
      name: "Checking Account",
      type: "depository",
      subtype: "checking",
      appwriteItemId: "appwrite_001",
    },
    {
      // Bank fields
      $id: "bank_002",
      accountId: "acc_002",
      bankId: "boa",
      accessToken: "access_token_002",
      fundingSourceUrl: "https://api.bank.com/funding/002",
      userId: "user_123",
      sharableId: "share_002",
  
      // Account fields
      id: "account_002",
      availableBalance: 5200.5,
      currentBalance: 5400.25,
      officialName: "Bank of America Advantage Savings",
      mask: "5678",
      institutionId: "ins_boa",
      name: "Savings Account",
      type: "depository",
      subtype: "savings",
      appwriteItemId: "appwrite_002",
    },
  ];
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={banks} />
    </section>
  );
};

export default Home;
