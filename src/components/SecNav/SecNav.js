import React, { Component } from 'react'
import styles from "./SecNav.module.css";

import Search from '../Search/Search.js'
export default class SecNav extends Component {
  render() {
    return (
     <div>
        <Search/>
        {/* <Notification /> */}
        {/* <UserMenu /> */}
        {/* <BillbordSetting /> */}
     </div>
    )
  }
}
