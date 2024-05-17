import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from '../redux/userDetail/userDetailSlice';
import ViewUser from './ViewUser';
import EditData from './EditData'; 
import { Link} from 'react-router-dom';

export default function ReadData() {

    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [id, setId] = useState(null);
    const dispatch = useDispatch();
    const { user, loading, searchUser } = useSelector((state) => state.userDetail);
    

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
    };

    useEffect(() => {
        dispatch(showUser());
    }, [dispatch]);

    const userToEdit = user.find((user) => user.id === id);

    return (
        <>
            {view && id!==null && <ViewUser id={id} setView={setView} />}
            {edit && userToEdit && <EditData user={userToEdit} setEdit={setEdit} />}
            {
                loading ? <h2>Loading...</h2> :
                    <div className="container my-3">
                        <div className="row">
                            {user && 
                            
                            user.filter((element)=>{
                                if(element.length===0){
                                    return element;
                                }
                                else{
                                    return element.name.toLowerCase().includes(searchUser.toLowerCase());
                                }
                            })
                            
                            .map((element) => (
                                <div className='col-md-3 my-3' key={element.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Post</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Name: {element.name}</h6>
                                            <p className="card-text">Email: {element.email}</p>
                                            <p className="card-text">Age: {element.age}</p>
                                            <p className="card-text">Gender: {element.gender}</p>

                                            <div className='d-flex justify-content-between'>
                                                <div>
                                                    <Link to={`view/${element.id}`}  onClick={() => { setView(true); setId(element.id); }} className="btn btn-sm btn-success">VIEW</Link>
                                                </div>
                                                <div>
                                                    <Link to={`edit/${element.id}`}  onClick={() => { setEdit(true); setId(element.id); }} className="btn btn-sm btn-primary">EDIT</Link>
                                                </div>
                                                <div>
                                                    <button onClick={() => handleDelete(element.id)} className="btn btn-sm btn-danger">DELETE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            }
        </>
    );
}


