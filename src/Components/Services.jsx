import React from 'react'
import serviceIcon from "../assets/service_icon.png";
import image_1 from "../assets/service_p_1 (1).png"

import image_3 from "../assets/service_p_1 (3).png"
import image_4 from "../assets/service_p_1 (4).png"
import { Link } from 'react-router';

const serviceData = [
    {
        id:1,
        image: image_1,
        title:"Web Development",
        dascription:"the quick fox jumps over the lazy dog"
    },
    {
        id:2,
        image: image_1,
        title:"Web Development",
        dascription:"the quick fox jumps over the lazy dog"
    },
    {
        id:3,
        image: image_3,
        title:"Web Development",
        dascription:"the quick fox jumps over the lazy dog"
    },
    {
        id:4,
        image: image_4,
        title:"Web Development",
        dascription:"the quick fox jumps over the lazy dog"
    }
];

const ServiceItem = ({image, title, dascription}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-6 bg-white px-10 py-9 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='mb-4'>
                <img src={image} alt={title} className='w-16 h-16 object-contain' />
            </div>
            <div className='text-center space-y-4'>
                <h3 className='text-[16px] leading-[24px]  text-black'>{title}</h3>
                <h3 className='text-gray-600 text-sm leading-[20px] font-bold px-3 '>{dascription}</h3>
            
           <div className='flex justify-center'>
           <Link to={'/'} className='w-[140px] flex items-center justify-center border  border-secondary-color-1 rounded-full gap-2 py-[10px] px-[30px]'>
                <span className='leading-[28px] text-secondary-color-1 font-bold'>More</span>
                <img src={serviceIcon} alt="arrow icon" className='w-4 h-4' />
            </Link>

           </div>
        </div>

    </div>
    )
        
            
        
    
}


const Services = () => {
  return (
    <section>
        <div className="container">
            <div className='grid grid-cols-1 gap-8 py-[180px] px-[100px]'>
            {serviceData.map((service) => (
                        <ServiceItem 
                            key={service.id} 
                            image={service.image} 
                            title={service.title} 
                            dascription={service.dascription} 
                        />
                    ))}
            </div>
        </div>
    </section>
  )
}




export default Services

