import React, { useEffect } from "react";
import JobCardComponent from "./JobCard";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import '../../styles/Home.css'
import axios from 'axios'
import { API_BASE_URL } from '../../environment';
import { Fab } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Drawer } from "flowbite-react";
import FiltersComponent from "./Filters";
import { wrongInputAnimation } from "../../styles/imagePath";
import Lottie from 'react-lottie'


export function JobsComponent({ onDrawerOpen, onDrawerClose }) {

    const [jobsData, setJobsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [filtersData, setFiltersData] = useState(null);
    const [totalFilteredItems, setTotalFilteredItems] = useState(0);

    useEffect(() => {
        const lastPage = localStorage.getItem('lastJobListingPage');
        if (lastPage) {
            setCurrentPage(Number(lastPage));
            localStorage.removeItem('lastJobListingPage');
        }
    }, []);


    // const filtersData = useRef()
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        getJobsData();
    }, [currentPage, filtersData])

    const updateTotalPages = (totalItems) => {
        const itemsPerPage = 5;
        const pages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(pages);
    }

    const getJobsData = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/jobsPosted`, { page: currentPage, filters: filtersData });
            if (response.status === 200) {
                setJobsData(response.data.jobs);
                setTotalFilteredItems(response.data.totalFilteredCount);
                updateTotalPages(response.data.totalFilteredCount);
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

    const handleFiltersSubmit = (formData) => {
        handleClose();
        setFiltersData(formData);
    };

    const renderWrongInput = () => {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: wrongInputAnimation,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
        return (
            <div className='flex flex-col  items-center w-full h-screen'>
                <div className="w-full max-w-lg">
                    <Lottie
                        options={defaultOptions}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="text-center mt-8">
                    <h2 className="text-3xl font-bold mb-2 font-sans text-gray-800">
                        No Jobs Found
                    </h2>
                    <p className="text-xl font-light font-serif text-gray-600">
                        Please try adjusting your search criteria.
                    </p>
                </div>
            </div>
        )

    }

    return (
        <div className="p-4">
            {loading && jobsData.length == 0 ? <div>Loading...</div> :
                <>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        {jobsData.length == 0 ? renderWrongInput() : jobsData.map(item => (
                            <JobCardComponent key={item._id} CompanyName={item?.company?.companyName || ''} Location={item?.location || ''} logo={item?.company?.logo || ''}
                                Position={item?.role || ''} Experience={item?.experience || ''} jobDetails={item} currentPage={currentPage} />
                        ))}
                    </div>
                    <div className="pagination-container">
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
                    </div>
                </>
            }
            <Fab
                color="primary"
                aria-label="add"
                sx={{
                    position: 'fixed',
                    bottom: '6rem',
                    right: '2rem',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                onClick={() => setIsOpen(true)}
            >
                <FilterAltIcon />
            </Fab>
            <div>
                <Drawer open={isOpen} onClose={() => {
                    handleClose();
                    onDrawerClose();
                }} style={{
                    marginTop: '3rem',
                    height: 'calc(100% - 3rem)'
                }}>
                    <Drawer.Header title="Filters" />
                    <Drawer.Items>
                        <FiltersComponent onSubmit={handleFiltersSubmit} />
                    </Drawer.Items>
                </Drawer>
            </div>
        </div >
    );

}