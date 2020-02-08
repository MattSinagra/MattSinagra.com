import React from 'react'
import '../Styles/Styles.scss';

import NavBar from "./NavBar";
import navButtons from "../config/buttons";


export default ({ children }) => {

     const toggleStyles = (event) => {
        document.querySelector('#burger').classList.toggle('is-active')
        document.querySelector('#navbarmenu').classList.toggle('is-active')
    }

    return (
        <div className="layout-wrapper">
            <NavBar navButtons={navButtons} />

            {children}
        </div>
    )

}


