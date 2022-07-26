import { PropsWithChildren } from 'react';
import { BlogContextProvider } from "./BlogContext";

const GlobalContextProvider = (props: PropsWithChildren) => {
    return(
        <BlogContextProvider> 
            {props.children}
        </BlogContextProvider>
    );
}

export default GlobalContextProvider;