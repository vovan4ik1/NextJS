'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import Layout from "./layout";

const ArticlesLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  
  const articleMenu = [
    { path: "/Articles/favorite", label: "Favorite" },
    { path: "/Articles/Create", label: "Create" },
    { path: "/Articles/[id]", label: "id"},
  ];

  return (
    <Layout>
      <nav className="p-2 bg-gray-300">
        {articleMenu.map(({ path, label }) => (
          <Link key={path} href={path} legacyBehavior>
            <a
              className={`mr-4 p-2 rounded ${
                pathname === path ? "bg-green-500 text-white" : ""
              }`}
            >
              {label}
            </a>
          </Link>
        ))}
      </nav>
      <main>{children}</main>
    </Layout>
  );
};

export default ArticlesLayout;