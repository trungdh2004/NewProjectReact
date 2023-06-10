import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {postCreateUser} from '../services/UserServices';
import {  toast } from 'react-toastify';

function ModalAddNew({show,handleClose}) {

    const [name,setName] = useState('')
    const [Job,setJob] = useState('')
    
    const handleSave = async () => {
        let res = await postCreateUser(name,Job)

        if(res && res.id) {
            handleClose()
            setJob('')
            setName('')
            toast.success('A user iss creared success')
        }else {
            toast.error('A user iss error')

        }
    }


  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add user new</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <input 
                    className='form-control mb-3 ' 
                    type='text' 
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <input 
                    className='form-control ' 
                    type='text' 
                    placeholder='Job'
                    value={Job}
                    onChange={(e) => setJob(e.target.value)}
                ></input>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalAddNew;