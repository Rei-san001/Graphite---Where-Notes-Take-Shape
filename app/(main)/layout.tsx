"use client";
import { Toaster } from "sonner";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";


const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {

    const { isAuthenticated, isLoading } = useConvexAuth();

    if(isLoading){
        return(
            <div className="h-full flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    if(!isAuthenticated){
        return redirect("/");
    }



    return(
    <div className="h-full flex dark:bg-[#1F1F1F] border-none"> {/* Add border-none */}
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto border-none"> {/* Add here too */}
            <SearchCommand />
            {children}
        </main>
    </div>
);
}

export default MainLayout;


