import { productlist } from '@/data';
import React, { useState } from 'react'

const Work = () => {
    const [active, setactive] = useState("all");
    const [filterpro, setfilterpro] = useState(productlist);

    const filterProduct = (items) => {
        setactive(items);
        if (items === "all") {
            setfilterpro(productlist);
        } else {
            const filterItem = productlist.filter((item) => item.category === items);
            setfilterpro(filterItem);
        }
    };
    console.log(active);
    return (
        <div className='flex-col column-gap-4 py-11 work'>
            <div className='flex-col items-center justify-center gap-3 mt-11'>
                <h1 className='flex items-center justify-center text-5xl service_title font-semibold'>My Recent Works </h1>
            </div>
            <div className='flex items-center justify-center mt-11'>
                <div className=' work_item flex items-center justify-center gap-10  rounded-full w-[400px] h-[50px] '>
                    <button className={` font-bold ${active === "all" ? "green-200" : ""}`} onClick={() => filterProduct('all')}> {""}All{""}</button>
                    <button
                        className={` font-bold   ${active === "men's clothing" ? "green-500 " : " "
                            } `}
                        onClick={() => filterProduct("men's clothing")}
                    >
                        {" "}
                        App{" "}
                    </button>
                    <button
                        className={` font-bold   ${active === "electronics" ? "green-500 " : " "
                            } `}
                        onClick={() => filterProduct("electronics")}
                    >
                        {" "}
                        Branding{" "}
                    </button>
                    <button
                        className={`  font-bold   ${active === " jewelery" ? "green-500 " : " "
                            } `}
                        onClick={() => filterProduct("jewelery")}
                    >
                        {" "}
                        UI/UX{" "}
                    </button>
                </div>
            </div>
            <div>

            </div>
            <div className=" w-full flex flex-wrap items-center justify-center gap-5 pt-8 ">
                {filterpro.length > 0
                    ? filterpro.map((item) => (
                        <div className="w-[31%] bg-slate-800 rounded-md flex flex-col items-center justify-center gap-4">
                            <div className=" w-full h-[350px]">
                                <img
                                    className=" w-full h-full object-center rounded-sm"
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                        </div>

                    ))
                    : " "}
            </div>

        </div>
    )
}

export default Work
