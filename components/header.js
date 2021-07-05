import {useState} from 'react';
import Link from 'next/link'


export default function Header({selected}) {
    const [lang, setLang] = useState('en');
    const [open, setOpen] = useState(false);


    return (
        <div
            className='fixed top-0 left-0 right-0 z-50 bg-white'
        >
            <div
                id="header-container"
            >
                <Link href="/">
                    <div className="flex flex-row items-center justify-center ml-4 mt-4 lg:ml-20 font-light text-3xl font-mushroom font-normal" >
                        KAMIRAN KHALIL
                    </div>
                </Link>

                <div className='lg:hidden mx-4 mt-4'>
                    <input onChange={() => setOpen(!open)} id="toggle" type="checkbox" />
                    <label className="hamburger" htmlFor="toggle">
                        <div className="top"/>
                        <div className="meat"/>
                        <div className="bottom"/>
                    </label>
                </div>

                <div className={`${!open && 'hidden'} lg:hidden fixed top-80 left-0 right-0 bottom-0 flex justify-center items-center flex-col bg-white`}>
                    <Link href='/paintings'>
                        <div className="p-4 cursor-pointer">
                            PAINTINGS
                        </div>
                    </Link>
                    <Link href='/sketches'>
                        <div className="p-4 cursor-pointer">
                            SKETCHES
                        </div>
                    </Link>
                    <Link href='/media'>
                        <div className="p-4 cursor-pointer">
                            MEDIA AND PHOTOS
                        </div>
                    </Link>
                    <Link href='/about'>
                        <div className="p-4 cursor-pointer">
                            ABOUT
                        </div>
                    </Link>

                    <a href="mailto:Kamiranart@hotmail.com" target="" name="kamirankhalil">
                        <div className="p-4 cursor-pointer">
                            CONTACT
                        </div>
                    </a>
                </div>

                <div className='hidden lg:flex flex-row justify-center items-center mx-20 flex-wrap mt-8'>
                    <Link href='/paintings'>
                        <div className="p-4 cursor-pointer">
                            PAINTINGS
                        </div>
                    </Link>
                    <Link href='/sketches'>
                        <div className="p-4 cursor-pointer">
                            SKETCHES
                        </div>
                    </Link>
                    <Link href='/media'>
                        <div className="p-4 cursor-pointer">
                            MEDIA AND PHOTOS
                        </div>
                    </Link>
                    <Link href='/about'>
                        <div className="p-4 cursor-pointer">
                            ABOUT
                        </div>
                    </Link>

                    <a href="mailto:Kamiranart@hotmail.com" target="" name="kamirankhalil">
                        <div className="p-4 cursor-pointer">
                            CONTACT
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}
