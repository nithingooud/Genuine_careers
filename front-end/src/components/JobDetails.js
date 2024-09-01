import React, { useEffect, useState } from "react"
import { Button, Card } from 'flowbite-react'
import { Badge } from "flowbite-react";
import '../styles/jobDetails.css'
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios'
import { API_BASE_URL } from '../environment';


export function JobDetailsComponent() {
    const location = useLocation();
    const [jobDetails, setJobDetails] = useState({});
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get('page');
    const jobId = searchParams.get('id');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (currentPage) {
            localStorage.setItem('lastJobListingPage', currentPage);
        }
    }, [currentPage]);

    useEffect(() => {
        setLoading(true);
        try {
            getJobDetails();
        } catch (error) {
            console.error("Error fetching job details:", error);
        } finally {
            setLoading(false)
        }
    }, [location.state, jobId]);

    const getJobDetails = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/job`, { _id: jobId });
            if (response.status === 200) {
                setJobDetails(response.data);

            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            {loading ? <div>Loading...</div> : <div className="py-4" style={{ backgroundColor: 'rgb(241 245 249)' }}>
                <Card className="max-w-4xl mx-auto">
                    <div className="job-detail">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img className="w-5 h-5 md:w-10 md:h-10 object-cover rounded-full" alt='logo'
                                    src={jobDetails?.company?.logo || ''} />
                                <div style={{ fontFamily: 'math', marginTop: '0.2rem', fontWeight: 'bolder' }}>{jobDetails?.company?.companyName || ''}</div>

                            </div>
                            <div className="flex items-center gap-2">
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
                                    <div className="company-info-detail">{jobDetails?.company?.size?.minimum || 0} to {jobDetails.company?.size?.maximum || 0} Employees</div>
                                </div>
                                <div className="company-info-item">
                                    <div className="company-info-heading">Founded</div>
                                    <div className="company-info-detail">{jobDetails?.company?.founded || ''}</div>
                                </div>
                                <div className="company-info-item">
                                    <div className="company-info-heading">Type</div>
                                    <div className="company-info-detail">{jobDetails?.company?.companyType || ''}</div>
                                </div>
                            </div>
                            <div className="company-info-row">
                                <div className="company-info-item">
                                    <div className="company-info-heading">Website</div>
                                    <a href={jobDetails?.company?.website || ''} className="company-info-detail active-link" target="_blank"
                                        rel="noopener noreferrer"
                                    >link</a>
                                </div>
                                <div className="company-info-item">
                                    <div className="company-info-heading">Sector</div>
                                    <div className="company-info-detail">{jobDetails?.company?.sector || ''}</div>
                                </div>
                                <div className="company-info-item">
                                    <div className="company-info-heading">Revenue</div>
                                    <div className="company-info-detail">{jobDetails?.company?.revenue || 0}</div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div>
                        <h1 className="heading">Qualifications</h1>
                        <hr />
                        <div className="mt-2">
                            {(jobDetails?.qualifications || []).map((item, index) => (
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
                            {(jobDetails?.responsibilities || []).map((item, index) => (
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
            </div>}
        </>

    )

}

export default JobDetailsComponent