import axios from "./customize-axios";

function UserServices(page) {
    return ( 
        axios.get(`/api/users?page=${page}`)
        
     );
}

function postCreateUser(name,job) {
    return axios.post('/api/users',{name,job});
}


export  {UserServices,postCreateUser};