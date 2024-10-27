import React from 'react'

const Education = () => {
    return (
        <div className=' education_section flex items-center justify-center  px-11 mt-11 pt-[80px] py-8'>
            <div className='w-[48%] items-center justify-center '>
                <div className="title flex items-center justify-start gap-2">
                    <img className='w-[45px] h-[45px]' src="./src/assets/image/ex.png" alt="" />
                    <h2 className='text-5xl font-semibold'>My Experience </h2>
                </div>
                <div className="experience_item mt-[80px] flex-col items-center justify-center ">
                    <div className='education_item w-[520px] h-[140px] px-3 py-5 gap-6 items-center justify-center rounded-md'>
                        <span className='text-base font-bold'>2022 - Present</span>
                        <h3 className='text-2xl font-bold'>Lead Developer</h3>
                        <p className='text-xl'> Blockdots, London  </p>
                    </div>
                    <div className='education_item w-[520px] h-[140px] px-3 py-5 gap-6 items-center justify-center rounded-md pt-4 mt-6'>
                        <span className='text-base font-bold'>2022 - Present</span>
                        <h3 className='text-2xl font-bold '>Full Stack Web Developer</h3>
                        <p className='text-xl'> Parsons, The New School  </p>
                    </div>

                    <div className='education_item w-[520px] h-[140px] px-3 py-5 gap-6 items-center justify-center rounded-md pt-4 mt-6'>
                        <span className='text-base font-bold'>2022 - Present</span>
                        <h3 className='text-2xl font-bold'>UI Designer</h3>
                        <p className='text-xl'> House of Life, Leeds </p>
                    </div>
                    <div className='education_item w-[520px] h-[140px] px-3 py-8 gap-6 items-center justify-center pt-4 rounded-md mt-6'>
                        <span className='text-base font-bold'>2022 - Present</span>
                        <h3 className='text-2xl font-bold'>Junior Graphics Designer</h3>
                        <p className='text-xl'> Theme Junction, Bursa  </p>
                    </div>
                </div>
            </div>
            <div className='w-[48%]'>
                <div className="title flex items-center justify-start gap-2">
                    <img className='w-[45px] h-[45px] ' src="./src/assets/image/education.png" alt="" />
                    <h2 className='text-5xl font-semibold'>My Education</h2>
                </div>
                <div className="experience_item mt-[80px] flex-col items-center justify-center ">
                    <div className='education_item w-[520px] h-[140px] px-5 py-5  gap-6 items-center justify-center rounded-md  pt-4 '>
                        <span className='text-base font-bold'>2022 - Present</span>
                        <h3 className='text-2xl font-bold'>Programming course</h3>
                        <p className='text-xl'>Harverd University </p>
                    </div>
                    <div className='education_item w-[520px] h-[140px] px-5 py-5  gap-6 items-center justify-center rounded-md  pt-4  mt-6'>
                        <span className='text-base font-bold'>2021 - 2022</span>
                        <h3 className='text-2xl font-bold '>Graphic design course</h3>
                        <p className='text-xl'> University of Denmark  </p>
                    </div>

                    <div className='education_item w-[520px] h-[140px] px-5 py-5  gap-6 items-center justify-center rounded-md  pt-4  mt-6'>
                        <span className='text-base font-bold'>2020 - 2021</span>
                        <h3 className='text-2xl font-bold'>Web design course</h3>
                        <p className='text-xl'>University of California</p>
                    </div>
                    <div className='education_item w-[520px] h-[140px] px-5 py-5  gap-6 items-center justify-center rounded-md  pt-4  mt-6'>
                        <span className='text-base font-bold'>2018 - 2020</span>
                        <h3 className='text-2xl font-bold'>Design & Technology</h3>
                        <p className='text-xl'> Theme Junction, Bursa  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
