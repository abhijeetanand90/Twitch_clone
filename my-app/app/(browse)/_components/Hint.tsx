import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";





interface HintProps{
    label:string;
    children:React.ReactNode;
    asChild?: boolean;
    side?: "top"| "bottom"|"left"|"right";
    align?:"Start"|"Center"|"end";
};


export const Hint=({
    label,children,asChild
}:HintProps)=>{

    return(
        <TooltipProvider asChild={asChild}>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>
            {children}
            </TooltipTrigger>
            <TooltipContent className="text-black bg-white" >
                <p className="font-semibold">
                    {label}
                </p>
            </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
    
}