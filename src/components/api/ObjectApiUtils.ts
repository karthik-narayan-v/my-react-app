import axios from "axios";

const base_url = 'https://api.restful-api.dev/objects/';

export const getAllObjects = () => {

    axios.get(base_url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });

}