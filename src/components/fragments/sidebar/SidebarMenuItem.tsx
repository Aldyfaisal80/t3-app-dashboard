import React from "react";

type SidebarItemProps = {
    icon: React.ReactNode;
    label: string;
    href: string;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href }) => {
    return (
        <li>
            <a
                href={href}
                className="flex items-center gap-3 px-4 py-3 text-white rounded-lg hover:bg-white/10"
            >
                {icon}
                <span className="text-sm font-medium">{label}</span>
            </a>
        </li>
    );
};
