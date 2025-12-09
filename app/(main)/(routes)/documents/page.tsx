"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentPage = () => {

    const { user } = useUser();


    return (
    <div className="h-full flex flex-col items-center justify-center">
        
        <Image
        src="/empty-light.png"
        width="300"
        height="300"
        alt="Empty"
        className="dark:hidden"
        />

        <Image
        src="/empty-dark.png"
        width="300"
        height="300"
        alt="Empty"
        className="hidden dark:block"
        />

        <h2 className="text-lg font-medium">
            Welcome to {user?.firstName}&apos;s Graphite
        </h2>
        <br/>
        <Button>
            <PlusCircle className="h-4 w-4 mr-1"/>
            Creat a note
        </Button>
    </div>
);
};

export default DocumentPage;