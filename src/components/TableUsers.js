import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {UserServices} from '../services/UserServices';

function TableUsers() {

    const [listUsers,setListUsers] = useState([])

    useEffect(() => {
        getUsers()

    },[])

    const getUsers = async () => {
        let res = await UserServices();
        
        if(res && res.data) {
            setListUsers(res.data.data)
        }
    }
    
    return ( <>
    <div className='mt-4'></div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
          {listUsers && listUsers.length > 0 &&
            listUsers.map((item,index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              )
            })
          }
        
      </tbody>
    </Table>
    </> );
}

export default TableUsers;