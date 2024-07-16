import { LuArrowDown, LuArrowRight } from "react-icons/lu";

export default function About() {
    return (
        <>
            <div className="w-full py-2">
                <h1 className="text-sm mb-2">CONTACT</h1>
                <h2 className="text-3xl mb-5">Let's get in touch!</h2>
                <form action="" className="md:w-3/4">
                    <input required type="text" name="name" id="name" className="w-full p-2 text-md bg-slate-100 mb-2 rounded-sm" placeholder="Your Name"/>
                    <input required type="text" name="email" id="email" className="w-full p-2 text-md bg-slate-100 mb-2 rounded-sm" placeholder="Email"/>
                    <textarea name="message" id="message" className="w-full h-64 p-2 text-md bg-slate-100 mb-2 rounded-sm" placeholder="Message..."></textarea>
                </form>
            </div>
        </>
    )
}