import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from '../Images/user.jpg'
import Cartimg from '../Images/cart.jpg'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Dashboard = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/signin');
    }

    const redirecttoMens = () => {
        navigate('/mens')
    }
    const redirecttoPlain = () => {
        navigate('/plain')
    }
    const redirecttoTextured = () => {
        navigate('/textured')
    }
    const redirecttoPure = () => {
        navigate('/pure')
    }
    const redirecttoCotton = () => {
        navigate('/cotton')
    }
    const redirecttoEasy = () => {
        navigate('/easy')
    }


    return (
        <>
            <div className=''>


                <nav className="navbar navbar-light bg-light text-dark">
                    <h1 className='mx-3'>M&S</h1>
                    <a className="navbar-brand" href="#">
                        <img src={Img} width="40" height="40" className="d-inline-block align-top mx-2" alt="" />
                        <img src={Cartimg} width="40" height="40" className="d-inline-block align-top mx-3" alt="Cart Image" />
                        <button type="button" onClick={logout} class="btn btn-dark">Log Out</button>
                    </a>
                </nav>
            </div>

            <div className='container text-center mt-4'>
                <h2>Men - New In </h2>
                <p>
                    Stay in vogue with our comfortable range of men’s shorts, trackpants, jeans and much more. Discover trends and styles in our men’s clothing collection. From shirts to quilted jackets we all it all to take you through the season. For a laid-back look, pick classic chinos or easy-care cargos in classy colours.
                </p>
                <div className='d-flex justify-content-around flex-wrap mt-4'>
                    <div className="col-md-4">
                        <img onClick={redirecttoMens}
                            className='img-fluid' style={{ width: "262px", height: "292px"}}
                            src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T25_2552M_SH_X_EC_0" alt="Pure Cotton Corduroy Overshirt" />
                        <p>Pure Cotton Corduroy Overshirt</p>
                        <p>₹4,499.00</p>
                    </div>
                    <div className="col-md-4">
                        <img onClick={redirecttoPlain}
                            className='img-fluid' style={{ width: "262px", height: "292px" }}
                            src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/OD_03_T16_5002I_F0_X_EC_0"
                            data-src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/OD_03_T16_5002I_F0_X_EC_0"
                            alt="Plain Band Collar Jacket" />
                        <p>Plain Band Collar Jacket</p>
                        <p>₹5,999.00</p>
                    </div>
                    <div className="col-md-4">
                        <img onClick={redirecttoTextured}
                        className='img-fluid' style={{ width: "262px", height: "292px" }}
                            src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T25_1240M_E4_X_EC_0"
                            data-src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T25_1240M_E4_X_EC_0"
                            alt="Textured Check Overshirt" />
                        <p>Textured Check Overshirt</p>
                        <p>₹4,499.00</p>
                    </div>
                    <div className="col-md-4">
                        <img onClick={redirecttoPure}
                            className='img-fluid' style={{ width: "262px", height: "292px" }}
                            src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T25_1299M_KH_X_EC_0" data-src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T25_1299M_KH_X_EC_0" alt="Pure Cotton Utility Overshirt" />
                        <p>Pure Cotton Utility Overshirt</p>
                        <p>₹3,999.00</p>
                    </div>
                    <div className="col-md-4">
                        <img onClick={redirecttoCotton}
                        className='img-fluid' style={{ width: "262px", height: "292px" }}
                            src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T28_3391M_NZ_X_EC_0" data-src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T28_3391M_NZ_X_EC_0" alt="Pure Cotton Embroidered Leaf Polo Shirt" />
                        <p>Pure Cotton Embroidered Leaf Polo Shirt</p>
                        <p>₹2,499.00</p>
                    </div>
                    <div className="col-md-4">
                        <img onClick={redirecttoEasy}
                        className='img-fluid' style={{ width: "262px", height: "292px" }}
                            src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T25_2540M_J4_X_EC_0" data-src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T25_2540M_J4_X_EC_0" alt="Easy Iron Linen Blend Floral Shirt" />
                        <p>Easy Iron Linen Blend Floral Shirt</p>
                        <p>₹3,299.00</p>
                    </div>

                </div>
                    
            </div>
            <Footer/>
        </>
    )
}

export default Dashboard

