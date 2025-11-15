"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function PageClient() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen w-screen p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-gray-500 mb-8">
          This is a placeholder dashboard. You can customize it with your content.
        </p>
        <div className="space-y-4">
          <Button 
            className="w-full" 
            onClick={() => router.push('/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
