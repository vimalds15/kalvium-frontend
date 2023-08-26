import React from 'react'
import Wave from '../../components/Wave'
import NavBar from '../../components/NavBar'
import HeroRight from "../../assets/hero-right.png"
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="flex w-screen flex-col">
        <div className="mt-10 flex-grow flex-wrap">
            <div className='flex items-center'>
                <div className='flex flex-col flex-wrap md:max-w-[600px] md:first-letter:pl-10 md:pr-15 -mt-10'>
                    <div className='mb-5 w-[85%]'>
                        <p className='text-4xl  font-extrabold tracking-wide'>Elevate your college experience with<br /> <p className='text-primary mt-2'> Effortless Attendance.</p></p>                        
                    </div>
                    <div className='mt-4 w-[85%]'>
                    <p className='text-light font-normal'>Streamline your college life with our attendance booking system. Say hello to convenience!</p>
                    </div>

                    <div className='mt-12'>
                        <Link to='/attendance'>
                            <div className='flex'>
                                <p className='px-6 py-2 rounded-3xl bg-black text-white'>Mark Attendance</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='hidden md:flex'>
                    <img src={HeroRight} className='mr-28' alt="hero-image" />
                </div>
            </div>
        </div>
        <Wave />
    </div>
  )
}

export default HomePage