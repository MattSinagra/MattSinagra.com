import React from 'react'
import Link from 'next/link'

const NavButton = props => (

        <li>
            <Link href={props.path}>
                <button>{props.label}</button>
            </Link>
            
        </li>
)

export default NavButton;
