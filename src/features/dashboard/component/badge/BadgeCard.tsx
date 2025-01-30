import React from "react";

type BadgeCardProps = {
    icon: React.ElementType;
    size?: number;
    color: string;
    shadowColor: string;
    title: string;
    value: string;
    percentage: string;
    percentageColor: string;
};

export const BadgeCard: React.FC<BadgeCardProps> = ({
    icon: Icon,
    size = 20,
    color,
    shadowColor,
    title,
    value,
    percentage,
    percentageColor
}) => {
    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr ${color} text-white ${shadowColor} shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`}>
                <Icon size={size} />
            </div>
            <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    {title}
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {value}
                </h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong className={percentageColor}>{percentage}</strong>&nbsp;than last week
                </p>
            </div>
        </div>
    );
};
