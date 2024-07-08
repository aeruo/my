export default function Post() {
    return (
        <>
            <div className="w-full flex flex-row mt-5">
                <div className="w-3/4">
                    <h1 className="text-lg">Building your own blog in 50 minutes with Next.js and Supabase</h1>
                    <p className="text-sm text-slate-500 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis amet quidem unde. Possimus, culpa in aspernatur error, mollitia molestias eligendi, nobis exercitationem placeat laudantium soluta doloremque hic maxime recusandae!</p>
                    <a className='text-[#FAD02C]'>Read More</a>
                </div>
                <img src="https://via.placeholder.com/500" alt="image" className="w-1/4 rounded-sm object-cover h-full" />
            </div>
        </>
    )
}