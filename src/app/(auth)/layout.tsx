import { AuthLayout as AuthLayoutComponent } from "@/components/layouts/AuthLayout"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth - Prot Prot",
    description: "Auth",
}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return <AuthLayoutComponent>{children}</AuthLayoutComponent>;
};

export default AuthLayout;