import { LuPen, LuLayers, LuUser2, LuCarrot, LuSend } from "react-icons/lu";

export default function Sidebar() {
    return (
        <>
            <div className="flex md:flex-col items-center justify-center">
                <a href="/" className="text-xl p-2 text-black py-3">
                    <LuPen />
                </a>
                <a href="/about" className="text-xl p-2 text-black py-3">
                    <LuUser2 />
                </a>
                <a href="/projects" className="text-xl p-2 text-black py-3">
                    <LuLayers />
                </a>
                <a href="/goodies" className="text-xl p-2 text-black py-3">
                    <LuCarrot />
                </a>
                <a href="/contact" className="text-xl p-2 text-[#FAD02C] py-3">
                    <LuSend />
                </a>
            </div>
        </>
    )
}