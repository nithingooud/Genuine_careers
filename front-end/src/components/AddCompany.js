import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { API_BASE_URL } from '../environment';

const CompanyForm = () => {
    const [formData, setFormData] = useState({
        logo: '',
        companyName: '',
        size: { minimum: 0, maximum: 0 },
        founded: '',
        companyType: '',
        companyDescription: '',
        website: '',
        revenue: '',
        sector: '',
    });

    const companyTypes = [
        'Product Based',
        'Service Based',
        'Startup',
        'Non-Profit',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'minimum' || name === 'maximum') {
            setFormData((prevState) => ({
                ...prevState,
                size: {
                    ...prevState.size,
                    [name]: value,
                },
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/addCompany`, formData);
            if (response.statusText == 'OK') {
                setFormData(
                    {
                        logo: '',
                        companyName: '',
                        size: { minimum: 0, maximum: 0 },
                        founded: '',
                        companyType: '',
                        companyDescription: '',
                        website: '',
                        revenue: '',
                        sector: '',
                    }
                )
            }
            console.log('Company created successfully:', response);

        } catch (error) {
            console.error('Error creating company:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h6" gutterBottom>Create a Company</Typography>
            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Logo URL"
                        name="logo"
                        value={formData.logo}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Company Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Box>
                <Box mb={2} display="flex" justifyContent="space-between">
                    <TextField
                        label="Size (Minimum)"
                        name="minimum"
                        type="number"
                        value={formData.size.minimum}
                        onChange={handleChange}
                        variant="outlined"
                        style={{ flex: 1, marginRight: '10px' }}
                    />
                    <TextField
                        label="Size (Maximum)"
                        name="maximum"
                        type="number"
                        value={formData.size.maximum}
                        onChange={handleChange}
                        variant="outlined"
                        style={{ flex: 1 }}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Founded Year"
                        name="founded"
                        type="number"
                        value={formData.founded}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Box>
                <Box mb={2}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Company Type</InputLabel>
                        <Select
                            name="companyType"
                            value={formData.companyType}
                            onChange={handleChange}
                            label="Company Type"
                        >
                            {companyTypes.map((type) => (
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
                        label="Company Description"
                        name="companyDescription"
                        multiline
                        rows={4}
                        value={formData.companyDescription}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Revenue"
                        name="revenue"
                        type="number"
                        value={formData.revenue}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Box>
                <Button type="submit" variant='outlined'>Submit</Button>
            </form>
        </Container>
    );
};

export default CompanyForm;
