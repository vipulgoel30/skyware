import React, { useState } from "react";

export default function Blog() {
  const allTags = ["All", "Tag 1", "Tag 2", "Tag 3", "Tag 4"];
  const colorTags = allTags.slice(1).map(() => {
    const randomColor = Math.floor(Math.random() * 255 * 255 * 255).toString(
      16
    );
    return randomColor;
  });

  const allBlogs = [
    {
      title: "Trying and searching and wanting",
      author: { name: "John Doe", image: undefined },
      desc: "I am sitting on my balcony. It is spring and there is a little bit of heat in the sun. The balcony looks out over a road. The road is usually busy an endless stream of trucks and cars but right now there is no traffic. Everyone is self-isolating.",
      date: new Date(),
      url: "http://natureinmind.ie/trying-searching-wanting/",
      image:
        "http://natureinmind.ie/wp-content/uploads/2020/03/M4L-Image-birds.jpeg",
      tags: ["Tag 1", "Tag 2"],
    },
    {
      title: "Connecting to Care",
      author: { name: "John Doe", image: undefined },
      desc: "The absence of a deep emotional connection between humans and the natural world is at the root of the environmental crisis. Can you think of a place in nature that you know really well? Close your eyes for a moment and see what comes up.",
      date: new Date(),
      url: "http://natureinmind.ie/connecting-to-care/",
      image:
        "http://natureinmind.ie/wp-content/uploads/2019/05/IMG_0242-600x400.jpg",
      tags: ["Tag 1", "Tag 4"],
    },
    {
      title: "Society – The soil in which we grow",
      author: { name: "John Doe", image: undefined },
      desc: "In order for any plant to grow and flourish to its full potential, it needs the right conditions. The soil is all important. Everything grows in the soil. If the soil is good and you have the right amount of sunshine and water everything takes care of itself..",
      date: new Date(),
      url: "http://natureinmind.ie/society-soil-grow/",
      image:
        "http://natureinmind.ie/wp-content/uploads/2016/12/16-12-23-Wildflowers-1024x683.jpg",
      tags: ["Tag 2", "Tag 3"],
    },
    {
      title: "A Comfort in Nature",
      author: { name: "John Doe", image: undefined },
      desc: "=By Kayleigh Wright Hello, my name is Kayleigh and I am a trainee with The Wildlife Trust, nature photographer and an all round nature.",
      date: new Date(),
      url: "https://example.com",
      image:
        "https://static.wixstatic.com/media/7d2d50_5b0bacff268b4e3fb12daeb26b82794e~mv2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/7d2d50_5b0bacff268b4e3fb12daeb26b82794e~mv2.jpg",
      tags: ["Tag 4"],
    },
    {
      title: "Forecast",
      author: { name: "John Doe", image: undefined },
      desc: "By Joe Shute It’s amazing how the weather shapes our memories. We can all remember the perfect four seasons as they are preserved in our...",
      date: new Date(),
      url: "https://example.com",
      image:
        "https://static.wixstatic.com/media/7d2d50_90820998f415465197677c6aa685f568~mv2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/7d2d50_90820998f415465197677c6aa685f568~mv2.jpg",
      tags: ["Tag 3", "Tag 4"],
    },
    {
      title: "How Nature Impacts Me Within",
      author: { name: "John Doe", image: undefined },
      desc: "By Rhyan Codrington I see nature as a companion, a superhero even. And with this superhero comes superpowers that nurture hope,...",
      date: new Date(),
      url: "https://example.com",
      image:
        "https://static.wixstatic.com/media/7d2d50_f27e030c0645498abd5ba3adbbd01ed2~mv2.png/v1/fill/w_514,h_386,fp_0.50_0.50,q_95,enc_auto/7d2d50_f27e030c0645498abd5ba3adbbd01ed2~mv2.png",
      tags: ["Tag 2"],
    },
  ];
  const [selectedTag, setSelectedTag] = useState("All");
  const blogs = allBlogs.filter(
    (blog) => selectedTag === "All" || blog.tags.includes(selectedTag)
  );

  return (
    <>
      <ul className="flex md:justify-center px-8 my-8 flex-wrap gap-x-6 gap-y-3 ">
        {allTags.map((tag) => {
          const selected = tag === selectedTag;
          return (
            <li
              key={tag}
              className={`relative text-lg rounded-3xl cursor-pointer transition-all duration-300 px-4 py-1 font-medium text-white border-2 border-green-400 bg-green-400 ${
                selected ? "pl-14" : "hover:text-green-400 hover:bg-white"
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {selected && (
                <img
                  className="absolute top-1/2 -translate-y-1/2 left-4 h-3/5 aspect-square"
                  alt=""
                  src="/images/selected.svg"
                />
              )}
              {tag}
            </li>
          );
        })}
      </ul>
      <div className="flex w-screen justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-10 gap-x-10 gap-y-20 max-w-7xl">
          {blogs.map(({ title, desc, image, url, date, author, tags }, i) => (
            <div
              key={i}
              className="flex flex-col  rounded-xl shadow-2xl w-full gap-6 overflow-hidden"
            >
              <a href={url} target="_blank" rel="noreferrer">
                {/* <div className="flex gap-6 items-center">
                    <img
                      alt={author?.name}
                      src={author?.image || "/images/dummy.webp"}
                      className="rounded-full w-16 h-16 border border-black"
                    />
                    <div className="flex flex-col p-1 gap-.5">
                      <div className="text-2xl tracking-wider text-gray-800 font-extralight">
                        {author?.name}
                      </div>
                      <div className="text-sm text-gray-500 tracking-wide">
                        {Math.floor((Date.now() - date) / (60 * 60 * 1000))}{" "}
                        hours ago
                      </div>
                    </div>
                  </div> */}
                <div className="">
                  <img alt="Blog" src={image} className="w-full h-64"></img>
                </div>
              </a>
              <ul className="gap-x-3 gap-y-2 flex flex-wrap px-4">
                {tags.map((tag) => (
                  // console.log(
                  //   `bg-[#${colorTags[Number(tag.split(" ")[1]) - 1]}]`
                  // )
                  <li
                    key={tag}
                    className={`opacity-60 font-semibold text-sm text-white inline rounded-full px-4 py-1 whitespace-nowrap`}
                    style={{
                      backgroundColor: `#${
                        colorTags[Number(tag.split(" ")[1]) - 1] === "000000"
                          ? "cyan"
                          : colorTags[Number(tag.split(" ")[1]) - 1]
                      }`,
                    }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-1 px-4">
                <div className="font-semibold text-2xl font-mono">{title}</div>
                <div className="font-light leading-7 ">
                  {`${desc.substr(0, 149)}...`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
