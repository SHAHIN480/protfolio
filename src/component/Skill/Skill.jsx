import React from 'react'

const Skill = () => {
    return (

        <div className='flex-col py-11 pt-11 mt-10 flex items-center justify-center' >
            <div className='flex-col items-center justify-center gap-3' >
                <h1 className='flex items-center justify-center text-5xl service_title font-semibold'>My Skills  </h1>
                <p className='flex items-center justify-center pt-4 text-base font-normal text-center skill_peragraph'>We put your ideas and thus your wishes in the form of a unique web project that <br /> inspires you and you customers. </p>
            </div>
            <div className="flex items-center justify-center flex-wrap w-full h-full gap-5 pt-11 mt-11 ">
                <div class=" w-[160px] h-[160px] bg-slate-200 shadow flex items-center justify-center rounded-xl hover:bg-sky-700 transition-delay: 100ms;"><img className=' w-[40px] h-[40px] object-contain ' src="./src/assets/image/skill/figma.png" alt="" /></div>
                <div class=" w-[160px] h-[160px] bg-slate-200 shadow flex items-center justify-center rounded-xl  hover:bg-sky-700 transition-delay: 100ms;"><img className=' w-[90px] h-[70px]  object-contain ' src="./src/assets/image/skill/js.png" alt="" /></div>
                <div class=" w-[160px] h-[160px] bg-slate-200 shadow flex items-center justify-center rounded-xl  hover:bg-sky-700 transition-delay: 100ms;"><img className=' w-[70px] h-[70px]  object-contain ' src="./src/assets/image/skill/sketch.png" alt="" /></div>
                <div class="w-[160px] h-[160px] bg-slate-200 shadow flex items-center justify-center rounded-xl  hover:bg-sky-700 transition-delay: 100ms;" ><img className=' w-[70px] h-[70px] object-contain ' src="./src/assets/image/skill/wp.png" alt="" /></div>
                <div class="w-[160px] h-[160px] bg-slate-200 shadow flex items-center justify-center rounded-xl  hover:bg-sky-700 transition-delay: 100ms;"><img className=' w-[70px] h-[70px]  object-contain ' src="./src/assets/image/skill/react.png" alt="" /></div>
                <div class="w-[160px] h-[160px] bg-slate-200 shadow flex items-center justify-center rounded-xl  hover:bg-sky-700 transition-delay: 100ms;"><img className=' w-[70px] h-[70px]  object-contain ' src="./src/assets/image/skill/xd.png" alt="" /></div>
            </div>
        </div>
    )
}

export default Skill
