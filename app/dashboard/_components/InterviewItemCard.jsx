import { Button } from '/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({ interview }) {

    const router = useRouter();

    const onStart = () => {
        router.push('/dashboard/interview/' + interview?.mockId)
    }

    const onFeedbackPress = () => {
        router.push('/dashboard/interview/' + interview.mockId + "/feedback")
    }

    return (
        <div className="relative block overflow-hidden rounded-lg border border-gray-300 p-4 sm:p-6 lg:p-8">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>
            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
                    </h3>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="size-16 rounded-lg object-cover shadow-sm"
                    />
                </div>
            </div>
            <div className="mt-4">
                <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
            </div>
            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <h2 className='text-xs text-gray-400'>Created At:{interview.createdAt}</h2>
                </div>
            </dl>
            
            <div className='flex justify-between mt-2 gap-5'>
                <Button size="sm" variant="outline" className="w-full"
                    onClick={onFeedbackPress}
                >Feedback</Button>
                <Button size="sm" className="w-full"
                    onClick={onStart}
                >Start</Button>

            </div>
        </div>
    )
}

export default InterviewItemCard