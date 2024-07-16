import { createClient } from '@/utils/supabase/client';
import Nav from '@/components/Nav';
import Post from '@/components/Post';

const supabase = createClient();

export default async function Blog() {
    let { data: posts, error } = await supabase
        .from('blog')
        .select('*');

    if (error) {
        console.error('Error fetching posts:', error);
        return <div>Error loading posts</div>;
    }

    return (
        <>
            <div className="w-full min-h-screen" id='blog'>
                <Nav />
                {posts ? (
                    posts.map((post) => (
                        <Post key={post.id} slug={post.slug} />
                    ))
                ) : (
                    <div>No posts available</div>
                )}
            </div>
        </>
    );
}
