import YaService, {useFetching} from "../api";
import {useState} from "react";

const Blogs = () => {
    const [posts, setPosts] = useState([]);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit) => {
            const response = await YaService.getAll(limit);
            setPosts(response.data)
        }
    )

    return (
        <>
            <h1>Blog Articles</h1>
            <button onClick={() => fetchPosts} style={{color: 'green'}}>GET POSTS</button>
        </>
    );

};

export default Blogs;