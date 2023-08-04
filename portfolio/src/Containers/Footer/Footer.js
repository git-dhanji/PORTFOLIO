import React from 'react'
import './footer.css'
const Footer = (props) => {
  return (
    <div className={`footer-main `}>
        <div className="copyright">Copyright © 2023. All rights are reserved</div>
        <div className="footer-icons"><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-google-play"></i></div>
    </div>
  )
}

export default Footer
