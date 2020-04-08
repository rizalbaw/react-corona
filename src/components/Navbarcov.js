import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faVirus)

function Navbarcov() {
    return (
        <div>
            <nav className="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <FontAwesomeIcon icon={['fas', 'virus']} />
                    </div>
                    <div className="sidebar-brand-text mx-2">COVID-19</div>
                </a>
            </nav>
        </div>
    )
}

export default Navbarcov;