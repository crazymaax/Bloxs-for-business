import { createContext, useContext, useEffect, useState } from "react";
import { listNewsApi } from "../../services/noticias";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [energyNews, setEnergyNews] = useState([])
    const [agroNews, setAgroNews] = useState([])

    const listNews = async (category, page) => {
        const response = await listNewsApi(category, page)
        if (category === "Energia") {
            setEnergyNews(response)
        } else if (category === "Agronegócio") {
            setAgroNews(response)
        }
        return response
    }

    const FormatDate = (date) => {

        var day = date.slice(8,10)
        var month = date.slice(5,7)
        var year = date.slice(0,4)
        let min = date.slice(14,19)

        return `${day}/${month}/${year} ${min}`
    }

    return (
        <NewsContext.Provider
            value={{
                energyNews,
                agroNews,
                listNews,
                FormatDate
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = () => useContext(NewsContext);