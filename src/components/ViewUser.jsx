import React from 'react'
import { useSelector } from 'react-redux';

export default function ViewUser({ id, setView }) {
    
    
    const allData = useSelector((state) => state.userDetail.user);
    const singleUser = allData.find((user) => user.id === id);
    
    if (!singleUser) {
        return null; 
    }

    return (
        <div className='d-flex justify-content-center' style={{ width: '100%', height: '100vh', backgroundColor:'rgba(27, 27, 27, 0.8)',  zIndex: '99', position: 'fixed', top: '0', bottom: '0', left: '0', right: '0' }}>
            <div className="col-md-4 my-3" style={{ opacity: '1'}}>
                <div className="card " style={{ marginTop: '100px', opacity:'1' }}> 
                    <div className="card-body">
                        <h5 className="card-title">Post</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Name: {singleUser.name}</h6>
                        <p className="card-text">Email: {singleUser.email}</p>
                        <p className="card-text">Age: {singleUser.age}</p>
                        <p className="card-text">Gender: {singleUser.gender}</p>
                        <div>
                            <button onClick={() => setView(false)} className="btn btn-sm btn-danger">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

