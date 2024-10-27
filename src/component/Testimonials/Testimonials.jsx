import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Testimonials = () => {
    function CarouselPlugin() {
        const plugin = React.useRef(
            Autoplay({ delay: 2000, stopOnInteraction: true })
        )
    }
    return (

        <div className='flex-col py-11 pt-11 mt-10 flex items-center justify-center testi'>
            <div className='flex-col items-center justify-center gap-3' >
                <h1 className='flex items-center justify-center text-5xl service_title font-semibold'>My Client's Stories  </h1>
                <p className='flex items-center justify-center pt-4 text-base font-normal text-center testi_p'>Empowering people in new a digital journey with my super services</p>
            </div>
            <Carousel opts={{
                align: "start",
                justify: "center",
                loop: true,
            }}>
                <CarouselContent className='gap-3 '>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  items-center justify-center ">
                        <div className='flex items-center justify-center'>
                            <div className='flex-col shadow border-2 mt-11 px-8 CarouselItem'>

                                <div className='flex items-center justify-between'>
                                    <img src="./src/assets/image/testi/1-dark.png" alt="" />
                                    <img className='client_img w-[100px] h-[90px]' src="./src/assets/image/testi/01.jpg" alt="" />
                                </div>
                                <img src="./src/assets/image/testi/talk.png" alt="" />

                                <p className='pt-3'>

                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam minus numquam
                                    quisquam deleniti quidem officiis aspernatur a recusandae ullam vitae?</p>

                                <div className='mt-10'>
                                    <h4>Brendong Frasher</h4>
                                    <span>SEO Specialist, Theme Junction</span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  items-center justify-center">
                        <div className='flex items-center justify-center'>
                            <div className='flex-col shadow border-2 mt-11 px-8 CarouselItem '>

                                <div className='flex items-center justify-between'>
                                    <img src="./src/assets/image/testi/1-dark.png" alt="" />
                                    <img className='client_img w-[100px] h-[90px]' src="./src/assets/image/testi/02.jpg" alt="" />
                                </div>
                                <img src="./src/assets/image/testi/talk.png" alt="" />

                                <p className='pt-3'>

                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam minus numquam
                                    quisquam deleniti quidem officiis aspernatur a recusandae ullam vitae?</p>

                                <div className='mt-10'>
                                    <h4>Tim Bailay</h4>
                                    <span>Senior Developer, UK</span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3  items-center justify-center">
                        <div className='flex items-center justify-center'>
                            <div className='flex-col shadow border-2 mt-11 px-8 CarouselItem '>

                                <div className='flex items-center justify-between'>
                                    <img src="./src/assets/image/testi/1-dark.png" alt="" />
                                    <img className='client_img w-[100px] h-[90px]' src="./src/assets/image/testi/01.jpg" alt="" />
                                </div>
                                <img src="./src/assets/image/testi/talk.png" alt="" />

                                <p className='pt-3'>

                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam minus numquam
                                    quisquam deleniti quidem officiis aspernatur a recusandae ullam vitae?</p>

                                <div className='mt-10'>
                                    <h4>Brendong Frasher</h4>
                                    <span>SEO Specialist, Theme Junction</span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>

    )
}


export default Testimonials
