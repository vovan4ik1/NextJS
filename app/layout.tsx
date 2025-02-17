'use client';

import { useRouter } from "next/router";
import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  
  const menuItems = [
    { path: "/articles", label: "Articles" },
    { path: "/profile/settings", label: "Settings" },
    { path: "/profile/security", label: "Security" },
  ];

  return (
    <div>
      <nav className="p-4 bg-gray-200">
        {menuItems.map(({ path, label }) => (
          <Link key={path} href={path}>
            <a
              className={`mr-4 p-2 rounded ${
                router.pathname === path ? "bg-blue-500 text-white" : ""
              }`}
            >
              {label}
            </a>
          </Link>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;