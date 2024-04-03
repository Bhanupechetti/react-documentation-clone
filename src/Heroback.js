import { Link, useNavigate } from "react-router-dom";
import "./Heroback.css"
function Heroback() {
const navigate2 = useNavigate();
  function logout() {
    navigate2("/login")
  }
    return(
        <div className="heroback">
        <div className="iconreact">
        <i class="fa-brands fa-react"></i>
        <h3>React</h3>
        </div>
        <div className="navbar" id="navbar">
          <Link to="/home"><h3 >Home</h3></Link>
          <Link to="/About"><h3>About</h3></Link>
          <Link to="/Contact"><h3 style={{marginRight:"30px"}}>Contact</h3></Link>
          <div className="profile">
            <i class="fa-solid fa-user profileicon"></i>
            <div className="profilematter">
              <h3 onClick={logout}>Log Out</h3>
            </div>
          </div>
        </div>

        <div className="menuicon">
           <i class="fa-solid fa-bars"></i>
          <div className="menuhover">
            <Link to="/home" className="menulinks"><p>Home</p></Link>
            <Link to="/About" className="menulinks"><p>About</p></Link>
            <Link to="/Contact" className="menulinks"><p>Contact</p></Link>
          </div>
        </div>
      
      </div>
    );
};
export default Heroback;



