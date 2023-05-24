import { urlFor } from '@/utils/sanityUtils';
import Image from 'next/image';


export default function Projects( {projects}) {

    return(
        <div className="w-full max-w-[800px] mx-auto p-3 flex overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-sText/20 scrollbar-thumb-blue-700 space-x-4" >

            {projects.projects.map(project => { 
                return(

                    <div key={project._id} className="max-w-[20rem] min-w-[20rem] h-[30rem] border border-gray-700 rounded-lg mx-auto flex flex-col justify-between">
                        <a href="#">
                            <Image
                                src={urlFor(project.image).url()}
                                className="rounded-t-lg"
                                width={320}
                                height={300}
                                alt={project.name}
                            />
                        </a>

                        <div className="p-5 flex flex-col justify-between">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                    {project.name}
                                </h5>

                                <div className="flex space-x-2 mb-3">
                                    {project.technologies.map((technology) => (
                                        <Image
                                            className="h-7 w-7"
                                            width={100}
                                            height={500}
                                            key={technology._id}
                                            src={urlFor(technology.image).url()}
                                            alt="Tech Used"
                                        />
                                    ))}
                                </div>

                                <p className="mb-3 font-normal text-gray-400">{project.bio}</p>
                            </div>

                            <a
                                href={project.url}
                                className="inline-flex justify-between items-center text-center px-3 py-2 mt-5 text-sm text-white bg-blue-800 rounded-lg hover:bg-blue-600"
                            >
                                Link to Project
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                )
            })}
            
        </div>
    )
}