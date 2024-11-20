import './service.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const Service =()=>{
    return(
        <div className="service">
                        <Navbar/>

            <div className="servicemain">
            <img className='serviceimg' src="./image/flat.jpeg"  alt="..."/>

            </div>
            <div className="ourservice">
    <h2>Our Services</h2>
    <p>Our goal is to provide secured, well-designed software and web applications services in the context of exceptionally strong and rewarding interpersonal client relationships.</p>
</div>
<div className="card1">
<div className="webdevelopment">
        <img src="./image/webdevelopment.jpg" class="img-thumbnail" alt="..."/>
        <h4>Web Development </h4>
    <p>When Technology synergizes with Creativity, the result is creation of an elegant and professional Website</p>
    </div>
    <div className="digitalmarketing">
    <img src="./image/digitalmarketing.webp" class="img-thumbnail" alt="..."/>
    <h4>Digital Marketing</h4>
    <p> Our Digital marketing services are professional services that help market or advertise your business online, like through seo, social media, and paid channels.</p>
   
    </div>

    <div className="mobileapp">
    <img src="./image/mobileapp.webp" class="img-thumbnail" alt="..."/>

        <h4>Mobile App Development</h4>
    <p>We deliver mobile apps in all key mobile platforms</p>
         </div>
    <div className="searchengine"> 
    <img src="./image/searh.webp" class="img-thumbnail" alt="..."/>
     
        <h4>Search Engine Optimization</h4>
     <p>Noyce offers strategic SEO (Search Engine Optimization) services that can drive the success of any firm..</p>
    </div>


  
</div>
<div className="ourworkflow">
<div className="workleft">
  <h1>our work flow</h1>
  <p>Our workflow as a good cyber solution is determined by three stages: 
    designing a  project, visualizing all the details, and creating a model of the final design by using the data’s given by my client.</p>
</div>
<div className="workright">
<div className="upper">
    <div className="listern"><h1>Listen</h1>
    <p>We listen to our clients and their needs for expertise. And pay close attention to what’s right and relevant.</p>
    </div>
    <div className="Empathize">
      <h1>Empathize</h1>
      <p>We always put our clients at the center of our strategy so work can create real benefits for them.</p>
    </div>
  </div>
 <div className="lower">
  <div className="Anticipate">
    <h1>Anticipate</h1>
    <p>We think not only about what clients say they want, but also how we can anticipate their needs and make the Application design better.</p>
  </div>
  <div className="Collaborate">
    <h1>Collaborate</h1>
   <p> Great ideas can come from anywhere,so our developers work <br />
     with a collective Mind</p>
  </div>
 </div>
</div>








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


<Footer/>
        </div>
    )
}
export default Service