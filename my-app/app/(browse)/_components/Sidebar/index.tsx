import { getRecommended } from "@/lib/recommended-service"
import Recommended from "./Recommended"
import { Toggle } from "./Toggle"
import { Wrapper } from "./wrapper"


export const Sidebar=async()=>{

    const recommended=await getRecommended();
    return(
        
            <Wrapper>  {/* this takes care of collapsing the sidebar */}
               
            <Toggle />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data={recommended} />
            </div>
            </Wrapper>
        
    )
}