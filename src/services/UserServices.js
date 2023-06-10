import axios from "axios";

function UserServices() {
    return ( 
        axios.get("https://reqres.in/api/users?page=1")
        
     );
}

export  {UserServices};