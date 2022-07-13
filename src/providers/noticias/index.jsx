import { createContext, useContext, useState } from "react";

import { listNewsApi } from "../../services/noticias";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [news, setNews] = useState();

    const listNews = async (page) => {
        const response = await listNewsApi(page);
        setNews(response);
    }

    const FormatDate = (date) => {

        var day = date.slice(8, 10);
        var month = date.slice(5, 7);
        var year = date.slice(0, 4);
        let min = date.slice(11, 16);

        return `${day}/${month}/${year} ${min}`;
    }

    const handleNextPage = async (number, type) => {

        if (number > 0) {
            const response = await listNewsApi(number);

            if (number <= response[type].maxPage) {

                const data = { ...news };

                data[type].news = response[type].news;
                data[type].currentPage = response[type].currentPage;

                setNews(data);
            }
        }
    }

    return (
        <NewsContext.Provider
            value={{
                news,
                listNews,
                FormatDate,
                handleNextPage,
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = () => useContext(NewsContext);