import React from 'react'
import logo from './image.svg';
import './style.css';


// ${props.mode === '#cbd5e1'? 'bg-white': 'bg-[url(https://unsplash.com/photos/Im7lZjxeLhg)]'}

export default function ContactUs(props) {
    return (
        <>           
         <h1 className='text-5xl text-orange-500 text-center mt-4 font-mono font-semibold'>
                Contact Us
            </h1>
        <div className={`${props.mode === '#cbd5e1' ? 'text-slate-700' : 'text-zinc-300'} justify-center `}>

                <nav className='flex
                  flex-col'>
                    <h2 className={`text-center text-white text-3xl font-semibold mt-7 mb-3 `}>
                        Get In Touch With Us
                    </h2>
                    <h4 classname="font-bold text-dark text-xl mb-1">Our Social Media Handlers</h4>
                    <a className='text-sky-500' href="https://www.instagram.com/punitmudgal_/">Instagram</a> <br />
                    <a className='text-sky-500' href="https://twitter.com/PunitMudgal25">Twitter</a><br />
                    <a className='text-sky-500' href="/">GitHub</a>

                </nav>
                    <img src={logo} className='w-auto h-auto mt-7 margin' alt=" not found" />
        </div>
        </>

    )
}



