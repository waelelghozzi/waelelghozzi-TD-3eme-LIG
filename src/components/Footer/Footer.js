import React, { Component } from 'react'
import styles from "./Footer.module.css";
import SocialLinks from "./Slinks/SocialLinks.js"
import FooterLinks from "./Flinks/FooterLinks.js"

export default class Footer extends Component {
  render() {
    return (
      <footer>
      <SocialLinks/>
      <FooterLinks/>
      </footer>
    )
  }
}
