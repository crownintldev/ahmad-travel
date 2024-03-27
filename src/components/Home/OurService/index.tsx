import { Services } from "@/components/Constant";
import { HoverEffect } from "@/components/ui/card-hover-effect";


export function OurService() {
  return (
    <div className="bg-black w-full">
      <HoverEffect items={Services} />
    </div>
  );
}



