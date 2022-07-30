import { createContext, PropsWithChildren } from "react";

const BlogContext = createContext<any>([]);

const BlogContextProvider = (props: PropsWithChildren) => {

    const fetchBlogs = async () => {
        try {
            const data = await fetch('http://localhost:5000/api/posts', {
                method: 'GET'
            });
            const posts = await data.json();
            return posts;
        } catch (e: any) {
            return console.error(e.message);
        }
    }

    const providerValue = {
        fetchBlogs
    };

    return(
        <BlogContext.Provider value={providerValue}>
            {props.children}
        </BlogContext.Provider>
    );
}

export { BlogContext, BlogContextProvider };