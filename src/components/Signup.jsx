import React from 'react';

function Signup() {
    return (
        <div>
        
        <div className="signup-box">
            <form className='formSign' action="https://www.youtube.com/">
            <h1 className="signup">Sign Up</h1>
                <h4>Menstru help</h4>
                <label className="labels">First Name</label>
                <input type="text" placeholder="" required="" />
                <br />
                <label className="labels">Last Name</label>
                <input type="text" placeholder="" required="" />
                <br />
                <label className="labels">E-Mail</label>
                <input type="email" placeholder="" required="" />
                <br />
                <label className="labels">Password</label>
                <input type="password" placeholder="" required="" />
                <br />
                <label className="labels">Confirm Password</label>
                <input type="password" placeholder="" required="" />
                <br />
                <input type="submit" defaultValue="Submit" />
            </form>
        </div>
        </div>

    );
}

export default Signup;