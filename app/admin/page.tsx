import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminIndexPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin/applications");
  }
  redirect("/admin/login?from=/admin/applications");
}
