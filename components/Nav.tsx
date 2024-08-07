export default function Nav() {
    return (
        <>
            <nav className="flex items-center sticky -top-2 py-2 w-full bg-white flex-wrap">
                <button className="px-2 py-1 text-white rounded-sm text-sm bg-[#FAD02C] mr-1 mb-1">Latest</button>
                <button className="px-2 py-1 rounded-sm text-sm bg-slate-100 mr-1 mb-1">Project Builds</button>
                <button className="px-2 py-1 rounded-sm text-sm bg-slate-100 mr-1 mb-1">Product Hunting</button>
                <button className="px-2 py-1 rounded-sm text-sm bg-slate-100 mr-1 mb-1">Dev Humor</button>
                <button className="px-2 py-1 rounded-sm text-sm bg-slate-100 mr-1 mb-1">Off-topic</button>
            </nav>
        </>
    )
}