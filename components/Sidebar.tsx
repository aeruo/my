import { LuPen, LuLayers, LuUser2, LuCarrot, LuSend } from "react-icons/lu";

export default function Sidebar(){
    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <a href="/" className="text-xl p-2 text-black py-3">
                    <LuPen/>
                </a>
                <a href="/about" className="text-xl p-2 text-black py-3">
                    <LuUser2/>
                </a>
                <a href="/projects" className="text-xl p-2 text-black py-3">
                    <LuLayers/>
                </a>
                <a href="/goodies" className="text-xl p-2 text-black py-3">
                    <LuCarrot/>
                </a>
            </div>
        </>
    )
}