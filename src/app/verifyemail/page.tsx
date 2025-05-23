"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-900 text-white">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold text-white">Verify Your Email</h1>

        <div className="bg-orange-500 text-black text-sm font-mono rounded px-4 py-2">
          {token ? `Token: ${token}` : "No token provided"}
        </div>

        {verified && (
          <div className="bg-green-600 text-white rounded p-4 space-y-2">
            <h2 className="text-2xl font-semibold">Email Verified ✅</h2>
            <Link
              href="/login"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition"
            >
              Go to Login
            </Link>
          </div>
        )}

        {error && (
          <div className="bg-red-600 text-white rounded p-4">
            <h2 className="text-2xl font-semibold">Verification Failed ❌</h2>
            <p className="text-sm mt-1">The token is invalid or has expired.</p>
          </div>
        )}
      </div>
    </div>
  );
}
