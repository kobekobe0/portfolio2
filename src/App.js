import { FaCameraRetro, FaCode } from 'react-icons/fa'
import profile from './images/IMG_0825.png'

import tech from './images/interests/programming.png'
import ad from './images/interests/adventure.png'
import fd from './images/interests/food.png'
import inv from './images/interests/invest.png'
import stare from './images/interests/staring.png'
import watch from './images/interests/watching.png'
import wo from './images/interests/workout.png'
import { projectData } from './ProjectData'
import { galleryData } from './GalleryData'

import { useRef, useEffect, useState } from 'react'

function App() {
    const myRef = useRef()
    const [galleryVisible, setGalleryVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setGalleryVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])
    return (
        <div className="w-full">
            <div
                className={`w-full flex justify-between px-5 py-3 font-bold font-mono fixed  ${
                    galleryVisible ? 'bg-transparent text-white' : 'bg-white'
                } z-10 transition-all`}
            >
                <h1>KOBE</h1>
                <div className="flex items-center gap-5">
                    <h2>
                        <FaCameraRetro />
                    </h2>
                    <h2>
                        <FaCode />
                    </h2>
                    <h2>About</h2>
                </div>
            </div>

            <div className="flex">
                <div className=" w-full px-32 flex items-center h-screen -lg:px-12 -md:px-2">
                    <h2 className="font-bold text-9xl font-ubuntu -md:text-8xl -sm:text-7xl">
                        HI, I'M <span className="text-indigo-700">KOBE</span>.{' '}
                        <br /> <span className="-xs:hidden">A DEVELOPER,</span>
                        <span className="-2xl:hidden -4xl:hidden -5xl:hidden -xl:hidden -lg:hidden -md:hidden -sm:hidden -xs:block ">
                            A DEV,
                        </span>{' '}
                        YET TO BE KNOWN.
                    </h2>
                </div>
            </div>

            <div className="flex flex-col bg-indigo-500 text-white w-full px-24 -md:px-12">
                <h2 className="py-5 font-serif font-light text-lg">
                    “Remember to look up at the stars and not down at your feet.
                    Try to make sense of what you see and wonder about what
                    makes the universe exist. Be curious. And however difficult
                    life may seem, there is always something you can do and
                    succeed at. It matters that you don't just give up.” -
                    <span className="font-bold">Stephen Hawking</span>
                </h2>
            </div>

            <div className="flex flex-col w-full items-center">
                <div className="w-3/5 -md:w-3/4 -lg:2/3">
                    <div className="flex mt-48 items-center -xl:flex -xl:flex-col">
                        <div className="flex w-full items-center justify-center pb-9 ">
                            <img
                                style={{ width: '70%', height: 'auto' }}
                                className="p-2 saturate-0 hover:saturate-100 transition-all"
                                src={profile}
                            />
                        </div>
                        <div className="p-5 rounded-md border-black">
                            <p className=" font-sans">
                                <span className="bg-indigo-500 text-white px-2 text-3xl">
                                    Kobe
                                </span>
                                , curious human being currently living in the
                                Philippines. I'm an web developer and a
                                self-taught programmer. I'm currently
                                experimenting with full stack development, I
                                mainly use MERN stack when developing web apps.
                                <br />
                                <br /> The thing I love most about coding is
                                that there’s always something new to learn so
                                it’s impossible to get bored. There’s so many
                                ways to be creative and so many different
                                problems to solve and I thrive on the challenge.
                                I currently have a part time position as a
                                backend developer but still looking for a full
                                time position.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center mt-12">
                        <h3 className="font-body mb-12">
                            SOME TOPICS THAT PIQUE INTEREST
                        </h3>
                        <div className="items-center justify-center grid grid-cols-3 gap-4 -lg:grid-cols-2 -md:grid-cols-1">
                            <div className=" items-center  flex mb-7 border-b transition-all hover:scale-105 hover:animate-pulse">
                                <img
                                    src={tech}
                                    style={{
                                        width: '100px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <h4 className="font-bold text-xl ">
                                        Technology
                                    </h4>
                                    <p className="">
                                        Aiming to contribute in someway in this
                                        field.
                                    </p>
                                </div>
                            </div>
                            <div className="items-center  flex mb-7 transition-all hover:scale-105 hover:animate-pulse">
                                <img
                                    src={inv}
                                    style={{
                                        width: '100px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <h4 className="font-bold text-xl">
                                        Personal Finance
                                    </h4>
                                    <p>Planning is meh, but it is needed.</p>
                                </div>
                            </div>
                            <div className="items-center  flex mb-7 transition-all hover:scale-105 hover:animate-pulse">
                                <img
                                    src={ad}
                                    style={{
                                        width: '100px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <h4 className="font-bold text-xl ">
                                        Adventures
                                    </h4>
                                    <p className="">
                                        Don't wanna die just stuck where I am.
                                    </p>
                                </div>
                            </div>
                            <div className="items-center  flex mb-7 transition-all hover:scale-105 hover:animate-pulse">
                                <img
                                    src={fd}
                                    style={{
                                        width: '100px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <h4 className="font-bold text-xl">Foods</h4>
                                    <p>I mean, who doesn't?</p>
                                </div>
                            </div>
                            <div className="items-center  flex mb-7 transition-all hover:scale-105 hover:animate-pulse">
                                <img
                                    src={stare}
                                    style={{
                                        width: '100px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <h4 className="font-bold text-xl ">
                                        Starry Sky
                                    </h4>
                                    <p className="">
                                        Relaxation at its finest.
                                    </p>
                                </div>
                            </div>
                            <div className="items-center  flex mb-7 transition-all hover:scale-105 hover:animate-pulse">
                                <img
                                    src={watch}
                                    style={{
                                        width: '100px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <h4 className="font-bold text-xl">
                                        Watching Shows
                                    </h4>
                                    <p>
                                        A great way to waste your time.
                                        Especially anime.
                                    </p>
                                </div>
                            </div>
                            <div className="items-center  flex mb-7 transition-all hover:scale-105 hover:animate-pulse">
                                <img
                                    src={wo}
                                    style={{
                                        width: '100px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <h4 className="font-bold text-xl ">
                                        Working Out
                                    </h4>
                                    <p className="">
                                        More like forced by my inner self. But
                                        being toned is great.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full h-auto justify-center items-center bg-gray-200">
                <div>
                    <h2 className="text-2xl font-bold font-ubuntu mt-28 mb-12">
                        PERSONAL PROJECTS
                    </h2>
                </div>
                <div className="grid-cols-1 grid gap-16 p-16 px-32 -md:px-9 mx-64 -xl:mx-0">
                    {projectData.map((project) => (
                        <div className="flex w-full rounded-2xl relative -xl:flex-col   ">
                            <div className="w-3/4 grayscale hover:grayscale-0 transition-all shadow-2xl -xl:w-full">
                                <img
                                    src={project.photos[0]}
                                    className="border border-gray-300 rounded-xl"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <div className="-xl:relative -xl:text-center -xl:top-0 -xl:w-full absolute  text-right top-20 rounded-xl text-indigo-900 w-1/3 right-0 flex flex-col justify-end items-end -xl:items-center -xl:justify-center">
                                <div>
                                    <h2 className="font-ubuntu text-4xl font-bold text-gray-800 mb-2">
                                        {project.title}
                                    </h2>

                                    <p className="bg-indigo-900 text-white px-2 py-4">
                                        {project.description.slice(0, 150)}
                                    </p>
                                    <div className="flex justify-end -xl:justify-center -md:grid -md:grid-cols-3 -md:w-full">
                                        {project.toolsText.map((tool, i) => (
                                            <h3
                                                className={` px-2 font-bold text-gray-600 mx-1 mb-3`}
                                            >
                                                {tool}
                                            </h3>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-end h-12 text-gray-800">
                                    <button className="bg-indigo-300 w-full  mr-4">
                                        DETAILS
                                    </button>
                                    <button className="bg-indigo-400 w-full">
                                        <a href={project.link} target="_blank">
                                            LINK
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col w-full mt-12 justify-center items-center bg-black pb-32">
                <div className="w-full justify-center items-center flex flex-col p-16 py-32">
                    <h2 className="text-5xl font-bold text-white ">GALLERY</h2>
                    <p className="text-white mt-2 text-center">
                        <span className="italic mt-2 bg-indigo-900 px-2 text-xl">
                            MORII
                        </span>
                        - the desire to capture fleeting experiences. A bit like
                        envisioning your life and wanting to press <br />
                        “pause” to stop and feel more comfortable and rest in a
                        world that is stuck on “play.”{' '}
                        <span className="italic">
                            - The Dictionary of Obscure Sorrows
                        </span>
                    </p>
                </div>
                <div
                    ref={myRef}
                    className="columns-6 gap-8 -xl:columns-5 -lg:columns-4 -md:columns-3 -sm:columns-2 -md:gap-2"
                >
                    {galleryData.map((image) => (
                        <img
                            src={image}
                            style={{ width: '200px' }}
                            className="hover:scale-105 transition-all grayscale hover:grayscale-0 mb-8 -md:mb-3"
                        />
                    ))}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default App
