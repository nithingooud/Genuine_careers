import React from "react"
import { Button, Card } from 'flowbite-react'
import { Tooltip, Badge } from "flowbite-react";
import '../styles/jobDetails.css'

export function JobDetailsComponent() {

    let qualifications = ['Must have previous internship experience of 6 months Must have previous internship experience of 6 months Must have previous internship experience of 6 months', 'Strong proficiency in ReactJS, Redux, redux-saga, Ant Design, and ES6', 'Knowledge of common front-end development tools such as Babel, Webpack, NPM, etc.', 'Good understanding of RESTful APIs.', 'Ability to work in a fast-paced and deadline-oriented environment.']
    let responsibilties = ['Must have previous internship experience of 6 months', 'Strong proficiency in ReactJS, Redux, redux-saga, Ant Design, and ES6', 'Knowledge of common front-end development tools such as Babel, Webpack, NPM, etc.', 'Good understanding of RESTful APIs.', 'Ability to work in a fast-paced and deadline-oriented environment.']
    return (
        <div className="py-4" style={{ backgroundColor: 'rgb(241 245 249)' }}>
            <Card className="max-w-4xl mx-auto">
                <div className="job-detail">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full" alt='logo'
                                src='https://images.unsplash.com/photo-1601158935942-52255782d322?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3N8ZW58MHx8MHx8fDA%3D' />
                            <div style={{ fontFamily: 'math', marginTop: '0.2rem', fontWeight: 'bolder' }} >Inncircles Technologies</div>

                        </div>
                        <div className="flex items-center gap-2">
                            <Tooltip placement="left" content="share" arrow='false'>
                                <a href='/' style={{ cursor: 'pointer' }}>
                                    <svg className="h-6 w-6 text-gray-700 border-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="18" cy="5" r="3" />  <circle cx="6" cy="12" r="3" />  <circle cx="18" cy="19" r="3" />  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                                </a>
                            </Tooltip>
                            <Button >Apply</Button>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h1 style={{ fontFamily: 'emoji', fontSize: 'xx-large' }}>Software Engineer - Intern</h1>
                            <h1 style={{ fontSize: 'medium', fontFamily: 'math' }}>Hyderabad</h1>
                        </div>
                        <div>
                            <div className="flex items-center gap-1" style={{ marginTop: '3rem' }}>
                                <svg className="h-4 w-4 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p style={{ fontSize: 'medium', fontWeight: 'bolder', fontFamily: 'math' }}>1-2 years</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="heading">Skills</h1>
                    <hr />
                    <div className="flex flex-wrap gap-2 mt-4">
                        <Badge color="info">Default</Badge>
                        <Badge color="success">Success</Badge>
                        <Badge color="warning">Warning</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="heading">Company Overview</h1>
                    <hr />
                    <div className="company-info-container">
                        <div className="company-info-row">
                            <div className="company-info-item">
                                <div className="company-info-heading">Size</div>
                                <div className="company-info-detail">51 to 200 Employees</div>
                            </div>
                            <div className="company-info-item">
                                <div className="company-info-heading">Founded</div>
                                <div className="company-info-detail">2017</div>
                            </div>
                            <div className="company-info-item">
                                <div className="company-info-heading">Type</div>
                                <div className="company-info-detail">Company - Private</div>
                            </div>
                        </div>
                        <div className="company-info-row">
                            <div className="company-info-item">
                                <div className="company-info-heading">Industry</div>
                                <div className="company-info-detail">Internet & Web Services</div>
                            </div>
                            <div className="company-info-item">
                                <div className="company-info-heading">Sector</div>
                                <div className="company-info-detail">Information Technology</div>
                            </div>
                            <div className="company-info-item">
                                <div className="company-info-heading">Revenue</div>
                                <div className="company-info-detail">Unknown</div>
                            </div>
                        </div>
                    </div>



                </div>
                <div>
                    <h1 className="heading">Qualifications</h1>
                    <hr />
                    <div className="mt-2">
                        {qualifications.map((item, index) => (
                            <div key={index} className="responsibility-item">
                                <svg className="responsibility-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                                <p className="points">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div >
                    <h1 className="heading">Responsibilties</h1>
                    <hr />
                    <div className="mt-2">
                        {responsibilties.map((item, index) => (
                            <div key={index} className="responsibility-item">
                                <svg className="responsibility-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                                <p className="points">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )

}

export default JobDetailsComponent