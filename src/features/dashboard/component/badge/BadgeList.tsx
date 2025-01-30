import { BadgeCard } from "./BadgeCard";
import { DollarSign, TrendingUp, UserPlus, Users } from "lucide-react";

export const BadgeList = () => {
    return (
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <BadgeCard
                icon={DollarSign}
                color="from-blue-600 to-blue-400"
                shadowColor="shadow-blue-500/40"
                title="Today's Money"
                value="$53k"
                percentage="+55%"
                percentageColor="text-green-500"
            />
            <BadgeCard
                icon={Users}
                color="from-pink-600 to-pink-400"
                shadowColor="shadow-pink-500/40"
                title="Today's Users"
                value="2,300"
                percentage="+3%"
                percentageColor="text-green-500"
            />
            <BadgeCard
                icon={UserPlus}
                color="from-green-600 to-green-400"
                shadowColor="shadow-green-500/40"
                title="New Clients"
                value="3,462"
                percentage="-2%"
                percentageColor="text-red-500"
            />
            <BadgeCard
                icon={TrendingUp}
                color="from-orange-600 to-orange-400"
                shadowColor="shadow-orange-500/40"
                title="Sales"
                value="$103,430"
                percentage="+5%"
                percentageColor="text-green-500"
            />
        </div>
    )
};