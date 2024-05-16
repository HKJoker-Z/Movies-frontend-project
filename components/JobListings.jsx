import React from 'react'
import { useEffect, useState } from 'react';
import JobListing from './JobListing'

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEpisodes = async () => {

            const apiUrl = '/api/getAll';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log("fetching failue")
            } finally {
                setLoading(false);
            }

        }

        fetchEpisodes();
    }, []);

    return (
        <>
            {/* <!-- Browse Jobs --> */}
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? 'Some Episodes' : 'All Episodes'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobListings