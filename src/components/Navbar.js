
import React, { Component } from 'react';

import styles from "./css/Navbar.module.css";
import logo from './images/580b57fcd9996e24bc43c529.png';

export default class Navbar extends Component {
  render() {
 //let navigation=['home','tv shows','movies','popular','my list'];
    return (
      <div className={styles.Navbar} >
        <img src={logo} alt='' className={styles.logo}/>
        <div className={styles.navlist}>
            {/*{navigation.map( item =>{<li>{item}</li>})}*/}
            <div>Home</div>
            <div>Tv shows</div>
            <div>Movies</div>
            <div>Popular</div>
            <div>My list</div>
        </div>
      </div>
    )
  }
}
