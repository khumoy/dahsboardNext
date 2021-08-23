const axios = require('axios');

export const getTodos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
        console.log(res);

        return res.data;
    } catch (error) {
        console.error(error)
        return { error: true }
    }
};

export const getAlbums = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=10`)
        console.log(res)
        return res.data
    } catch (error) {
        console.error(error)

        return { error: true }
    }

}

export const getPhotos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
        console.log(res)
        return res.data
    } catch (error) {
        console.error(error)
        return { error: true }
    }
}