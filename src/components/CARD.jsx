import React from 'react'

const CARD = (props) => {
  return (
    <>
    <div>
    <div className=" font-sans">
      {/* Card Container */}
      <div className="w-full  max-w-[340px] bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
        
        {/* Header: Logo and Save Button */}
        <div className="flex justify-between items-start mb-6">
          {/* Brand Logo Wrapper */}
          <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center p-1">
            {/* Placeholder for Amazon Logo - Replace src with actual asset */}
            <img 
              src={props.brandLogo} 
              alt="Amazon" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Save Button */}
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-xl text-gray-400 hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium">Save</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </button>
        </div>

        {/* Company Name and Time */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-gray-900">{props.company}</span>
          <span className="text-gray-400 text-sm">{props.datePosted}</span>
        </div>

        {/* Job Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
          {props.jobTitle}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
            {props.tag1}
          </span>
          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
            {props.tag2}
          </span>
        </div>

        {/* Divider (Optional visual separation similar to card logic) */}
        
        {/* Footer: Salary, Location and Apply Button */}
        <div className="flex justify-between items-end">
          <div>
            <div className="text-xl font-bold text-gray-900">{props.pay}</div>
            <div className="text-gray-400 text-sm mt-1">{props.location}</div>
          </div>
          
          <button className="bg-black text-white px-4 py-2 rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
            Apply now
          </button>
        </div>

      </div>
    </div>

   
    </div>
    </>
  )
}

export default CARD