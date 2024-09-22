// import NavBar from "./nav";

import NavBar from "@/components/Navbar";

export default function RootLayout({ children }) {
    return (
        <div
        data-theme="night"
          className={` bg-white antialiased min-h-[100vh]`}
        >
            <NavBar firstPage="Student Dashboard" secondPage="My Cources" firstLink="/students" secondLink="/students/myCources"/>
          {children}
        </div>
    );
  }