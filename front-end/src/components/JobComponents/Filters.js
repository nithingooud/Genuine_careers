import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
const FiltersComponent = (props) => {
    const [formData, setFormData] = useState({
        employmentType: '',
        location: '',
        role: '',
        experience: '',
        jobspostedIn: ''
    });

    const companyTypes = [
        'Product Based',
        'Service Based',
        'Startup',
        'Non-Profit',
    ];

    const employmentTypes = ['Full Time', 'Internship']
    const locations = ['Hyderabad', 'Bengaluru', 'Chennai', 'Gurgaon', 'Pune', 'Mumbai', 'Delhi']
    // const roles = ['Software Engineer', 'SDE', 'Quality Analyst', 'Marketing Specialist', 'Web Designer', 'App Developer', 'Data Engineer', 'Web Developer']
    const jobspostedIn = ['last 24 hrs', 'last week', 'last month']
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formData);
    };

    const clearFilters = () => {
        setFormData({
            employmentType: '',
            location: '',
            role: '',
            experience: '',
            jobspostedIn: ''
        })
    }

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Employment Type</InputLabel>
                        <Select
                            name="employmentType"
                            value={formData.employmentType}
                            onChange={handleChange}
                            label="Employment Type"
                        >
                            {employmentTypes.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box mb={2}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Location</InputLabel>
                        <Select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            label="Location"
                        >
                            {locations.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Experience"
                        name="experience"
                        type="number"
                        value={formData.experience}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Box>
                <Box mb={2}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Jobs posted In</InputLabel>
                        <Select
                            name="jobspostedIn"
                            value={formData.jobspostedIn}
                            onChange={handleChange}
                            label="Jobs Posted In"
                        >
                            {jobspostedIn.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <div className='d-flex justify-items-between items-center'>
                    <Button type="submit">Submit</Button>
                    <Button onClick={() => clearFilters()} variant='outlined'>Clear All</Button>

                </div>

            </form>
        </Container>
    )

}

export default FiltersComponent