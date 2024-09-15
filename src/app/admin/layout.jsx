import NavBar from "./nav";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
        data-theme="night"
          className={` antialiased min-h-[100vh]`}
        >
            <NavBar />
          {children}
        </body>
      </html>
    );
  }