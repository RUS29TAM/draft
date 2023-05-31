import YaService, {useFetching} from "../api";
import {useState} from "react";
import axios from "axios";

const Blogs = () => {
    const [posts, setPosts] = useState([]);

    // const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit) => {
    //         const response = await YaService.getAll(limit);
    //         setPosts(response.data)
    //         console.log(response.data)
    //     }
    // )


    async function fetchYa() {
        const response = await axios.get('https://forms.yandex.ru/cloud/6476ff3cc417f301c195c8d1/')
    }
    return (
        <>
            <h1>Blog Articles</h1>
            <button onClick={fetchYa} style={{color: 'blue'}}>GET POSTS</button>
        </>
    );
};

export default Blogs;