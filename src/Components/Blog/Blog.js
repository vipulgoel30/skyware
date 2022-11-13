import React, { useState } from 'react'
import selectedImg from '../../selected.svg'

export default function Blog() {
    const allTags = ['All', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']
    const allBlogs = [
        {
            title: 'First blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/1/200/300',
            tags: ['Tag 1', 'Tag 2', 'Tag 3']
        },
        {
            title: 'Second blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/2/200/300',
            tags: ['Tag 1', 'Tag 4']
        },
        {
            title: 'Third blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/3/200/300',
            tags: ['Tag 2', 'Tag 3']
        },
        {
            title: 'Fourth blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/4/200/300',
            tags: ['Tag 4']
        },
        {
            title: 'Fifth blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/5/200/300',
            tags: ['Tag 3', 'Tag 4']
        },
        {
            title: 'Sixth blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/6/200/300',
            tags: ['Tag 2']
        },
    ];
    const [selectedTag, setSelectedTag] = useState('All')
    const blogs = allBlogs.filter(blog => selectedTag === 'All' || blog.tags.includes(selectedTag))

    return <>
        <ul className="flex md:justify-center px-8 my-8 flex-wrap gap-x-6 gap-y-3">
            {allTags.map(tag => {
                const selected = tag === selectedTag
                return <li key={tag} className={`relative text-xl rounded-3xl cursor-pointer transition-all duration-300 px-5 py-1.5 font-medium text-white border-2 border-green-400 bg-green-400 ${selected ? 'pl-14' : 'hover:text-green-400 hover:bg-white'}`} onClick={() => setSelectedTag(tag)}>
                    {selected && <img className='absolute top-1/2 -translate-y-1/2 left-4 h-2/3 aspect-square' alt="" src={selectedImg} />}
                    {tag}
                </li>
            })}
        </ul>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-10 gap-x-10 gap-y-20'>
            {blogs.map(({ title, desc, image, url, date, author, tags }, i) => <div key={i} className="flex flex-col px-8 py-4 rounded-xl shadow-xl w-full gap-6 border-[1.5px] hover:border-black" >
                <a href={url} target="_blank" rel="noreferrer">
                    <div className="flex gap-6 items-center">
                        <img alt={author?.name} src={author?.image || '/images/dummy.webp'} className="rounded-full w-16 h-16 border border-black" />
                        <div className="flex flex-col p-1 gap-.5">
                            <div className="text-2xl tracking-wider text-gray-800 font-extralight">
                                {author?.name}
                            </div>
                            <div className="text-sm text-gray-500 tracking-wide">
                                {Math.floor((Date.now() - date) / (60 * 60 * 1000))}{" "}
                                hours ago
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <img alt='Blog' src={image} className="w-full h-64"></img>
                    </div>
                </a>
                <ul className='gap-x-3 gap-y-2 flex flex-wrap'>
                    {tags.map(tag => <li className='font-semibold text-sm text-blue-600 bg-blue-200 inline rounded-full px-4 py-1 whitespace-nowrap'>{tag}</li>)}
                </ul>
                <div className="font-semibold text-2xl font-mono">
                    {title}
                </div>
                <div className="font-light leading-7 -mt-3">{desc}</div>
            </div>)}
        </div>
    </>
}
