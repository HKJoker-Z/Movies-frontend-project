import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import "node_modules/video-react/dist/video-react.css"; // import css
import VideoPlayer from '../components/VideoPlayer';



const JobPage = ({ deleteJob }) => {
    const { id } = useParams();
    const job = useLoaderData();
    const navigate = useNavigate();

    const onDeleteClick = (jobId) => {
        const confirm = window.confirm('You Sure?');

        if (!confirm) return;

        deleteJob(jobId);

        toast.success('Episode Deleted Successful!')

        navigate('/jobs');
    }

    return (
        <>
            <>
                {/* <!-- Go Back --> */}
                <section>
                    <div className="container m-auto py-6 px-6">
                        <Link
                            to="/jobs"
                            className="text-indigo-500 hover:text-indigo-600 flex items-center"
                        >
                            <FaArrowLeft className="fas fa-arrow-left mr-2" /> Back to Episode Listings
                        </Link>
                    </div>
                </section>

                <section className="bg-indigo-50">
                    <div className="container m-auto py-10 px-6">
                        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                            <main>
                                <div
                                    className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                                >
                                    <div className="text-gray-500 mb-4">{job.type}</div>
                                    <h1 className="text-3xl font-bold mb-4">
                                        {job.title}
                                    </h1>
                                    <div
                                        className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                    >
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                    {/* <link rel="stylesheet" href="/css/video-react.css" /> */}
                                    Here is a div that play video
                                    <VideoPlayer />


                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                    <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                        Episode Description
                                    </h3>

                                    <p className="mb-4">
                                        {job.description}
                                    </p>

                                    <h3 className="text-indigo-800 text-lg font-bold mb-2">Duration</h3>

                                    <p className="mb-4">{job.duration}</p>
                                </div>
                            </main>

                            {/* <!-- Sidebar --> */}
                            <aside>
                                {/* <!-- Company Info --> */}
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold mb-6">My Info</h3>

                                    <h2 className="text-2xl">{job.companyName}</h2>

                                    <p className="my-2">
                                        {job.companyDescription}
                                    </p>

                                    <hr className="my-4" />

                                    <h3 className="text-xl">Contact Email:</h3>

                                    <p className="my-2 bg-indigo-100 p-2 font-bold">
                                        {job.companyEmail}
                                    </p>

                                    <h3 className="text-xl">Contact Phone:</h3>

                                    <p className="my-2 bg-indigo-100 p-2 font-bold">{job.companyPhone}</p>
                                </div>

                                {/* <!-- Manage --> */}
                                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                    <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                    <Link
                                        to={`/edit-jobs/${job.id}`}
                                        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                    >Edit Episode</Link>
                                    <button onClick={() => onDeleteClick(job.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                    >
                                        Delete Episode
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/movies/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader };