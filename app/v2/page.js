import { redirect } from "next/navigation";

// The redesign was promoted to the homepage on Nov 13, 2026.
export default function V2Redirect() {
  redirect("/");
}
