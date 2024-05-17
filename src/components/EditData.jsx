// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateUser } from '../redux/userDetail/userDetailSlice';

// export default function EditData({ user, setEdit }) {

//     const [name, setName] = useState(user.name);
//     const [email, setEmail] = useState(user.email);
//     const [age, setAge] = useState(user.age);
//     const [gender, setGender] = useState(user.gender);
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(updateUser({ id: user.id, name, email, age, gender }));
//         setEdit(false);
//     };

//     return (
//         <div className='d-flex justify-content-center' style={{ width: '100%', height: '100vh', backgroundColor:'rgba(27, 27, 27, 0.8)', zIndex: '99', position: 'fixed', top: '0', bottom: '0', left: '0', right: '0' }}>
//             <div className="col-md-4 my-3" style={{ marginTop: '200px' }}>
//                 <div className="card bg-light mt-5" >
//                     <div className="card-body">
//                         <h1 className="card-title text-center">Edit User</h1>
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-group">
//                                 <label>Name</label>
//                                 <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label>Email</label>
//                                 <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label>Age</label>
//                                 <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label>Gender</label>
//                                 <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
//                                     <option value="Male">Male</option>
//                                     <option value="Female">Female</option>
//                                     <option value="Other">Other</option>
//                                 </select>
//                             </div>
//                             <button type="submit" className="btn btn-primary btn-sm m-2">Save</button>
//                             <button type="button" onClick={() => setEdit(false)} className="btn m-2 btn-sm btn-secondary ml-2">Cancel</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/userDetail/userDetailSlice';

export default function EditData({ user, setEdit }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id: user.id, name, email, age, gender }));
        setEdit(false);
    };

    return (
        <div className='d-flex justify-content-center' style={{ width: '100%', height: '100vh', backgroundColor: 'rgba(27, 27, 27, 0.8)', zIndex: '99', position: 'fixed', top: '0', bottom: '0', left: '0', right: '0' }}>
            <div className="col-md-4 my-3" style={{ marginTop: '200px' }}>
                <div className="card bg-light mt-5">
                    <div className="card-body">
                        <h1 className="card-title text-center">Edit User</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-3">
                                <label>Name</label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group my-3">
                                <label>Email</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group my-3">
                                <label>Age</label>
                                <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div className="form-group d-flex justify-content-evenly my-3">
                                <label className="form-label">Gender</label>
                                <div className="form-check">
                                    <input required className="form-check-input" type="radio" name="gender" id="male" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check">
                                    <input required className="form-check-input" type="radio" name="gender" id="female" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                                <div className="form-check">
                                    <input required className="form-check-input" type="radio" name="gender" id="other" value="Other" checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} />
                                    <label className="form-check-label" htmlFor="other">Other</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm m-2">Save</button>
                            <button type="button" onClick={() => setEdit(false)} className="btn m-2 btn-sm btn-secondary ml-2">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
