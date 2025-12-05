import axios from "axios";

const API_URL = "http://localhost:3000/api"; //import.meta.env.VITE_API_URL;

export function postSubscribe(
    email: string,
    firstName: string | null = null,
    lastName: string | null = null
) {
    axios
        .post(API_URL + "/subscribers", {
            email,
            name: firstName,
            last_name: lastName,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
}

export function getSubscribers() {
    axios
        .get(API_URL + "/subscribers")
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
}
