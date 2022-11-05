import React from "react";
import { Link } from "react-router-dom";



function LogIn() {
    return (
        <div className="logincontainer">
            {/* <table>
                <tr>
                    <td>
                        <h3>Mail Id</h3>
                    </td>
                    <td>
                        <form>
                            <label htmlFor="mailid"></label>
                            <input type="text" />
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Password</h3>
                    </td>
                    <td>
                        <form>
                            <label htmlFor="pword"></label>
                            <input type="text" />
                        </form>
                    </td>
                </tr>
                <tr>
                    <td><button type="submit" className="supbtn">Sign up</button></td>
                    <td><center><Link to="/trendingvideoslist" ><button className="linbtn" >Log in</button></Link></center></td>
                </tr>
            </table> */}
            <div class="centre">
                {/* <h1>LogIn</h1> */}
            <br />
            <form method="post" class="form">
                <div class="txt_fld">
                    <input type="text" required/>
                    <span></span>
                    <label>User_Id</label>

                </div>
                <div class="txt_fld">
                    <input type="password" required/>
                    <span></span>
                    <label>Password</label>

                </div>
                <div class="forgot">
                    <a href="#" class="ftlink">forgot password?</a>
                </div>
                <input type="submit" value="Login"/>
                <p class="or">or</p>
                <Link to="/trendingvideoslist" ><button className="linbtn" >Skip Login</button></Link>
                <div class="signup_link">
                    not a member?<a href="#">Signup</a>
                </div>
            </form>
            </div>
            
        </div>
    )
}

export default LogIn;