import Navigation from "@/components/navigation/navigation";
import "./globals.css";
import GuestHeader from "@/components/header/guest-header/guest-header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GuestHeader />
    
        {children}
      </body>
    </html>
  );
}
