import { DashboardLayout as DashboardLayoutComponent } from "@/components/layouts/DashboardLayout"
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Prot Prot Dashboard Abal Abal",
}
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
};

export default DashboardLayout;