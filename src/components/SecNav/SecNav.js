import React, { Component } from 'react'
import styles from "./SecNav.module.css";
import Search from './Search/Search.js'
import Notification from './Notifications/Notifications.js'
export default class SecNav extends Component {
  render() {
    return (
     <div className={styles.SecNav}>
        <Search/>
        <Notification />
        {/* <UserMenu /> */}
        {/* <BillbordSetting /> */}
     </div>
    )
  }
}
