"use client"

import { useSidebar } from "@/Store/use-sidebar";
import { User } from "@prisma/client";
import UserItem from "./UserItem";



interface RecommendedProps{
    data:User[];
};

export default function Recommended({data}:RecommendedProps) {

    const {collapsed}= useSidebar((state)=>state);
    const showLabel= !collapsed && data.length>0;
  return (
    <div>

        {showLabel && (
            <div className="pl-6 mb-4">
                <p className="text-sm text-text-muted-foreground">
                    Recommended
                </p>
            </div>
        )}
        <ul className="space-y-2 px-2">
            {data.map((user)=>(
               <UserItem key={user.id} imageUrl={user.imageUrl} isLive={true}/>
            ))}

        </ul>
    </div>
  )
}
