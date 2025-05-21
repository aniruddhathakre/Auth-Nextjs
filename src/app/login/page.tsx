"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
      <p className="text-gray-400 mb-6">Login to your account</p>

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
        onClick={onLogin}
        className="w-full max-w-md p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition"
      >
        Log In
      </button>

      <p className="mt-4 text-sm text-gray-400">
        Don't have an account?{" "}
        <Link href="/signup" className="text-indigo-400 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
