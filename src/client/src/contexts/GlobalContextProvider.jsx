import { BlogContextProvider } from "./BlogContext";

const GlobalContextProvider = (props) => {
    return(
        <BlogContextProvider> 
            {props.children}
        </BlogContextProvider>
    );
}

export default GlobalContextProvider;