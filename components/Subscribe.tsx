export default function Subscribe(){
    return(
        <>
        <div className="w-full bg-slate-100 p-4 rounded-sm">
            <h2 className="text-lg font-bold">Subscribe, maybe?</h2>
            <p className="text-sm mb-2">I'll send just no more than one email a week, guaranteed no spam.</p>
            <input type="text" className="w-full p-1 px-2 bg-white border-slate-200 text-sm mb-1 rounded-sm" placeholder="Your email..."/>
            <button className="w-full py-1 px-2 bg-[#FAD02C] rounded-sm">Submit</button>
        </div>
        </>
    )
}