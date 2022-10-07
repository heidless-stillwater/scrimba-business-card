import React from "react"
import MailIcon from '@material-ui/icons/MailOutline'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'


export default function Footer() {
    return (
      <div className="footer">
        <MailIcon />
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    )
}