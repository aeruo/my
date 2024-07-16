import { createClient } from '@/utils/supabase/client'

const supabase = createClient();

export default async function Post(props: any) {

    const slug = props.slug;
    const path = "/post/" + slug;

    let { data: post, error } = await supabase
        .from('blog')
        .select('*')
        .ilike('slug', slug )
        .single()

    return (
        <>
            <div className="w-full md:flex flex-row mt-5">
                <div className="md:w-3/4 mb-2 md:mb-0 md:pr-2">
                    <h1 className="text-xl">{post.title}</h1>
                    <p className="text-sm text-slate-500 mb-2">{post.tldr}</p>
                    <a className='text-[#FAD02C]' href={path}>Read More</a>
                </div>
                <img src={post.image} alt="image" className="md:w-1/4 rounded-sm object-cover h-full" />
            </div>
        </>
    )
}