import { space } from 'postcss/lib/list';
import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
const Blog = () => {
    return (
        <div className='flex-col py-11 pt-11 mt-10  items-center justify-center'>
            <div className='flex-col items-center justify-center gap-3'>
                <h1 className='flex items-center justify-center text-5xl service_title font-semibold'>Recent Blogs   </h1>
                <p className='flex items-center justify-center pt-4 text-base font-normal text-center blog_pera'>We put your ideas and thus your wishes in the form of a unique web project that <br /> inspires you and you customers. </p>
            </div>
            <div className=' blog_image  gap-3 flex items-center justify-center pl-1 sm:basis-1 md:basis-1/2 lg:basis-1/3 pt-7 mt-10 flex-wrap '>
                <div className="  items-center justify-center w-[360px] h-full">
                    <div className='flex items-center justify-center'>
                        <img className='rounded-xl' src="./src/assets/image/blog/02.jpg" alt="" />
                    </div>
                </div>
                <div className='w-[320px] h-[90px] rounded-sm bg-slate-300 items-center justify-center text-center gap-3 blog_peragraph'>
                    <div className='flex items-center justify-evenly '>
                        <div className='flex items-center gap-2 py-3 px-3'><FaCalendarAlt /> <span>May 10 2024</span></div>
                        <div className='flex items-center gap-2'><TiMessages /> <span>No Comment</span></div>
                    </div>
                    <div>
                        <h2>The Role of Technology Of Modern</h2>
                    </div>
                </div>
                <div className=" items-center justify-center   w-[360px] h-full ">
                    <div className='flex items-center justify-center'>
                        <img className='  rounded-xl ' src="./src/assets/image/blog/02.jpg" alt="" />
                    </div>
                </div>
                <div className=" items-center justify-center  w-[360px] h-full  ">
                    <div className='flex items-center justify-center'>
                        <img className='  rounded-xl ' src="./src/assets/image/blog/02.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
