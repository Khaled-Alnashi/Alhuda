import './Footer.css'
import {FaPhone,FaEnvelope,FaMapMarkedAlt} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
						<div className="footer-main">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-xs-12">
                  <h3>عنوان المقر الرئيسي</h3>
                  <ul>
                    <li className='contact'>
                      <a href="https://maps.app.goo.gl/xvYna7amTM1aBDBr7?g_st=it" ><span style={{ "color": "var(--color-primary)" }}> <FaMapMarkedAlt /> </span> Maxim-Gorki-Straße 52, 18106 Rostock </a>
                    </li>
                  </ul>
                </div>
								<div className="col-lg-6 col-md-6 col-xs-12">
                  <h3>أوقات العمل</h3>
                  <ul className='time'>
                    <li><span>يوم الأحد : </span><span> 09:00 - 15:00</span>
                    </li>
                    <li className='contact'>
                        <a href="tel:+4915201686913" ><span style={{ "color": "var(--color-primary)" }}><FaPhone /></span> 004915201686913 </a><br/>
                        <a href="mailto:Alhuda.rostock@gmail.com"><span style={{"color":"var(--color-primary)"}}><FaEnvelope /></span> Alhuda.rostock@gmail.com </a>
                    </li>
                    </ul>
                </div>
							</div>
						</div>
					</div>
          <div className="col-lg-12 coby">
            <p>  جميع الحقوق محفوظة   <a href="/#">لمدرسة الهدى </a>© 2024 
            </p>
          </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer