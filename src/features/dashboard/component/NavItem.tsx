import React from "react";

type NavItemProps = {
    icon: React.ElementType;
    label?: string;
    href: string;
    hiddenOnMobile?: boolean;
    size?: number;
};

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href, hiddenOnMobile, size = 20 }) => {
    return (
        <a href={href} className={`relative flex items-center justify-center font-sans text-gray-500 text-xs uppercase w-10 h-10 rounded-lg transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 ${hiddenOnMobile ? "xl:hidden" : ""}`}>
            <Icon size={size} />
            {label && <span className="hidden xl:block ml-2">{label}</span>}
        </a>
    );
};
