import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faHome, faMagic} from '@fortawesome/free-solid-svg-icons'
import Navbar2 from './Navbar';

function Contact() {
    return (
<div >
<Navbar2 color="dark"/>
<div class="footer" id="contact">
	<div class="container">
	<div class="service-head one text-center">
						<h4>CONTACT ME</h4>
						<h3>GET <span>IN TOUCH WITH ME</span></h3>
						<span class="border two"></span>
					</div>
		<div class="mail_us">
			<div class="col-md-6 mail_left float-left">
				<div class="contact-grid1-left">
					<div class="contact-grid1-left1">
						{/* <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> */}
                        <i class="fas fa-envelope"></i>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" color="#00a78e" />
                    	<h4>Contact By Email</h4>
						<ul>
							<li>Mail1: <a href="mailto:ramanprasad.0203@gmail.com">ramanprasad.0203@gmail.com</a></li>
							<li>Mail2: <a href="mailto:rewatiramanprasad.0203@gmail.com">rewatiramanprasad.0203@gmail.com</a></li>
						</ul>
					</div>
				</div>
					<div class="contact-grid1-left">
						<div class="contact-grid1-left1">
                        <FontAwesomeIcon icon={faPhone} size="2x" color="#00a78e" />
							<h4>Contact By Phone</h4>
							<ul>
								<li>Phone: +91 7250324730</li>
								{/* <!-- <li>Fax:</li> --> */}
							</ul>
						</div>
					</div>
					<div class="contact-grid1-left">
						<div class="contact-grid1-left1">
                        <FontAwesomeIcon icon={faHome} size="2x" color="#00a78e" />
							<h4>Looking For Address</h4>
							<ul>
								<li>Address: Bajrang BAli Colony, PhulwariSharif Anishabad</li>
								<li>Patna,Bihar, India.</li>
							</ul>
						</div>
					</div>
				<div class="clearfix"> </div>
			</div>
			<div class="col-md-6 mail_right float-right">
				<form  id="contactForm">
					<input type="text" name="name" value="Name" id="name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required=""/>
					<input type="email" name="nmail" value="Email"id="email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
					<input type="text" name="mobile" value="Mobile number" id="mobile" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Mobile number';}" required=""/>
					<textarea name="message..." id="message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
					<input type="submit" value="Send"/>
					
				</form>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="copy_right text-center">
			<p>&copy; 2021 RmNWrLd . All rights reserved | Design by <a href="" target="_blank">RMN WRLD.</a></p>
			 <ul class="social-icons two">
							{/* <li><a href="#"> </a></li> */}
							<li><a href="https://www.facebook.com/rewati.raman.545/" > <FontAwesomeIcon icon={faMagic} size="2x" color="#00a78e" /></a></li>
							<li><a href="https://www.linkedin.com/in/ramanprasad0203/" class="in"> </a></li>
							<li><a href="https://github.com/rewatiramanprasad" class="github"> </a></li>
						</ul>
		</div>
	</div>
</div>
</div>


        );
    }
    
export default Contact;