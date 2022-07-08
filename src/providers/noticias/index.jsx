import { createContext, useContext, useEffect, useState } from "react";
import { listNewsApi } from "../../services/noticias";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [energyNews, setEnergyNews] = useState([])
    const [agroNews, setAgroNews] = useState([])

    const [energyMaxPage, setEnergyMaxPage] = useState(1)
    const [agroMaxPage, setAgroMaxPage] = useState(1)

    const listNews = async (category, page) => {
        const response = await listNewsApi(category, page)
        if (category === "Energia") {

            setEnergyMaxPage(response.headers['x-wp-totalpages'])
            setEnergyNews(response.data)

            return response.data
        } else if (category === "Agronegócio") {

            setAgroMaxPage(response.headers['x-wp-totalpages'])
            setAgroNews(response.data)

            return response.data
        }
    }

    const FormatDate = (date) => {

        var day = date.slice(8, 10)
        var month = date.slice(5, 7)
        var year = date.slice(0, 4)
        let min = date.slice(14, 19)

        return `${day}/${month}/${year} ${min}`
    }

    const [energyPage, setEnergyPage] = useState(1)
    const [agroPage, setAgroPage] = useState(1)

    const handleNextPage = async (number, category, boolNextPage) => {

        const response = await listNewsApi(category, number)
        console.log(number, category, boolNextPage)
        if (response) {
            if (boolNextPage) {
                if (category === "Energia" && energyPage < energyMaxPage) {
                    /* 
                        Gostaria de ter feito um objeto contendo as duas informações desta maneira na hora da requisição: 
                            const energyPageData = {
                                page: Number(response.config.url.slice(20, 21)),
                                maxPage: response.headers['x-wp-totalpages']
                            }
                        Como também um agroPageData.

                        Mas infelizmente acontecia um bug na verificação de página máxima e página atual, encontrei solução criando states únicos para cada.
            
                    */

                    setEnergyPage(number + 1)
                    listNews("Energia", energyPage)

                } else if (category === "Agronegócio" && agroPage < agroMaxPage) {

                    setAgroPage(number + 1)
                    listNews("Agronegócio", agroPage)
                }
            } else {
                if (category === "Energia" && energyPage > 1) {

                    setEnergyPage(number - 1)
                    listNews("Energia", energyPage)

                } else if (category === "Agronegócio" && agroPage > 1) {

                    setAgroPage(number - 1)
                    listNews("Agronegócio", agroPage)
                }
            }
        }
    }

    return (
        <NewsContext.Provider
            value={{
                energyNews,
                agroNews,
                energyMaxPage,
                agroMaxPage,
                energyPage,
                agroPage,
                listNews,
                FormatDate,
                handleNextPage
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = () => useContext(NewsContext);