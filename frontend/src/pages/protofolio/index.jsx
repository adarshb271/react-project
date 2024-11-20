import './protfolio.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
const Protfolio =()=>{
    return(
        <div className="protfolio">
                        <Navbar/>

                        <div className="protomain">
            <img className='protoimg' src="./image/flat.jpeg"  alt="..."/>

            </div>
            <div className="project">
  <div className="projectleft">
  <h3 >Projects</h3>
  <h1>Featured Projects</h1>
  </div>
  <div className="projectright">
    <h6>Software Project is the complete procedure of software development from requirement gathering to testing and maintenance, carried out according to the execution approaches, in a specified period of time to achieve proposed software product.</h6>
    <br />
    <br />
    <a class="icon-link" href="#">
Know more
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>


  </div>
 </div>
<div className="image2">
  <div className="upimage">
  <img className='topimg' src="./image/ayur.webp"  alt="..."/>
  <img className='topimg' src="./image/artch.jpeg"  alt="..."/> 
  <img className='topimg' src="./image/lifecare.jpg"  alt="..."/>
  <img className='topimg' src="./image/sftwr.jpg"  alt="..."/>


  </div>
<div className="lowimage">
<img src="./image/clinic.webp" class="btmimg" alt="..."/>
<img src="./image/look.jpeg" class="btmimg" alt="..."/>
<img src="./image/software.jpeg" class="btmimg" alt="..."/>
<img src="./image/safetech.jpg" class="btmimg" alt="..."/>


</div>

 
</div>

<Footer></Footer>


        </div>
    )
}
export default Protfolio