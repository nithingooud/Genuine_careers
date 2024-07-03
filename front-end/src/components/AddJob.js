import React, { useEffect, useState } from 'react';
import { Formik, FieldArray, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'flowbite-react';
import axios from 'axios'
import { API_BASE_URL } from '../environment';
import Select from 'react-select';


const validationSchema = Yup.object().shape({

    // qualifications: Yup.array().of(Yup.string().required('Qualification is required')),
    // responsibilities: Yup.array().of(Yup.string().required('Responsibility is required')),
    // skills: Yup.array().of(Yup.string().required('Skill is required')),
    // position: Yup.string().required('Position is required'),
    // experienceMin: Yup.number().required('Minimum Experience is required').positive('Minimum Experience must be positive'),
    // experienceMax: Yup.number()
    //     .required('Maximum Experience is required')
    //     .positive('Maximum Experience must be positive')
    //     .moreThan(Yup.ref('experienceMin'), 'Maximum Experience must be greater than Minimum Experience'),
    // location: Yup.string().required('Location is required'),
});

const initialValues = {
    company: '',
    qualifications: [''],
    responsibilities: [''],
    skills: [''],
    role: '',
    experienceMin: '',
    experienceMax: '',
    location: '',
    employmentType: '',
    applyLink: '',
};



const locations = {
    HYDERABAD: 'Hyderabad',
    BENGALURU: 'Bengaluru',
    GURGAON: 'Gurgaon',
    MUMBAI: 'Mumbai',
    CHENNAI: 'Chennai',
    PUNE: 'Pune',
    DELHI: 'Delhi'
}

const employmentTypes = {
    FULL_TIME: 'Full Time',
    INTERNSHIP: 'Internship'
}

const roles = {
    SOFT: 'Software Engineer',
    SDE: 'SDE',
    QA: 'Quality Analyst',
    MARKETING_SPECIALIST: 'Marketing Specialist',
    WEB_DESIGNER: 'Web Designer',
    APP_DEVELOPER: 'App Developer',
    DATA_ENGINEER: 'Data Engineer',
    WEB_DEVELOPER: 'Web Developer'
}


const AddJobDetails = () => {
    const [companies, setCompanies] = useState([]);

    const locationOptions = Object.entries(locations).map(([key, value]) => ({
        value: value,
        label: key
    }));

    const employmentTypeOptions = Object.entries(employmentTypes).map(([key, value]) => ({
        value: value,
        label: key
    }));

    const roleOptions = Object.entries(roles).map(([key, value]) => ({
        value: value,
        label: key
    }));



    useEffect(() => {
        getCompanies();
    }, [])

    const getCompanies = async () => {
        const response = await axios.get(`${API_BASE_URL}/getCompanies`);
        if (response.statusText == 'OK') {
            let companyOptions = response.data.map(item => {
                return {
                    value: item._id,
                    label: item.companyName
                };
            });
            setCompanies(companyOptions)
        }
    }

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/addJob`, values);
            if (response.status == 200) {
                values = {
                    company: '',
                    qualifications: [],
                    responsibilities: [],
                    skills: [],
                    role: '',
                    experienceMin: '',
                    experienceMax: '',
                    location: '',
                }
            }
        }
        catch (error) {
            console.error('Error adding job:', error);
        }
        finally {
        }
    };

    return (
        <div className="container mx-auto mt-8 mb-4">
            <h1 className="text-xl font-semibold mb-4 mt-4">Create a New Job</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="company" className="block font-medium">Company Name</label>
                            <Select
                                options={companies}
                                value={companies.find(option => option.value === values.company)}
                                onChange={option => setFieldValue('company', option.value)}
                                onBlur={() => { }}
                                placeholder="Select Company"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500  focus:ring-opacity-50"
                                isSearchable={true}
                                name="company"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="skills" className="block font-medium">Skills</label>
                            <FieldArray name="skills">
                                {({ push, remove }) => (
                                    <div>
                                        {values.skills.map((skill, index) => (
                                            <div key={index} className="flex items-center mb-2">
                                                <Field
                                                    name={`skills[${index}]`}
                                                    type="text"
                                                    className="mr-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                />
                                                {index > 0 && (
                                                    <button type="button" onClick={() => remove(index)} className="text-red-600 focus:outline-none">Remove</button>
                                                )}
                                            </div>
                                        ))}
                                        <button type="button" onClick={() => push('')} className="text-green-600 focus:outline-none">Add Skill</button>
                                    </div>
                                )}
                            </FieldArray>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="qualifications" className="block font-medium">Qualifications</label>
                            <FieldArray name="qualifications">
                                {({ push, remove }) => (
                                    <div>
                                        {values.qualifications.map((qualification, index) => (
                                            <div key={index} className="flex items-center mb-2">
                                                <Field
                                                    name={`qualifications[${index}]`}
                                                    type="text"
                                                    className="mr-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                />
                                                {index > 0 && (
                                                    <button type="button" onClick={() => remove(index)} className="text-red-600 focus:outline-none">Remove</button>
                                                )}
                                            </div>
                                        ))}
                                        <button type="button" onClick={() => push('')} className="text-green-600 focus:outline-none">Add Qualification</button>
                                    </div>
                                )}
                            </FieldArray>
                            <ErrorMessage name="qualifications" component="p" className="text-red-600" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="responsibilities" className="block font-medium">Responsibilities</label>
                            <FieldArray name="responsibilities">
                                {({ push, remove }) => (
                                    <div>
                                        {values.responsibilities.map((responsibility, index) => (
                                            <div key={index} className="flex items-center mb-2">
                                                <Field
                                                    name={`responsibilities[${index}]`}
                                                    type="text"
                                                    className="mr-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                />
                                                {index > 0 && (
                                                    <button type="button" onClick={() => remove(index)} className="text-red-600 focus:outline-none">Remove</button>
                                                )}
                                            </div>
                                        ))}
                                        <button type="button" onClick={() => push('')} className="text-green-600 focus:outline-none">Add Responsibility</button>
                                    </div>
                                )}
                            </FieldArray>
                            <ErrorMessage name="responsibilities" component="p" className="text-red-600" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="role" className="block font-medium">Role</label>
                            <Select
                                options={roleOptions}
                                value={roleOptions.find(option => option.value === values.role)}
                                onChange={option => setFieldValue('role', option.value)}
                                onBlur={() => { }}
                                placeholder="Select Role"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-opacity-50"
                                isSearchable={true}
                                name="role"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="employmentType" className="block font-medium">employment Type</label>
                            <Select
                                options={employmentTypeOptions}
                                value={employmentTypeOptions.find(option => option.value === values.employmentType)}
                                onChange={option => setFieldValue('employmentType', option.value)}
                                onBlur={() => { }}
                                placeholder="Select Employment Type"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-opacity-50"
                                isSearchable={true}
                                name="employmentType"
                            />
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <div className="w-1/2 pr-2">
                                    <label htmlFor="experienceMin" className="block font-medium">Minimum Experience</label>
                                    <Field
                                        name="experienceMin"
                                        type="number"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    <ErrorMessage name="experienceMin" component="p" className="text-red-600" />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <label htmlFor="experienceMax" className="block font-medium">Maximum Experience</label>
                                    <Field
                                        name="experienceMax"
                                        type="number"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    <ErrorMessage name="experienceMax" component="p" className="text-red-600" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="location" className="block font-medium">Location Name</label>
                            <Select
                                options={locationOptions}
                                value={locationOptions.find(option => option.value === values.location)}
                                onChange={option => setFieldValue('location', option.value)}
                                onBlur={() => { }}
                                placeholder="Select Location"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-opacity-50"
                                isSearchable={true}
                                name="location"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="applyLink" className="block font-medium">Apply Link</label>
                            <Field
                                name="applyLink"
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="applyLink" component="p" className="text-red-600" />

                        </div>

                        <Button type='submit' >Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddJobDetails;
