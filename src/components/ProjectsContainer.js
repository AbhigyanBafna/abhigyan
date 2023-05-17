import Image from 'next/image';
import { useRef } from 'react';


export default function Projects() {

    // const ref = useRef(null);

    // const scroll = (scrollOffset) => {
    //     ref.current.scrollLeft += scrollOffset;
    // };

    return(
        <div className="w-full max-w-[800px] mx-auto p-3 flex overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-sText/20 scrollbar-thumb-blue-700 space-x-4" /*ref={ref} style={{ scrollBehavior: 'smooth' }}*/ >
                
            <div class="max-w-[20rem] min-w-[20rem] min-h-[450px] bg-gray-800 border border-gray-700 rounded-lg mx-auto">
                <a href="#">
                    <Image 
                        src={'/testImg.png'}
                        className='rounded-t-lg'
                        width={500}
                        height={500}
                        alt="Test" />

                </a>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 1</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tech Used</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Description 1 Description 1 Description 1 Description 1 </p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-600">
                        Learn more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

            <div class="max-w-[20rem] min-w-[20rem] min-h-[450px] bg-gray-800 border border-gray-700 rounded-lg mx-auto">
                <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 1</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tech Used</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Description 1 Description 1 Description 1 Description 1 </p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-600">
                        Learn more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

            <div class="max-w-[20rem] min-w-[20rem] min-h-[450px] bg-gray-800 border border-gray-700 rounded-lg mx-auto">
                <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 1</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tech Used</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Description 1 Description 1 Description 1 Description 1 </p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-600">
                        Learn more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

            <div class="max-w-[20rem] min-w-[20rem] min-h-[450px] bg-gray-800 border border-gray-700 rounded-lg mx-auto">
                <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 1</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tech Used</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Description 1 Description 1 Description 1 Description 1 </p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-600">
                        Learn more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

            <div class="max-w-[20rem] min-w-[20rem] min-h-[450px] bg-gray-800 border border-gray-700 rounded-lg mx-auto">
                <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 1</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tech Used</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Description 1 Description 1 Description 1 Description 1 </p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-600">
                        Learn more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>



            {/* Buttons Navigation */}
            {/* <button onClick={() => scroll(-100)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 dark:bg-gray-700 rounded-full p-2">
                Left Nav
            </button>
            <button onClick={() => scroll(100)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 dark:bg-gray-700 rounded-full p-2">
                Right Nav
            </button> */}

        </div>
    )
    
}