import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar=()=>{
    const navigate = useNavigate();


    return(
        <div className="navbar">
            <div className="navmain">
<div className="logo">
<img src="./logo.png" alt="" />
    
</div>
<div className="details">
<ul  onClick={()=>{
    navigate(`/home`)
} }>Home</ul>

<ul  onClick={()=>{
    navigate(`/about`)
}  }>About</ul>

<ul onClick={()=>{
    navigate(`/service`)
} }>Service</ul>
<ul onClick={()=>{
    navigate(`/protfolio`)
} }>Protfolio</ul>
<ul onClick={()=>{
    navigate(`/contact`)
} }>Contact</ul>
<br />
<br /><br />

{/* <button className="btn btn-primary">Signup</button> */}
<button onClick={()=>{
    navigate(`/login`)
} }  className="buttonlogin">Login</button>


</div>


            </div>











        </div>
    )}
    export default Navbar
