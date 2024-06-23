import React, { useEffect, useState } from 'react';
import { Formik, FieldArray, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'flowbite-react';
import axios from 'axios'
import { API_BASE_URL } from '../environment';
import Select from 'react-select';


const initialValues = {
    company: '',
    qualifications: [''],
    responsibilities: [''],
    skills: [''],
    position: '',
    experienceMin: '',
    experienceMax: '',
    location: '',
    companyDescription: '',
};

const AddJobDetails = () => {
    const [submitting, setSubmitting] = useState(false);
    const [companies, setCompanies] = useState([]);



    useEffect(() => {
        getCompanies();
    })

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

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setSubmitting(true);
            const response = await axios.post(`${API_BASE_URL}/post`, values);
        } catch (error) {
            console.error('Error creating job:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto mt-8 mb-4">
            <h1 className="text-xl font-semibold mb-4 mt-4">Create a New Job</h1>
            <Formik
                initialValues={initialValues}
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
                            <label htmlFor="position" className="block font-medium">Position</label>
                            <Field
                                name="position"
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="position" component="p" className="text-red-600" />
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
                            <label htmlFor="location" className="block font-medium">Location</label>
                            <Field
                                name="location"
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="companyDescription" className="block font-medium">Company Description</label>
                            <Field
                                name="companyDescription"
                                as="textarea"
                                rows="4"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <Button type='submit'>{submitting ? 'Submitting...' : 'Submit'}</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddJobDetails;
