import Sidebar from "@/components/Sidebar";

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
        {children}
    </main>
  );
}