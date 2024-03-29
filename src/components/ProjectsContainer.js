import { ArrowIcon } from '@/lib/icons';
import { urlFor } from '@/utils/sanity';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

export default function Projects( {projects}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
          if (containerRef.current) {
            containerRef.current.scrollLeft += e.deltaY;
          }
        };
      
        const currentRef = containerRef.current;
      
        if (currentRef) {
          currentRef.addEventListener('wheel', handleWheel);
        }
      
        // Clean up the event listener when the component unmounts
        return () => {
          if (currentRef) {
            currentRef.removeEventListener('wheel', handleWheel);
          }
        };
      }, []);

    return(
        <div className="w-full max-w-[800px] mx-auto p-3 flex overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-sText/20 scrollbar-thumb-blue-700 space-x-4" ref={containerRef}>

            {projects?.map( (project) => { 
                return(

                    <div key={project?._id} className="max-w-[20rem] min-w-[20rem] h-[30rem] border border-gray-700 rounded-lg mx-auto flex flex-col justify-between">
                        <a href="#">
                            <Image
                             src={urlFor(project?.image).url()}
                                className="rounded-t-lg"
                                width={320}
                                height={300}
                                alt={project?.name}
                            />
                        </a>

                        <div className="p-5 flex flex-col justify-between">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                    {project?.name}
                                </h5>

                                <div className="flex space-x-2 mb-3">
                                    {project?.technologies.map((technology) => (
                                        <Image
                                            className="h-7 w-7"
                                            width={100}
                                            height={500}
                                            key={technology?._id}
                                            src={urlFor(technology?.image).url()}
                                            alt="Tech Used"
                                        />
                                    ))}
                                </div>

                                <p className="mb-3 text-gray-400">{project?.bio}</p>
                            </div>

                            <a
                                href={project?.url}
                                className="inline-flex justify-between items-center text-center px-3 py-2 mt-5 text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-600"
                            >
                                Project Link
                                <ArrowIcon />
                            </a>
                        </div>
                    </div>

                )
            })}
            
        </div>
    )
}