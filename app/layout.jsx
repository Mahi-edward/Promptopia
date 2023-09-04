import "@styles/global.css";
import { Children } from "react";

export const metadata = {
  title: "Promtopia",
  description: "Explore the process of creating",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
