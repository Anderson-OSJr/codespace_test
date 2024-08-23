import Image from "next/image";
import TopBar from "./components/TopBar";
import TopImage from "./components/TopImage";

export default function Home() {
  return (
   <>
    <div className="flex flex-col gap-8 p-2 bg-blue-950">  
      <TopImage />    
      <TopBar />
    </div>
   </>
  );
}
