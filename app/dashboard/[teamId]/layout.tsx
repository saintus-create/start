'use client';

import SidebarLayout from "@/components/sidebar-layout";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  
  return (
    <SidebarLayout
      items={[]}
      basePath="/dashboard"
    >
      {children}
    </SidebarLayout>
  );
}