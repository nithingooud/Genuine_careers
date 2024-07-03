
import { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { API_BASE_URL } from "../environment";
import axios from 'axios'
import Card from "../common/Card";
import '../styles/interview.css'

import { Button, Modal } from "flowbite-react";

import { Form } from 'react-bootstrap';


const InterviewExperienceComponent = () => {

    const [formData, setFormData] = useState({
        companyName: '',
        CTC: '',
        role: '',
        youtubeId: '',
        candidateName: '',
        yoe: ''
    });

    const [companies, setCompanies] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [addInterview, setAddInterview] = useState(false);
    const [interviewExperiences, setInterviewExperiences] = useState([])
    const [videos, setVideos] = useState(['https://www.youtube.com/embed/fWciIqa9JjQ?si=BLhTELVRuUjzBdIw', 'https://www.youtube.com/embed/mLXareSFoD4?si=EcRiQwCTtVvuSoQ6', 'https://www.youtube.com/embed/pjs1ZLjZhzk?si=CG4I_8dDC2pMf45s', 'https://www.youtube.com/embed/KXvGsRXTxQk?si=b4zLlgu1UPkOcTra', 'https://www.youtube.com/embed/KXvGsRXTxQk?si=b4zLlgu1UPkOcTra', 'https://www.youtube.com/embed/Tw4ue1VNnpY?si=XfHjd08zks8GQRj1', 'https://www.youtube.com/embed/tdJ0IBojEIA?si=k3n9RRlDm6OwqDXU'])




    useEffect(() => {
        getCompanies();
        getInterviewExperiences();
        let data = sessionStorage.getItem("addInterview");
        if (data) {
            setAddInterview(true)
        }
    }, [])

    useEffect(() => {
        getInterviewExperiences();
    }, [selectedCompany])

    const handleChange = (event) => {
        setSelectedCompany(event.target.value);
    };

    const handleInterviewChanges = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (e) => {
        setFormData({ ...formData, companyName: e.target.value });
    };

    const getCompanies = async () => {
        const response = await axios.get(`${API_BASE_URL}/getCompanies`);
        if (response.statusText == 'OK') {
            let companyOptions = response.data.map(item => {
                return {
                    value: item._id,
                    label: item.companyName
                };
            });
            companyOptions.unshift({ value: '', label: 'None' })
            setCompanies(companyOptions)
        }
    }

    const submitInterviewExperience = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/addInterviewExperience`, formData);
            console.log('Interview Experience added:');
            setOpenModal(false)
            getInterviewExperiences()
        } catch (error) {
            console.error('Error adding Interview Experience:', error);
        }
    }

    const getInterviewExperiences = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/interviewExperiences`, { company: selectedCompany });
            setInterviewExperiences(response.data)
            console.log(response.data)
        } catch (err) {
            console.error('Error getting Interview Experience:', err);

        }

    }

    return (
        <div className="container mx-auto px-4">
            <div className="mt-4 w-full max-w-xs mx-auto">
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Companies</InputLabel>
                    <Select
                        name="company"
                        value={selectedCompany}
                        onChange={handleChange}
                        label="Companies"
                    >
                        {companies.map((type) => (
                            <MenuItem key={type.value} value={type.value}>
                                {type.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {addInterview && <Button onClick={() => setOpenModal(true)} className="mt-2">Add Interview Experience</Button>
                }
                <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Add Interview Experience</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={submitInterviewExperience}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="company-select-label">Company Name</InputLabel>
                                <Select
                                    labelId="company-select-label"
                                    value={formData.companyName}
                                    onChange={handleSelectChange}
                                    label="Company Name"
                                >
                                    {companies.map(company => (
                                        <MenuItem key={company.value} value={company.value}>
                                            {company.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="CTC"
                                    type="number"
                                    name="CTC"
                                    value={formData.CTC}
                                    onChange={handleInterviewChanges}
                                />
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Role"
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInterviewChanges}
                                />
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="YouTube ID"
                                    type="text"
                                    name="youtubeId"
                                    value={formData.youtubeId}
                                    onChange={handleInterviewChanges}
                                />
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Candidate Name"
                                    type="text"
                                    name="candidateName"
                                    value={formData.candidateName}
                                    onChange={handleInterviewChanges}
                                />
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Years of Experience"
                                    type="number"
                                    name="yoe"
                                    value={formData.yoe}
                                    onChange={handleInterviewChanges}
                                />
                            </FormControl>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Modal.Body>
                </Modal>
            </div>
            <div style={{ marginTop: '2rem' }}>
                <div className="grid gap-4">
                    {interviewExperiences.map((interviewExperience, index) => (
                        <Card key={index} interviewExperienceDetails={interviewExperience} />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default InterviewExperienceComponent;