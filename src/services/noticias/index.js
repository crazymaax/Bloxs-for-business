import { instance } from "../index";

export const listNewsApi = async (page) => {

    const data = {};

    const responseEnergy = await instance
        .get(`&categories=74&page=${page}&per_page=3`)
        .then((response) => {
            const energyData = {
                news: response.data,
                maxPage: response.headers['x-wp-totalpages'],
                currentPage: page
            }
            data.energy = energyData;
        })
        .catch((error) => {
            return false;
        })

    const responseAgro = await instance
        .get(`&categories=76&page=${page}&per_page=3`)
        .then((response) => {

            const agroData = {
                news: response.data,
                maxPage: response.headers['x-wp-totalpages'],
                currentPage: page
            }
            data.agro = agroData;
        })
        .catch((error) => {
            return false;
        })

    return data;
};
