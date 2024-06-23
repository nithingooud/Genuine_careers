import React from "react";
import JobCardComponent from "./JobCard";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import '../styles/Home.css'



export function HomeComponent() {
    let data = [{
        logo: 'https://images.unsplash.com/photo-1617566347924-ad5ebdaa014e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ29zfGVufDB8fDB8fHww',
        CompanyName: 'Inncircles',
        Position: 'Full stack developer',
        Experience: '2-4 years',
        ExpectedSalary: '20,00,000',
        Location: 'Hyderabad',
        id: 1
    }, {
        logo: 'https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nb3N8ZW58MHx8MHx8fDA%3D',
        CompanyName: 'Inncircles2',
        Position: 'Full stack developer',
        Experience: '1+ years',
        ExpectedSalary: '20,00,000', id: 2,
        Location: 'Hyderabad',
    }, {
        logo: 'https://images.unsplash.com/photo-1601158935942-52255782d322?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3N8ZW58MHx8MHx8fDA%3D',
        CompanyName: 'Inncircles3',
        Position: 'Full stack developer',
        Experience: '1-2 years',
        ExpectedSalary: '20,00,000', Location: 'Hyderabad',
        id: 3
    }, {
        logo: 'https://images.unsplash.com/photo-1601158935942-52255782d322?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3N8ZW58MHx8MHx8fDA%3D',
        CompanyName: 'Inncircles3',
        Position: 'Full stack developer',
        Experience: '1-2 years',
        ExpectedSalary: '20,00,000', Location: 'Hyderabad',
        id: 4
    }, {
        logo: 'https://images.unsplash.com/photo-1601158935942-52255782d322?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3N8ZW58MHx8MHx8fDA%3D',
        CompanyName: 'Inncircles3',
        Position: 'Full stack developer',
        Experience: '1-2 years',
        ExpectedSalary: '20,00,000', Location: 'Hyderabad',
        id: 5
    },]

    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => setCurrentPage(page);

    return (
        <div className="p-4" style={{ backgroundColor: 'rgb(241 245 249)' }}>
            <div className="d-flex flex-row align-items-center justify-content-center">
                {data.map(item => (
                    <JobCardComponent key={item.id} CompanyName={item.CompanyName} Location={item.Location} logo={item.logo}
                        ExpectedSalary={item.ExpectedSalary} Position={item.Position} Experience={item.Experience} />
                ))}
            </div>
            <div className="pagination-container">
                <Pagination currentPage={currentPage} totalPages={5} onPageChange={onPageChange} showIcons />
            </div>
        </div>
    );

}