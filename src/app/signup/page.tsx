"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //   <h1>Signup</h1>
    //   <hr />
    //   <label htmlFor="username">username</label>
    //   <input
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //     type="text"
    //     id="username"
    //     value={user.username}
    //     onChange={(e) => setUser({ ...user, username: e.target.value })}
    //     placeholder="username"
    //   />

    //   <label htmlFor="email">email</label>
    //   <input
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //     type="text"
    //     id="email"
    //     value={user.email}
    //     onChange={(e) => setUser({ ...user, email: e.target.value })}
    //     placeholder="email"
    //   />

    //   <label htmlFor="password">password</label>
    //   <input
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //     type="password"
    //     id="password"
    //     value={user.password}
    //     onChange={(e) => setUser({ ...user, password: e.target.value })}
    //     placeholder="password"
    //   />

    //   <button
    //     onClick={onSignup}
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //   >
    //     Signup Here
    //   </button>

    //   <Link href="/login">Visit login page</Link>
    // </div>

    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
      <p className="text-gray-400 mb-6">
        Join us and experience the difference
      </p>

      <input
        className="w-full max-w-md p-3 bg-gray-800 border border-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter your username"
      />

      <input
        className="w-full max-w-md p-3 bg-gray-800 border border-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="you@example.com"
      />

      <input
        className="w-full max-w-md p-3 bg-gray-800 border border-gray-700 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="••••••••"
      />

      <button
        onClick={onSignup}
        className="w-full max-w-md p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition"
      >
        Sign Up
      </button>

      <p className="mt-4 text-sm text-gray-400">
        Already have an account?{" "}
        <Link href="/login" className="text-indigo-400 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
