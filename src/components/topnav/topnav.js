import SideNav from "../sidenav/sidenav";
import './topnav.css';
import profile from './profile.png'

function TopNav() {

    

  
    return (
        <div className="tonav">

            <div className="side-nav">
                <SideNav />
            </div>
           

            <div className="login">
                <button className="btn btn-warning">
                    <img src={profile}   alt=''  height= '30px'/>
                </button>
            </div>
            



        </div>
    )
}
export default TopNav