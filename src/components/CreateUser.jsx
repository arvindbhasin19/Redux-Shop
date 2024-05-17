// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { createUser } from '../redux/userDetail/userDetailSlice';
// import { useNavigate } from 'react-router-dom';

// export default function CreateUser() {

//     const [users, setUsers] = useState({})
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const getUsers = (e) => {
//         setUsers({
//             ...users,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(createUser(users))
//         navigate('/')

//     }

//     return (
//         <div className='d-flex justify-content-center '>
//             <div className='col-md-3  rounded border-secondary bg-light m-5 p-3'>
//                 <h1 className='text-center'>Create User</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="name" className="form-label">Name</label>
//                         <input required type="text" name='name' onChange={getUsers} className="form-control" id="name" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="form-label">email</label>
//                         <input required type="email" name='email' onChange={getUsers} className="form-control" id="email" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="age" className="form-label">Age</label>
//                         <input required type="number" name='age' onChange={getUsers} className="form-control" id="age" />
//                     </div>
//                     <div className="mb-3">
//                         <div className="form-group">
//                             <label>Gender</label>
//                             <select className="form-control" name='gender' onChange={getUsers}>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Other">Other</option>
//                             </select>
//                         </div>
//                     </div>
//                     <button type="submit" className="btn btn-sm btn-success">Create</button>
//                 </form>
//             </div>

//         </div>
//     )
// }

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/userDetail/userDetailSlice';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUsers = (e) => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(users));
        navigate('/');
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='col-md-3 rounded border-secondary bg-light m-5 p-3'>
                <h1 className='text-center'>Create User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input required type="text" name='name' onChange={getUsers} className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input required type="email" name='email' onChange={getUsers} className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input required type="number" name='age' onChange={getUsers} className="form-control" id="age" />
                    </div>
                    <div className="mb-3 d-flex justify-content-evenly">
                        <label className="form-label">Gender</label>
                        <div className="form-check">
                            <input required className="form-check-input" type="radio" name="gender" id="male" value="Male" onChange={getUsers} />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check">
                            <input required className="form-check-input" type="radio" name="gender" id="female" value="Female" onChange={getUsers} />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        <div className="form-check">
                            <input required className="form-check-input" type="radio" name="gender" id="other" value="Other" onChange={getUsers} />
                            <label className="form-check-label" htmlFor="other">Other</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Create</button>
                </form>
            </div>
        </div>
    );
}
