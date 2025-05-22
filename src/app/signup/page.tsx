"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);

      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
      <h2>{loading ? "Processing" : "Signup"}</h2>
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
        {buttonDisabled ? "No signup" : "Signup"}
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
