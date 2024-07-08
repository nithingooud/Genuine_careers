import React, { useEffect } from "react"
import { Button, Card } from 'flowbite-react'
import { Tooltip, Badge } from "flowbite-react";
import '../styles/jobDetails.css'
import { useLocation } from 'react-router-dom';


export function JobDetailsComponent() {
    const location = useLocation();
    const jobDetails = location.state?.jobDetails;

    useEffect(() => {
        console.log(jobDetails)
    }, [])

    const handleApply = () => {
        // Perform any necessary actions
        window.location.href = 'your-url-here';
    };

    const getSkillColor = (skill) => {
        const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
        const hash = skill.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
        return colors[hash % colors.length];
    };


    return (
        <div className="py-4" style={{ backgroundColor: 'rgb(241 245 249)' }}>
            <Card className="max-w-4xl mx-auto">
                <div className="job-detail">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full" alt='logo'
                                src={jobDetails?.company?.logo || ''} />
                            <div style={{ fontFamily: 'math', marginTop: '0.2rem', fontWeight: 'bolder' }}>{jobDetails?.company?.companyName || ''}</div>

                        </div>
                        <div className="flex items-center gap-2">
                            <Tooltip placement="left" content="share" arrow='false'>
                                <a href={jobDetails?.applyLink || ''} style={{ cursor: 'pointer' }}>
                                    <svg className="h-6 w-6 text-gray-700 border-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="18" cy="5" r="3" />  <circle cx="6" cy="12" r="3" />  <circle cx="18" cy="19" r="3" />  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                                </a>
                            </Tooltip>

                            <Button onClick={() => window.open(jobDetails?.applyLink, '_blank')}>Apply</Button>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h1 style={{ fontFamily: 'emoji', fontSize: 'xx-large' }}>{jobDetails?.role || ''}</h1>
                            <h1 style={{ fontSize: 'medium', fontFamily: 'math' }}>{jobDetails?.location || ''}</h1>
                        </div>
                        <div>
                            <div className="flex items-center gap-1" style={{ marginTop: '3rem' }}>
                                <svg className="h-4 w-4 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p style={{ fontSize: 'medium', fontWeight: 'bolder', fontFamily: 'math' }}>{jobDetails?.experience?.minimum || 0}-{jobDetails?.experience?.maximum || 0} years</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="heading">Skills</h1>
                    <hr />
                    <div className="flex flex-wrap gap-2 mt-4">
                        {(jobDetails?.skills || []).map((skill) => (
                            <Badge color="warning">{skill}</Badge>
                        )
                        )}
                    </div>
                </div>
                <div>
                    <h1 className="heading">Company Overview</h1>
                    <hr />
                    <div className="company-info-container">
                        <div className="company-info-row">
                            <div className="company-info-item">
                                <div className="company-info-heading">Size</div>
                                <div className="company-info-detail">{jobDetails.company?.size?.minimum || 0} to {jobDetails.company?.size?.maximum || 0} Employees</div>
                            </div>
                            <div className="company-info-item">
                                <div className="company-info-heading">Founded</div>
                                <div className="company-info-detail">{jobDetails.company.founded || ''}</div>
                            </div>
                            <div className="company-info-item">
                                <div className="company-info-heading">Type</div>
                                <div className="company-info-detail">{jobDetails.company?.companyType || ''}</div>
                            </div>
                        </div>
                        <div className="company-info-row">
                            <div className="company-info-item">
                                <div className="company-info-heading">Website</div>
                                <a href={jobDetails.company?.website || ''} className="company-info-detail active-link" target="_blank"
                                    rel="noopener noreferrer"
                                >link</a>
                            </div>
                            <div className="company-info-item">
                                <div className="company-info-heading">Sector</div>
                                <div className="company-info-detail">{jobDetails.company?.sector || ''}</div>
                            </div>
                            <div className="company-info-item">
                                <div className="company-info-heading">Revenue</div>
                                <div className="company-info-detail">{jobDetails.company?.revenue || 0}</div>
                            </div>
                        </div>
                    </div>



                </div>
                <div>
                    <h1 className="heading">Qualifications</h1>
                    <hr />
                    <div className="mt-2">
                        {(jobDetails.qualifications || []).map((item, index) => (
                            <div key={index} className="responsibility-item">
                                <svg className="responsibility-icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                        {(jobDetails.responsibilities || []).map((item, index) => (
                            <div key={index} className="responsibility-item">
                                <svg className="responsibility-icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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