import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {UserServices} from '../services/UserServices';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';


function TableUsers() {

    const [listUsers,setListUsers] = useState([])
    // const [totalUser,setTotalUser] = useState(0)
    const [totalPages,setTotalPages] = useState(0)
    const [isModalAddNew, setIsModalAddNew] = useState(false)

    useEffect(() => {
        getUsers(1)

    },[])

    const getUsers = async (page) => {
        let res = await UserServices(page);
        if(res && res.data) {
            setListUsers(res.data)
            // setTotalUser(res.total)
            setTotalPages(res.total_pages)
        }
    }
    
    const handlePageClick = (event) => {
      getUsers(+event.selected +1)
    }


    return ( <>
    <div className='mt-4'></div>
      <div className='my-3 add-new'>
            <span>List users:</span>
            <button className='btn btn-primary' onClick={() => setIsModalAddNew(true)}>Add new</button>
          </div>
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
      
        <ReactPaginate
              previousLabel="<-"
              nextLabel="->"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={totalPages}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName="pagination justify-content-center"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              activeClassName="active"
              
            />
        <ModalAddNew show={isModalAddNew}
                    handleClose={() => setIsModalAddNew(false)}
        ></ModalAddNew>
    </> );
}

export default TableUsers;