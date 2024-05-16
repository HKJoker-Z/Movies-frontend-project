import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const AddJobPage = ({ addJobSubmit }) => {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('Crime');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('43mins');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyEmail, setcompanyEmail] = useState('');
    const [companyPhone, setcompanyPhone] = useState('');

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            title,
            type,
            description,
            duration,
            companyName,
            companyDescription,
            companyEmail,
            companyPhone
        }

        addJobSubmit(newJob);

        toast.success("Episode Added Successfully")

        return navigate('/jobs');

    };


    return (
        <>
            <section className="bg-indigo-50">
                <div className="container m-auto max-w-2xl py-24">
                    <div
                        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                    >
                        <form onSubmit={submitForm}>
                            <h2 className="text-3xl text-center font-semibold mb-6">Add Episode</h2>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                >Episode Type</label
                                >
                                <select
                                    id="type"
                                    name="type"
                                    className="border rounded w-full py-2 px-3"
                                    required
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="Crime">Crime</option>
                                    <option value="Crime">Crime</option>
                                    <option value="Crime">Crime</option>
                                    <option value="Crime">Crime</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2"
                                >Episode Listing Name</label
                                >
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    placeholder="eg. Beautiful Apartment In Miami"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-gray-700 font-bold mb-2"
                                >Description</label
                                >
                                <textarea
                                    id="description"
                                    name="description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="Add any job duties, expectations, requirements, etc"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                >Duration</label
                                >
                                <select
                                    id="salary"
                                    name="salary"
                                    className="border rounded w-full py-2 px-3"
                                    required
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                >
                                    <option value="Under 30mins">Under 30mins</option>
                                    <option value="30-40mins">30-40mins</option>
                                    <option value="40-50mins">40-50mins</option>
                                    <option value="50-60mins">50-60mins</option>
                                    <option value="over 1h">over 1h</option>
                                </select>
                            </div>

                            <div className='mb-4'>


                            </div>

                            <h3 className="text-2xl mb-5">Company Info</h3>

                            <div className="mb-4">
                                <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                                >Company Name</label
                                >
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Company Name"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="company_description"
                                    className="block text-gray-700 font-bold mb-2"
                                >Company Description</label
                                >
                                <textarea
                                    id="company_description"
                                    name="company_description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="What does your company do?"
                                    value={companyDescription}
                                    onChange={(e) => setCompanyDescription(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="contact_email"
                                    className="block text-gray-700 font-bold mb-2"
                                >Contact Email</label
                                >
                                <input
                                    type="email"
                                    id="contact_email"
                                    name="contact_email"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Email address for applicants"
                                    required
                                    value={companyEmail}
                                    onChange={(e) => setcompanyEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="contact_phone"
                                    className="block text-gray-700 font-bold mb-2"
                                >Contact Phone</label
                                >
                                <input
                                    type="tel"
                                    id="contact_phone"
                                    name="contact_phone"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Optional phone for applicants"
                                    value={companyPhone}
                                    onChange={(e) => setcompanyPhone(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Add Episode
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddJobPage