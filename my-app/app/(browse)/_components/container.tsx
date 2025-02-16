"use client";

import { useSidebar } from "@/Store/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect } from "react";




interface containerprops{
    children:React.ReactNode;
};



export const Container=({children}:containerprops)=>{
    const {collapsed, onCollapse, onExpand}=useSidebar((state)=>state);




    return(
        <div className={cn("flex-1", collapsed ? "ml-[70px]" :  "ml-[70px] lg:ml-60")}>
            {children}
        </div>
    )
}