
import React, { Component } from 'react';

import styles from "./css/Navbar.module.css";

export default class Navbar extends Component {
  render() {
 let navigation=['home','tv shows','movies','popular','my list'];
    return (
      <div className={styles.Navbar} >
        <img src='images/580b57fcd9996e24bc43c529.png' alt='' className={styles.logo}/>
        <div className={styles.navlist}>
            {/*{navigation.map( item =>{<li>{item}</li>})}*/}
            <div>home</div>
            <div>tv shows</div>
            <div>movies</div>
            <div>popular</div>
            <div>my list</div>
        </div>
      </div>
    )
  }
}
