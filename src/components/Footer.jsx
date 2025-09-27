import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#f5f5f5] pt-14 px-43 footer'>
        <div className='grid-cols-3 grid'>
            <div>
                <h3 className='font-medium mb-4'>IELTS Institute</h3>
                <p className='paragraphs'>Expert-led IELTS coaching with modern tools and proven strategies.</p>
            </div>
            <div>
                <h3 className='font-medium mb-4'>Links</h3>
                <p className='paragraphs mb-2'>Home</p>
                <p className='paragraphs mb-2'>Programs</p>
                <p className='paragraphs mb-2'>Results</p>
            </div>
            <div>
                <h3 className='font-medium mb-4'>Contacts</h3>
                <p className='paragraphs'>Email: englishlearn@ielts-institute.com</p>
                <p className='paragraphs'>Phone: +91 91284 19283</p>
                <p className='paragraphs'>Address: 132 Kelambakkam, Chennai</p>
            </div>
        </div>
    </div>
  )
}
