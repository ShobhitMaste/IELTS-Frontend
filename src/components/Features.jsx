import React from 'react'

export default function Features() {
  return (
    <div className='mx-43 mt-14'>
        <h1 className='Heading mb-2'>Programs that Deliver Results</h1>
        <p className='paragraphs mb-8'>Practical training tailored to the IELTS format, backed by data and expert guidance.</p>
        <div className='grid grid-cols-4 gap-5'>
            <div className='featureCard shadow-md/6'>
                <h1>Speaking Practice</h1><br/>
                <p>Live speaking sessions with expert mentors and actionable feedback.</p>
            </div>
            <div className='featureCard shadow-md/6'>
                <h1>Mock Tests</h1>
                <br/>
                <p>Exam-style mocks with detailed reports across Listening, Reading, Writing, Speaking.</p>
            </div>
            <div className='featureCard shadow-md/6'>
                <h1>AI Band Score</h1><br/>
                <p>Instant AI-powered scoring and insights to focus your preparation.</p>
            </div>
            <div className='featureCard shadow-md/6'>
                <h1>1:1 Mentoring</h1><br/>
                <p>Personalized study plan and weekly progress check-ins.</p>
            </div>
        </div>
    </div>
  )
}
