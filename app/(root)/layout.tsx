import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: "user_12345",
    email: "user@example.com",
    userId: "auth_12345",
    dwollaCustomerUrl: "https://api.dwolla.com/customers/placeholder",
    dwollaCustomerId: "dwolla_12345",
    firstName: "John",
    lastName: "Doe",
    address1: "123 Main St",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
    dateOfBirth: "2000-01-01",
    ssn: "1234" // last 4 digits placeholder
  };
  
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
        {children}
        </div>
    </main>
  );
}