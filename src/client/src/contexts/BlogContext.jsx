import React, { createContext } from "react";

const BlogContext = createContext();

const BlogContextProvider = (props) => {

    const fetchBlogs = () => {
        return fetch('http://localhost:5000/posts', {
            method: 'GET'
        })
            .then(data => data.json())
            .then(posts => posts)
            .catch(e => console.error(e.message));
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