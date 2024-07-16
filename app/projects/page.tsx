import { LuArrowDown, LuArrowRight } from "react-icons/lu";

export default function About() {
    return (
        <>
            <div className="w-full py-2">
                <h1 className="text-sm mb-2">PROJECTS</h1>
                <h2 className="text-3xl mb-5">Here are some of the projects I'm working on or currently maintaining.</h2>
                <div className="flex flex-wrap">
                    <div className="relative group w-[40%] mr-2 mb-2">
                        <img
                            className="h-full h-full rounded-sm"
                            src="https://via.placeholder.com/500"
                            alt=""
                        />
                        <div className="w-full h-full hidden group-hover:block absolute top-0 left-0 bg-black bg-opacity-[.7] p-4 rounded-sm text-white flex flex-col justify-between">
                            <h1 className="text-xl font-bold">Project Title</h1>
                            <p className="text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi quibusdam quaerat fugit, enim sequi</p>
                            <button className="px-2 py-1 bg-[white] rounded-sm text-black flex items-center mr-2">See live demo <LuArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}