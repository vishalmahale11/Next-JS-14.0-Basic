"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";

const navLink = [
  { Name: "Register", href: "/register" },
  { Name: "Login", href: "/login" },
  { Name: "Forgot Password", href: "/forgot-password" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathName = usePathname();
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {navLink?.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.Name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
