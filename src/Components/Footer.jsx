import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='footer  mt-4 '>
    <div className='bg-dark text-light '>
        <div className='row'>
            <div className='col-12 text-center mb-3 col-sm-10 col-md-6 py-4 mx-auto'>
                <p>Enter email for latest updates and offers!</p>
            </div>
            <div className='col-6 col-md-4 offset-md-4 mb-4 col-sm-10 col-sm-12 py-4'>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter your email" aria-label="Email input" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Go</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container bg-light mt-3">
        <div className="row">
            <div className="col-md-3 mb-4">
                <h4><b>Here to help</b></h4>
                <a className='text-decoration-none text-dark' href="#">Delivery</a><br />
                <a className='text-decoration-none text-dark' href="#">Track my order</a><br />
                <a className='text-decoration-none text-dark' href="#">Returns & refunds</a><br />
                <a className='text-decoration-none text-dark' href="#">Help & contact us</a><br />
                <a className='text-decoration-none text-dark' href="#">All in this Together</a>
            </div>
            <div className="col-md-3 mb-4">
                <h4><b>Shopping with us</b></h4>
                <a className='text-decoration-none text-dark' href="#">Create an account</a><br />
                <a className='text-decoration-none text-dark' href="#">Payment & offers</a><br />
                <a className='text-decoration-none text-dark' href="#">Size guides</a><br />
                <a className='text-decoration-none text-dark' href="#">Site map</a><br /> 
                <a className='text-decoration-none text-dark' href="#">Find a store</a> 
            </div>
            <div className="col-md-3 mb-4">
                <h4><b>About Us</b></h4>
                <a className='text-decoration-none text-dark' href="#">Careers@M&S India</a><br />
                <a className='text-decoration-none text-dark' href="#">Corporate site</a><br />
                <a className='text-decoration-none text-dark' href="#">Sparks</a>
            </div>
            <div className="col-md-3 mb-4">
                <h4><b>Legal</b></h4>
                <a className='text-decoration-none text-dark' href="#">Terms & Conditions</a><br />
                <a className='text-decoration-none text-dark' href="#">Privacy & Cookies</a><br />
                <a className='text-decoration-none text-dark' href="#">Customer Data Promise</a><br /> 
                <a className='text-decoration-none text-dark' href="#">Certificates & Licenses</a>
            </div>
        </div>
        <div className='row text-center mt-3 mb-4'>
            <p>Marks and Spencer Reliance India Private Limited</p>
        </div>
    </div>
</footer>
        </>
    )
}

export default Footer
