import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'



const App = () => {

  //Add new episode
  const addJob = async (newJob) => {
    const res = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete episode
  const deleteJob = async (id) => {
    const res = await fetch(`/api/delete/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  //Update episode
  const updateJob = async (job) => {
    const res = await fetch('/api/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/edit-jobs/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
};

export default App