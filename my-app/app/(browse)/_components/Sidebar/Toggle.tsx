"use client"

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/Store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hint } from "../Hint";


export const Toggle=()=>{
 
    const {onCollapse, onExpand, collapsed}=useSidebar((state)=>state)
const label= collapsed ? "Expand" : "Collapse";

    return(
        <>
       {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center p">
             <Hint label={label}  asChild>
            <Button onClick={onExpand}  variant="ghost" className="h-auto p-2">
                <ArrowRightFromLine className="h-4 w-4"/>
            </Button>
            </Hint>
        </div>
       )}

        {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">

            <p className="font-semibold text-primary">
                for you

            </p>
            <Hint label={label}  asChild>
            <Button onClick={onCollapse}  className="h-auto p-2 ml-auto" variant="ghost">
                     <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
            </Hint>
           
        </div>)}
        </>
    )
}