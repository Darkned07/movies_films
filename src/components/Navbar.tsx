"use client";
import Link from "next/link";
import React from "react";

function Navbar() {
  const data = localStorage.getItem("user");
  const links = [
    { name: "Home", href: "/", id: "1" },
    { name: "About", href: "/about", id: "2" },
    { name: "Movies", href: "/movies", id: "3" },
    { name: "Contact", href: "/contact", id: "4" },
    { name: "Login", href: "/auth/login", id: "5" },
    { name: "Register", href: "/auth/register", id: "6" },
  ];

  return (
    <>
      <div className="navbar max-container">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-secondary btn-outline mr-10 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu gap-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {!data &&
                links.map((s) => {
                  return (
                    <li key={s.id}>
                      <Link
                        className="btn btn-sm btn-outline link-hover link-secondary"
                        href={s.href}
                      >
                        {s.name}
                      </Link>
                    </li>
                  );
                })}
              {data &&
                links.slice(0, -2).map((s) => {
                  return (
                    <li key={s.id}>
                      <Link
                        className="btn btn-sm btn-outline link-hover link-secondary"
                        href={s.href}
                      >
                        {s.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <Link href="/" className="btn btn-secondary btn-outline text-xl">
            Kino olami
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-3 menu-horizontal px-1">
            {data &&
              links.slice(0, -2).map((s) => {
                return (
                  <li key={s.id}>
                    <Link
                      className="btn btn-sm btn-outline link-hover link-secondary"
                      href={s.href}
                    >
                      {s.name}
                    </Link>
                  </li>
                );
              })}
            {!data &&
              links.map((s) => {
                return (
                  <li key={s.id}>
                    <Link
                      className="btn btn-sm btn-outline link-hover link-secondary"
                      href={s.href}
                    >
                      {s.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="navbar-end ">
          <Link
            className=" hidden sm:flex btn btn-outline link-hover "
            href="/"
          >
            New Movies
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
