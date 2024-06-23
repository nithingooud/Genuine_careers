import { Card, Badge } from "flowbite-react";
import React from "react";
import { Button } from "flowbite-react";
import { useNavigate } from 'react-router-dom';


const JobCardComponent = ({ logo, CompanyName, Position, Experience, Location, jobDetails }) => {

    const navigate = useNavigate();


    const openJob = (jobDetails) => {
        navigate('/job', { state: { jobDetails } });
    };

    const getSkillColor = (skill) => {
        const colors = ['info', 'gray', 'success', 'failure', 'warning', 'indigo', 'purple', 'pink'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    return (
        <Card className="max-w-2xl mx-auto mb-2 shadow-md bg-white rounded-lg overflow-hidden">
            <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                <img className="w-20 h-20 md:w-20 md:h-20 object-cover rounded" alt='logo'
                    src={logo} />
                <div>
                    <Button outline gradientDuoTone="cyanToBlue" onClick={() => openJob(jobDetails)}>View Job</Button>
                </div>
            </div>
            <div className="flex items-center">
                <div className="ml-4 flex-1">
                    <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                        <p className="text-gray-700 dark:text-gray-400" style={{ fontSize: 'x-large', fontFamily: 'math' }}>{Position}</p>
                        <div className="flex items-center gap-1">
                            <p className="text-sm text-gray-700 dark:text-gray-400">{Experience?.minimum}-{Experience?.maximum} years</p>

                            <svg className="h-4 w-4 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>

                    </div>
                    <div className="flex items-center mb-2" style={{ justifyContent: 'space-between' }}>
                        <h5 className="text-sm font-medium text-gray-900 dark:text-gray-100" style={{ fontFamily: 'none', fontWeight: 'normal', fontSize: 'medium' }}>{CompanyName}</h5>
                        <div className="flex items-center gap-1">
                            <p className="text-sm text-gray-700 dark:text-gray-400">{Location}</p>
                            <svg className="h-4 w-4 text-stone-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                        </div>
                    </div>
                    <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {(jobDetails.skills || []).map((skill) => (
                                <Badge color={getSkillColor(skill)}>{skill}</Badge>
                            )
                            )}
                        </div>
                        <div className="flex items-center gap-1">
                            <p className="text-sm text-gray-700 dark:text-gray-400">Posted <span className="font-medium">5</span> days ago</p>
                            <svg className="h-4 w-4 text-stone-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <polyline points="12 7 12 12 15 15" /></svg>                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default JobCardComponent