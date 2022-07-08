import { instance } from "../index";

export const listNewsApi = async (category, page) => {

    let categoryNumber = 0

    if (category === "Energia") {
        categoryNumber = 74
    } else if (category === "Agronegócio") {
        categoryNumber = 76
    }

    const response = await instance
        .get(`&categories=${categoryNumber}&page=${page}&per_page=3`)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return false
        })

    return response;
};