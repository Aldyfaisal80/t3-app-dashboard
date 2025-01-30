// import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
// import { Sidebar } from "../fragments/sidebar/Sidebar";
// import { cookies } from "next/headers";

import { NavBar } from "@/features/dashboard/component/Navbar";
import { Sidebar } from "../fragments/sidebar/Sidebar";
import { Container } from "./Container";
import { Footer } from "@/features/dashboard/component/Footer";

type DashboardLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, className }) => {
    return (
        <div className="flex">
            <Sidebar className={`${className} w-full px-8`}>
                <Container className="p-4 xl:ml-72">
                    <NavBar />
                    {children}
                    <Footer />
                </Container>
            </Sidebar>
        </div>
    )
};