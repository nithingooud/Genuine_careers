import React from 'react';

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
                <div className='flex items-center'>
                    <img className="w-10 h-10 md:w-20 md:h-20 object-cover rounded" alt='logo'
                        src={interviewExperienceDetails?.company?.logo} />
                    <p className="text-gray-700 dark:text-gray-400" style={{ fontSize: 'large', fontFamily: 'math' }}>{interviewExperienceDetails?.company?.companyName}</p>
                </div>
                <p className="text-gray-600"><span className="text-gray-700 dark:text-gray-400">CTC:</span>{interviewExperienceDetails.CTC} LPA</p>
            </div>
        </div>
    );
};

export default Card;