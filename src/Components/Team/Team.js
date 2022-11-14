import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const icons = [<FaLinkedin />, <FaTwitter />];

const team = {
    Leadership: [
        { name: 'John Doe', title: 'CEO of Skyware', links: ['https://example.com/', 'https://example.com/'] },
        { name: 'John Doe', title: 'Co-Founder of Skyware', links: ['https://example.com/', null] },
        { name: 'John Doe', title: 'Supervisor', links: ['https://example.com/', 'https://example.com/'] },
    ],
    Development: [
        { name: 'John Doe', title: 'CTO of Skyware', links: ['https://example.com/', null] },
        { name: 'John Doe', title: 'Development Manager', links: ['https://example.com/', 'https://example.com/'] }
    ],
    Marketing: [
        { name: 'John Doe', title: 'Marketing Manager', links: ['https://example.com/', 'https://example.com/'] }
    ],
    Services: [
        { name: 'John Doe', title: 'Service Manager', links: ['https://example.com/', 'https://example.com/'] },
        { name: 'John Doe', title: 'Consultant', links: ['https://example.com/', null] },
    ]
}

export default function Team() {
    console.log(team)
    return (
        <div className="p-4 border-t-2 border-white pb-16 text-[#070b1e] bg-white">
            <div className="text-center pt-10 pb-16 text-4xl italic">
                Meet Our <h1 className="inline-block font-bold text-5xl text-blue-500">TEAM</h1>
            </div>
            <div className="flex flex-col gap-y-24">
                {Object.keys(team).map((field, i) => <div key={i} className="flex flex-col gap-6">
                    <h2 className="w-max mx-auto uppercase text-2xl border-b px-1 font-bold">{field}</h2>
                    <div className="flex flex-wrap gap-8 w-11/12 mx-auto">
                        {team[field].map(({ name, title, links }, i) => <div key={i} className="mx-auto grid place-content-center text-center">
                            <div className="flex items-center justify-center relative bg-white w-44 aspect-square rounded-full overflow-hidden">
                                <img src='/images/dummy.webp' alt="" />
                                {links && <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 flex items-center justify-evenly gap-2 p-2 transition-all duration-300">
                                    {links.map((link, i) => link && <a key={i} href={link} target="_blank" rel="noreferrer">
                                        <span className={`grid place-content-center text-lg text-[#343434]/70 p-3 bg-white rounded-[50%] ${i ? 'hover:bg-blue-400' : 'hover:bg-blue-600'} hover:text-white transition-all duration-300`}>
                                            {icons[i]}
                                        </span>
                                    </a>)}
                                </div>}
                            </div>
                            <div className='uppercase mt-3 font-medium w-min mx-auto'>{name}</div>
                            <div className='text-blue-600 font-semibold text-sm'>{title}</div>
                        </div>)}
                    </div>
                </div>)}
            </div>
        </div>
    )
}
