import { Button } from "@mui/material";
import TopNav from "../topnav/topnav"
import './landingpage.css'
import option from './options.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { redirect } from "react-router-dom";


function LandingComponent() {

    const Navigate = useNavigate();
//    Navigate('/home')

    return (
        <div>

            <div>
                <TopNav />
            </div>
            <div className="con">

                <div className="row">
                    <a className="col" href="https://www.google.com">
                        {/* <img src={option} height='60px' alt='...' /> */}
                        <div>
                            Google

                        </div>
                    </a>
                    <div className="col">
                    <NavLink
                            to="/home"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "yellow"
                                    : "blue",
                            })}
                        >Go to Home page</NavLink>
                    
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        1
                    </div>
                    <div className="col">
                        2
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        1
                    </div>
                    <div className="col">
                        2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingComponent