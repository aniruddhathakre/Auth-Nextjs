"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout success");
      router.push("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error(error.message);
      } else {
        console.log("An unexpected error occurred.");
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <p className="text-lg text-gray-400 mb-6">
        Manage your account details and preferences
      </p>

      <p className="text-4xl font-semibold mb-6">
        Profile ID:
        <span className="inline-block p-2 ml-3 rounded bg-orange-500 text-black text-2xl"></span>
      </p>

      <h2 className="p-1 rounded bg-green-500">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={getUserDetails}
        className="w-full max-w-md p-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition mt-4"
      >
        Get User Details
      </button>

      <button
        onClick={logout}
        className="w-full max-w-md p-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition mt-4"
      >
        Logout
      </button>
    </div>
  );
}
