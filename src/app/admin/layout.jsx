// import NavBar from "./nav";

import NavBar from "@/components/Navbar";

export default function RootLayout({ children }) {
    return (
        <div
        data-theme="night"
          className={` antialiased bg-white min-h-[100vh]`}
        >
            <NavBar firstPage="Admin Dashboard" secondPage="Cources" firstLink="/admin" secondLink="/admin/cources"/>
          {children}
        </div>
    );
  }