import { DashboardTable } from "../component/DashboardTable";
import { BadgeList } from "../component/badge/BadgeList";

export const DashboardPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="mt-12">
                <BadgeList />
                <div className="mb-4 grid grid-cols-1 gap-6">
                    <DashboardTable />
                </div>
            </div>

        </div>
    );
};
