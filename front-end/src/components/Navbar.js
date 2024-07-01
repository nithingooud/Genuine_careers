
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";

import React, { useEffect, useState } from "react";

export function NavbarComponent() {

    const [addJob, setAddJob] = useState(false)
    useEffect(() => {
        let data = sessionStorage.getItem("addJob");
        if (data) {
            setAddJob(true)
        }
    })

    return (
        <div style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Navbar fluid rounded >
                <NavbarBrand href="/">
                    <img className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full mr-2" src="https://i.ibb.co/v4Nr5ft/Screenshot-2024-06-22-at-9-38-23-PM.png" alt="Screenshot-2024-06-22-at-9-38-23-PM" border="0"></img>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Genuine Careers</span>
                </NavbarBrand>
                <NavbarCollapse >
                    <NavbarLink href="/" >
                        HOME
                    </NavbarLink>
                    <NavbarLink href="/interviewExperience" >
                        INTERVIEW EXPERIENCES
                    </NavbarLink>
                    <NavbarLink href="/blogs" >
                        BLOGS
                    </NavbarLink>
                    <NavbarLink href="/about">
                        ABOUT US
                    </NavbarLink>
                    {addJob &&
                        <>
                            <NavbarLink href="/addJob" >Add Jobs</NavbarLink>
                            <NavbarLink href="/addCompany" >Add Company</NavbarLink>
                        </>

                    }

                </NavbarCollapse>
                <div className="flex md:order-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                            <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"></path><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"></path>
                        </svg>
                    </div>
                    <div>
                        <NavbarToggle barIcon={() => (<svg className="h-8 w-8 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        )} />
                    </div>



                </div>
            </Navbar>
        </div>
    );
}

export default NavbarComponent