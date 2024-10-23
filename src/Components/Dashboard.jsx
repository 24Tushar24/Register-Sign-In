import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from '../Images/user.jpg'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/signin');
    }
    return (
        <>
            <div>


                <nav class="navbar navbar-light bg-dark text-light">
                    <h1 className='mx-3'>Dashboard</h1>
                    <a class="navbar-brand" href="#">
                        <img src={Img} width="40" height="40" class="d-inline-block align-top mx-3" alt="" />
                        <button type="button" onClick={logout} class="btn btn-primary">Log Out</button>
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Dashboard
