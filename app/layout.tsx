import { ReactNode } from "react";
import Menu from "../components/menu";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div>
          <Menu />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
