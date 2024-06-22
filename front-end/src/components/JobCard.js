import { Card, Badge } from "flowbite-react";
import React from "react";
import { Button } from "flowbite-react";


export function JobCardComponent({ logo, CompanyName, Position, Experience, ExpectedSalary, Location }) {
    return (
        <Card className="max-w-2xl mx-auto mb-2 shadow-md bg-white rounded-lg overflow-hidden">
            <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                <img className="w-20 h-20 md:w-20 md:h-20 object-cover rounded-full"
                    src={logo} />
                <div>
                    <Button outline gradientDuoTone="tealToLime">View Job</Button>
                </div>
            </div>
            <div className="flex items-center">
                <div className="ml-4 flex-1">
                    <div className="flex items-center mb-1" style={{ justifyContent: 'space-between' }}>
                        <p className="text-xl font-medium text-gray-700 dark:text-gray-400">{Position}</p>
                        <div className="flex items-center gap-1">
                            <p className="text-sm text-gray-700 dark:text-gray-400">{Experience}</p>

                            <svg class="h-4 w-4 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>

                    </div>
                    <div className="flex items-center mb-2" style={{ justifyContent: 'space-between' }}>
                        <h5 className="text-sm font-medium text-gray-900 dark:text-gray-100">{CompanyName}</h5>
                        <div className="flex items-center gap-1">
                            <p className="text-sm text-gray-700 dark:text-gray-400">{Location}</p>
                            <svg class="h-4 w-4 text-stone-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                        </div>
                    </div>
                    <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
                        <div className="flex flex-wrap gap-2">
                            <Badge color="info">Default</Badge>
                            <Badge color="success">Success</Badge>
                            <Badge color="warning">Warning</Badge>
                        </div>
                        <div className="flex items-center gap-1">
                            <p className="text-sm text-gray-700 dark:text-gray-400">Posted <span className="font-medium">5</span> days ago</p>
                            <svg class="h-4 w-4 text-stone-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <polyline points="12 7 12 12 15 15" /></svg>                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default JobCardComponent