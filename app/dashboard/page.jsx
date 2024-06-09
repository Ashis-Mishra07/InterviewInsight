import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='flex flex-col min-h-screen min-w-screen bg-[radial-gradient(125%_125%_at_50%_10%,#ffffff_35%,#cccccd_100%)]'>
      <div className='flex flex-col p-10 w-full'>
        <h2 className='font-bold text-4xl text-primary'>Dashboard</h2>
        <h2 className='text-gray-500'>Create and Start your AI Mockup Interview</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-5'>
          <AddNewInterview />
        </div>

        {/* Previous Interview List  */}
        <InterviewList />
      </div>
    </div>
  )
}

export default Dashboard
