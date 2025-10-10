import axios from "./axios.customize";

const createUserApi = (fullName, email, password,role) => {
    const URL_API = "/api/register";
    const data = {
        fullName,
        email,
        password,
        role
    };
    return axios.post(URL_API, data);
};

const loginApi = (email, password) => {
    const URL_API = "/api/login";
    const data = {
        email,
        password,
    };
    return axios.post(URL_API, data);
};

export { 
    createUserApi,
    loginApi


}