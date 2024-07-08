import { LuArrowDown, LuArrowUpRight } from "react-icons/lu";

export default function HeroSection() {
    return (
        <>
            <section className="w-full h-[100vh] flex flex-col justify-center">
                <img src="https://avatars.githubusercontent.com/u/49512755?v=4" alt="me" className="rounded-full w-[60px] h-[60px] mb-2" />
                <h1 className="text-5xl w-3/4 mb-2">Hey there, I'm Emmanuel, a software developer.<br /></h1>
                <p className="text-sm w-3/4 mb-2">I build websites, web applications and android apps as well as write about how i do it, whenver I'm not gaming.</p>
                <div className="flex">
                    <button className="px-2 py-1 bg-[#FAD02C] rounded-sm text-white flex items-center mr-2">See my work <LuArrowUpRight /></button>
                    <button className="px-2 py-1 rounded-sm flex items-center">Read my blog <LuArrowDown /></button>
                </div>
            </section>
        </>
    )
}