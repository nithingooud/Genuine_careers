import React from 'react';
import { Kbd } from "flowbite-react";

const Card = ({ interviewExperienceDetails }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    height={195}
                    className="w-full"
                    src={`${interviewExperienceDetails.youtubeId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-4">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img className="w-10 h-10 object-cover rounded" alt='logo'
                            src={interviewExperienceDetails?.company?.logo} />
                        <p className="subpixel-antialiased">{interviewExperienceDetails?.company?.companyName}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Kbd>{interviewExperienceDetails?.role}</Kbd>
                        <Kbd>CTC:{interviewExperienceDetails?.CTC}LPA</Kbd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;