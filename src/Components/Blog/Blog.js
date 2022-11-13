import React from 'react'

export default function Blog() {
    const blogs = [
        {
            title: 'First blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/1/200/300',
        },
        {
            title: 'Second blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/2/200/300',
        },
        {
            title: 'Third blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/3/200/300',
        },
        {
            title: 'Fourth blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/4/200/300',
        },
        {
            title: 'Fifth blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/5/200/300',
        },
        {
            title: 'Sixth blog',
            author: { name: 'John Doe', image: undefined },
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quas maiores distinctio pariatur esse animi aliquid. Ipsam suscipit nam aperiam officiis, numquam quod earum deleniti ut error at iusto eveniet.',
            date: new Date(),
            url: 'https://example.com',
            image: 'https://picsum.photos/seed/6/200/300',
        },
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-x-10 gap-y-20'>
            {blogs.map(({ title, desc, image, url, date, author }, i) => <div key={i} className="flex flex-col px-8 py-4 rounded-xl shadow-xl w-full gap-6 border-[1.5px] hover:border-black" >
                <a href={url} target="_blank" rel="noreferrer">
                    <div className="flex gap-6 items-center">
                        <img alt={author?.name} src={author?.image || '/images/dummy.webp'} className="rounded-full w-16 h-16" />
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
                <div className="font-semibold text-2xl pl-3 font-mono">
                    {title}
                </div>
                <div className="font-light leading-7 -mt-3">{desc}</div>
            </div>)}
        </div>
    )
}
