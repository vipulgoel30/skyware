import React, { useRef, useState } from 'react'
import { RiSuitcaseFill } from 'react-icons/ri'

export default function Career() {
    const title = useRef();
    const location = useRef();
    const allTags = ['All', 'Full Time', 'Part Time']
    const [selectedTag, setSelectedTag] = useState('All')
    const [filter, setFilter] = useState(false)
    const allJobs = [
        {
            title: 'Software Engineer',
            location: 'New Delhi, India',
            desc: 'Should have general developement skills',
            stipend: '1,50,000',
            type: 'Full Time'
        },
        {
            title: 'Web Developer',
            location: 'Mumbai, India',
            desc: 'Should have web developement skills',
            stipend: '1,20,000',
            type: 'Part Time'
        },
        {
            title: 'Marketing Manager',
            location: 'Remote',
            desc: 'Should be good at marketing',
            stipend: '1,00,000',
            type: 'Part Time'
        },
        {
            title: 'Game Developer',
            location: 'Bangalore, India',
            desc: 'Should have game developement skills',
            stipend: '1,80,000',
            type: 'Full Time'
        },
        {
            title: 'App Developer',
            location: 'New Delhi, India',
            desc: 'Should have android app developement skills',
            stipend: '1,30,000',
            type: 'Full Time'
        },
        {
            title: 'iOS Developer',
            location: 'Remote',
            desc: 'Should have iOS app developement skills',
            stipend: '1,50,000',
            type: 'Full Time'
        },
    ]
    const jobs = allJobs.filter(job => {
        const regex = new RegExp(title.current?.value, 'i')
        return (!title.current?.value || regex.test(job.title)) && (!location.current?.value || job.location === location.current?.value) && (selectedTag === 'All' || job.type === selectedTag)
    })

    function reset() {
        title.current.value = ''
        location.current.value = ''
        setFilter(false)
    }

    return (
        <div className='flex flex-col items-center gap-y-16 mb-16'>
            <div className='relative max-w-fit w-[95%]'>
                <img src='/images/careers.jpeg' alt='' className='w-full aspect-[1.25] sm:aspect-video max-h-[87.5vh]' />
                <div className='absolute inset-0 bg-white bg-opacity-40 z-10'>
                    <div className='absolute left-10 right-10 top-1/2 -translate-y-1/2 space-y-8'>
                        <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Get Jobs</h2>
                        <div className='flex flex-wrap gap-x-4 gap-y-2'>
                            <input ref={title} placeholder='Job title' className='bg-white bg-opacity-30 sm:text-lg md:text-xl border border-black rounded-lg px-2 py-1 placeholder:text-black active:outline-none focus:outline-none' />
                            <select ref={location} placeholder='Location' className='bg-white bg-opacity-30 sm:text-lg md:text-xl border border-black rounded-lg px-2 py-1 active:outline-none focus:outline-none'>
                                <option value=''>Location</option>
                                <option value='Bangalore, India' className='bg-red'>Bangalore, India</option>
                                <option value='Mumbai, India'>Mumbai, India</option>
                                <option value='New Delhi, India'>New Delhi, India</option>
                            </select>
                            <div className='space-x-4'>
                                <button className='sm:text-lg md:text-xl rounded-3xl cursor-pointer transition-all duration-500 px-5 py-1.5 font-mediu text-black bg-white bg-opacity-30 border border-black hover:scale-105 active:outline-none focus:outline-none' onClick={() => setFilter(title.current.value || location.current.value)}>Search</button>
                                {filter && <button className='sm:text-lg md:text-xl rounded-3xl cursor-pointer transition-all duration-500 px-5 py-1.5 font-mediu text-black bg-white bg-opacity-30 border border-black hover:scale-105 active:outline-none focus:outline-none' onClick={reset}>Reset</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-8 px-8'>
                <div className='flex flex-wrap gap-x-12 gap-y-6 justify-between items-center'>
                    <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{filter ? 'Filtered' : selectedTag} Jobs</h2>
                    <ul className='gap-x-3 gap-y-2 flex flex-wrap self-end'>
                        {allTags.map(tag => {
                            const selected = tag === selectedTag
                            return <li key={tag} className={`relative sm:text-lg md:text-xl rounded-3xl cursor-pointer transition-all duration-300 px-5 py-1.5 font-medium text-white border-2 border-green-400 bg-green-400 ${selected ? 'pl-14' : 'hover:text-green-400 hover:bg-white'}`} onClick={() => setSelectedTag(tag)}>
                                {selected && <img className='absolute top-1/2 -translate-y-1/2 left-4 h-2/3 aspect-square' alt="" src='/images/selected.svg' />}
                                {tag}
                            </li>
                        })}
                    </ul>
                </div>
                <div className={`grid grid-cols-1 ${jobs.length && 'md:grid-cols-2 lg:grid-cols-3'} gap-x-4 gap-y-10`}>
                    {jobs.length ? jobs.map(({ title, desc, location, stipend, type }, i) => <div key={i} className='flex space-x-4 space-y-4 text-sm'>
                        <div className='bg-gray-300 flex items-center px-10'>
                            <RiSuitcaseFill className='scale-[2.25]' />
                        </div>
                        <div className=''>
                            <div className='text-lg sm:text-xl font-bold'>{title}</div>
                            <div className='mt-2'>{desc}</div>
                            <div className='font-bold'>₹{stipend}/month</div>
                            <span className='pr-4'>{location}</span>
                            <span>{type}</span>
                        </div>
                    </div>) : <div className='text-center font-medium text-lg py-2'>Hmm... Seems like there is no job role opened for the selected criteria, try again later!</div>}
                </div>
            </div>
        </div>
    )
}
