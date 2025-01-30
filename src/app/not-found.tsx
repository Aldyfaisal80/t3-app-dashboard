'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center">
                <AlertCircle className="w-20 h-20 text-red-500 mx-auto" />
                <h1 className="text-6xl font-bold mt-4">404</h1>
                <p className="text-lg text-gray-400 mt-2">Oops! Page not found.</p>
                <p className="text-md text-gray-500 mt-1">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Button
                    onClick={() => router.back()}
                    className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md"
                >
                    Go Home
                </Button>
            </div>
        </div>
    );
}
