import React, { useEffect } from "react";
import JobCardComponent from "./JobCard";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import '../styles/Home.css'
import axios from 'axios'
import { API_BASE_URL } from '../environment';




export function HomeComponent() {

    const [jobsData, setJobsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getJobsData();
    }, [currentPage])

    useEffect(() => {
        getCountOfJobs();
    }, []);

    const getCountOfJobs = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/countOfJobs`);
            if (response.statusText == 'OK') {
                const totalItems = response.data;
                const itemsPerPage = 5;
                const pages = Math.ceil(totalItems / itemsPerPage);
                setTotalPages(pages);
            }

        } catch (error) {
            console.error('Error fetching jobs:', error);

        }
    }

    const getJobsData = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/jobsPosted`, { page: currentPage });
            if (response.status === 200) {
                setJobsData(response.data);
                scrollToTop();
            } else {
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    }


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    const onPageChange = (page) => {
        setCurrentPage(page)
    };

    return (
        <div className="p-4" style={{ backgroundColor: 'rgb(241 245 249)' }}>
            <div className="d-flex flex-row align-items-center justify-content-center">
                {jobsData.map(item => (
                    <JobCardComponent key={item._id} CompanyName={item?.company?.companyName || ''} Location={item?.location || ''} logo={item?.company?.logo || ''}
                        Position={item?.position || ''} Experience={item?.experience || ''} jobDetails={item} />
                ))}
            </div>
            <div className="pagination-container">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
            </div>
        </div>
    );

}