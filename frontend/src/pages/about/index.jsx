import './about.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
const About =()=>{
    return(
        <div className="about">
            <Navbar/>
            <div className="aboutmain">
            <div className="leftabout">
                <img src="./image/aboutimg.webp" alt="" />
            </div>
            <div className="rightabout">
                <h1>Amazing Responsive Web and Mobile App Development</h1>
                <h4>It is time for your organization to move beyond the constraints of standard personal computers to enable flexibility in the way people work.</h4>
           <p>Noyce offer an array of software development services and web design to meet client’s needs. We have worked with people and organizations of varying size and industries; retail, consultancy, manufacturing, beauty & spa, education, healthcare/medical, law, retail and IT.

Noyce provides comprehensive and integrated IT services that includes strategic consulting, software development, building Web App, Mobile application development as well as the development and implementation of world-class e-business applications. Our expertise guarantees quality, competence and rapid execution of any projects.</p>
            </div>
        
            </div>
            <div className="container">
    <div className="design">
        <img src="./image/des1.webp" class="img-thumbnail" alt="..."/>
        <h4>DESIGN </h4>
        <p>
HTML5 and CSS3 <br />
Browser Compatibility <br />
Mobile Compatibility</p>
    </div>
    <div className="integration">
    <img src="./image/integration.jpeg" class="img-thumbnail" alt="..."/>
    <h4>INTEGRATION</h4>
    <p>Easy content management <br />
Work flow <br />
Localization</p>
   
    </div>

    <div className="optimization">
    <img src="./image/optimization.jpg" class="img-thumbnail" alt="..."/>

        <h4>OPTIMIZATION</h4>
        <p>
Security <br />
{/* PERFORMANCE <br /> */}
Caching <br />
{/* QA <br /> */}
Search Engine Optimization</p>
         </div>
    <div className="support"> 
    <img src="./image/support.jpeg" class="img-thumbnail" alt="..."/>
     
        <h4>SUPPORT</h4>
        <p>Training <br />
Usage documentation <br />
Post Development Consultation</p>
    </div>

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




        <Footer/>
        
        
        
        
        
        
        </div>
    )
}
export default About