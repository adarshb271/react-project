import './contact.css'
import Navbar from '../../components/navbar'
import React from 'react'
import { Input,Button,Flex } from 'antd';
import Footer from '../../components/footer'


const { TextArea } = Input;
const Contact =()=>{
    return(
        <div className="about">
          
            <Navbar/>
            <div className="protomain">
            <img className='protoimg' src="./image/flat.jpeg"  alt="..."/>

            </div>
<div className="contactinfo">
    <div className="contactleft">
<h4>Contact Information</h4>
<p>Address:H.NO 15/38 <br />
    VINEETHA UPSTAIRS <br />
R.C.CHRUCH ROAD <br />
NEAR KERALA NURSING HOME <br />
SULTANPET PALAKKAD KERALA <br />
INDIA 678001</p>

    </div>

    <div className="contactright">
        <h6>phone:9576248657</h6>
        <h6>Email:info@noyce.in</h6>
    </div>
</div>
<div className="last">
    <div className="map">
    <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.5090883380293!2d76.65053731538134!3d10.773723962417267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7a79d1b3ef383%3A0x7bdf9bf0425fa40d!2sNoyce%20Cyber%20Solutions!5e0!3m2!1sen!2sin!4v1698234567890!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
    <div className="lastform">
    <Input className='input' placeholder=" your Name" />
    <Input  className='input' placeholder=" your Emailid" />
    <Input   className='input'placeholder=" Subject" />
    <TextArea className='input'  rows={4} placeholder="Message" maxLength={6} />
    <Button className='btn' type="primary">submit</Button>
    </div>
</div>






<Footer/>



        </div>
    )
}
export default Contact