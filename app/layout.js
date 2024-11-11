import { Roboto } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import ImportBsJS from "./components/importBsjs";

// const roboto = Roboto({
//   weight: ['300', '400', '700'],
//   subsets: ['latin'],
// });

export const metadata = {
  title: "Source Flow Assesment",
  description: "Created by Abdul Kader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <ImportBsJS/>
        {children}
        </body>
    </html>
  );
}
