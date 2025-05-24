// src/app/page.tsx
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token"); // or whatever you named your auth cookie

  if (!token) {
    redirect("/login");
  }

  redirect("/profile"); // or your dashboard
}
