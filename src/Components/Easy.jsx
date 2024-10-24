import React from 'react'
import Img from '../Images/user.jpg'
import Cartimg from '../Images/cart.jpg'
import Footer from './Footer';
const Easy = () => {


  return (
    <>
        <div className=''>
                <nav className="navbar navbar-light bg-light text-dark">
                    <h1 className='mx-3'>M&S</h1>
                    <a className="navbar-brand" href="#">
                        <img src={Img} width="40" height="40" className="d-inline-block align-top mx-3" alt="User Image" />
                        <img src={Cartimg} width="40" height="40" className="d-inline-block align-top mx-3" alt="Cart Image" />
                    </a>
                </nav>
            </div>
            <div className='d-flex justify-content-center mt-4 mx-4'>
                <div className="col-md-6 col-sm-12">
                    <img
                        className='img-fluid' style={{ width: "616px", height: "696px" }}
                        src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T25_2540M_J4_X_EC_0" data-src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T25_2540M_J4_X_EC_0" alt="Easy Iron Linen Blend Floral Shirt"  />
                </div>
                <div className="col-md-6 col-sm-12">
                    <b>M&S Collection</b>
                    <h2>Easy Iron Linen Blend Floral Shirt</h2>
                    <p>MRP ₹3,299.00 <br />
                        Price inclusive of all taxes
                    </p>
                    <p>Sizes :</p>
                    <div className='p-2 mb-2'>
                        <button className='btn  btn-light'>XS</button>
                        <button className='btn  btn-light'>S</button>
                        <button className='btn  btn-light'>M</button>
                        <button className='btn  btn-light'>L</button>
                        <button className='btn  btn-light'>XL</button>
                        <button className='btn  btn-light'>XXL</button>
                    </div>
                    <div>
                        <p>Colors :</p>
                        <img className='mx-2 img-fluid'
                            style={{ width: "33px", height: "31px" }}
                            src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_200,q_auto,f_auto,e_sharpen/SD_03_T25_2540M_J4_X_EC_88" alt="" />
                        
                    </div>
                    <button className="add-to-cart btn mt-4 mx-1" style={{ background: "#bdd755" }}>
                        Add to bag
                    </button>
                    <div className='productDescription mt-3'>
                        <h3>PRODUCT DESCRIPTION</h3>
                        <small><b>Product ID: T25/2540M</b></small>
                        <p>With its bold floral print, this linen-blend shirt will bring a holiday feel to your casual wardrobe. Made to a comfy regular fit from moisture-wicking fabric that's perfect in warmer weather. Easy-iron design needs little more than a quick press. M&S Collection: easy-to-wear wardrobe staples that combine classic and contemporary styles

                        </p>
                    </div>


                </div>
            </div>
            <Footer/>
    </>
  )
}

export default Easy
