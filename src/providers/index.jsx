import { NewsProvider } from "./noticias";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
    return (
        <NewsProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </NewsProvider>
    )
};
export default Providers;