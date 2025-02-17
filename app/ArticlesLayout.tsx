'use client';

import { useRouter } from "next/router";
import Link from "next/link";
import { ReactNode } from "react";
import Layout from "./layout";

const ArticlesLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  
  const articleMenu = [
    { path: "/articles/favorite", label: "Favorite" },
    { path: "/articles/create", label: "Create" },
    { path: "/articles/[id]", label: "id"},
  ];

  return (
    <Layout>
      <nav className="p-2 bg-gray-300">
        {articleMenu.map(({ path, label }) => (
          <Link key={path} href={path}>
            <a
              className={`mr-4 p-2 rounded ${
                router.pathname === path ? "bg-green-500 text-white" : ""
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