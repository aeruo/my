import { createClient } from '@/utils/supabase/client'
import Markdown from 'react-markdown'

const supabase = createClient();

export default async function Post({ params }: { params: { slug: string } }) {

    let { data: post, error } = await supabase
        .from('blog')
        .select('*')
        .ilike('slug', params.slug )
        .single()

    return (
        <>
            <div className="w-full py-4">
                <h1 className="text-sm mb-2">BLOG</h1>
                <h2 className="text-3xl mb-5">{post.title}</h2>
                <img src={post.image} alt="" className="w-full h-auto mb-5" />
                <Markdown className="md">
                    {post.content}
                </Markdown>
            </div>
        </>
    )
}