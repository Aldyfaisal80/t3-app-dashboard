import React from "react";
import { SidebarItem } from "./SidebarMenuItem";
import {
    Home,
    User,
    Table,
    Bell,
    LogIn,
    UserPlus,
} from "lucide-react";
import type { SidebarMenu } from "./type";
import { SidebarGroup } from "./SidebarGroup";

const menus: SidebarMenu[] = [
    {
        groupLabel: "Dashboard",
        menu: [
            {
                url: "/dashboard",
                label: "Dashboard",
                icon: Home,
            },
            {
                url: "/dashboard/profile",
                label: "Profile",
                icon: User,
            },
            {
                url: "/dashboard/table",
                label: "Table",
                icon: Table,
            },
            {
                url: "/dashboard/notifications",
                label: "Notifications",
                icon: Bell,
            }
        ]
    }
];

export const SidebarList = () => {
    return (
        <>
            {menus.map((menu) => (
                <SidebarGroup key={menu.groupLabel} group={menu} />
            ))}

            <p className="text-white font-bold uppercase text-sm opacity-75 px-4 mt-6">
                Auth Pages
            </p>

            <SidebarItem icon={<LogIn size={20} />} label="Sign In" href="/login" />
            <SidebarItem icon={<UserPlus size={20} />} label="Sign Up" href="/register" />
        </>
    );
};
