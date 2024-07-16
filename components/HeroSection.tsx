import { LuArrowDown, LuArrowRight } from "react-icons/lu";

export default function HeroSection() {
    return (
        <>
            <section className="w-full flex flex-col mb-5">
                <img src="https://avatars.githubusercontent.com/u/49512755?v=4" alt="me" className="mt-2 rounded-full w-[60px] h-[60px] mb-2" />
                <h1 className="md:text-4xl text-2xl md:w-3/4 mb-2">Hey there, I'm Emmanuel, a software developer.<br /></h1>
                <p className="text-sm md:w-3/4 mb-2">I build websites, web applications and android apps as well as write about how i do it, whenver I'm not gaming.</p>
                <div className="flex">
                    <a href="/projects">
                        <button className="px-2 py-1 bg-[#FAD02C] rounded-sm text-white flex items-center mr-2">See my work <LuArrowRight /></button>
                    </a>
                    <a href="/about">
                        <button className="px-2 py-1 bg-[#FAD02C] rounded-sm text-white flex items-center mr-2">More about me <LuArrowRight /></button>
                    </a>
                </div>
            </section>
        </>
    )
}