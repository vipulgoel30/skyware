import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const icons = [<FaLinkedin />, <FaTwitter />];

const team = {
    Leadership: [
        { name: 'Alexander Hipp', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=10', title: 'CEO of Skyware', links: ['https://example.com/', 'https://example.com/'] },
        { name: 'Balor Everhart', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=10', title: 'Co-Founder of Skyware', links: ['https://example.com/', null] },
        { name: 'Isa Travert', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=10', title: 'Supervisor', links: ['https://example.com/', 'https://example.com/'] },
    ],
    Development: [
        { name: 'Ayanda Oriol', image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=10', title: 'CTO of Skyware', links: ['https://example.com/', null] },
        { name: 'Shiva Das', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcnNvbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=10', title: 'Development Manager', links: ['https://example.com/', 'https://example.com/'] }
    ],
    Marketing: [
        { name: 'Mariana Hobbes', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=10', title: 'Marketing Manager', links: ['https://example.com/', 'https://example.com/'] }
    ],
    Services: [
        { name: 'Nela Zlatkov', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=10', title: 'Service Manager', links: ['https://example.com/', 'https://example.com/'] },
        { name: 'Gotama Key', title: 'Consultant', links: ['https://example.com/', null] },
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
                        {team[field].map(({ name, image, title, links }, i) => <div key={i} className="mx-auto grid place-content-center text-center">
                            <div className="flex items-center justify-center relative bg-white w-44 aspect-square rounded-full overflow-hidden">
                                <img loading="eager" src={image || '/images/dummy.webp'} alt="" />
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
