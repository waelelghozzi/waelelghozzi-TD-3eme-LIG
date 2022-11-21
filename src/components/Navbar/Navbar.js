
import React, { Component } from 'react';

import styles from "./Navbar.module.css";
import logo from './assets/580b57fcd9996e24bc43c529.png';
import SecNav from '../SecNav/SecNav.js'
import Links from './links/links';

export default class Navbar extends Component {
  render() {
 //let navigation=['home','tv shows','movies','popular','my list'];
    return (
      <div className={styles.Navbar} >
        
      <div className={styles.cont}>
      <img src={logo} alt='' className={styles.logo}/>
      <div>
          {/*{navigation.map( item =>{<li>{item}</li>})}*/}
          <Links/> 

            {/* <div>Home</div>
            <div>Tv shows</div>
            <div>Movies</div>
            <div>Popular</div>
            <div>My list</div> */}
        </div>
        </div>
        <SecNav/>

      </div>
    )
  }
}
