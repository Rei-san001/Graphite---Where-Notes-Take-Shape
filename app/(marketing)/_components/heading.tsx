"use client";


import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

export const Heading = () => {

    


    return (
        /* heading and enter button */
        <div className="max-w-3xl space-y-4">

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Where Notes Takes Shape. Welcome to <span className="underline">Graphite</span>
            </h1>


            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Graphite is a place where <br/> 
                you can sketch your ideas, shape your mind.
            </h3>

    

            

            <Button>
                Enter Graphite
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
            
        </div>
    );
};