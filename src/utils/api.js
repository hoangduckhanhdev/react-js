import axios from "./axios.customize";

const createUserApi = (fullName, email, password,role) => {
    const URL_API = "/v1/api/register";
    const data = {
        fullName,
        email,
        password,
        role
    };
    return axios.post(URL_API, data);
};

export { createUserApi}