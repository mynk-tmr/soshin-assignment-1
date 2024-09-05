import "./globals.css";
import { poppins, roboto } from "@/config/fonts";

export const metadata = {
  title: "Dashboard for Soshin",
  description: "Made by Mayank Tomar",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} font-poppins`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
