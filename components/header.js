import Link from 'next/link'

export default function Header({selected}) {


    return (
        <div
            className='bg-black text-white fixed top-0 left-0 right-0 z-50'
        >
            <div
                className="container-l mx-auto lg:flex flex-row justify-between items-center"
            >
                <Link href="/">
                    <div className='flex flex-row justify-center items-center m-8 ml-16'>
                        <a className="hover:underline">
                            <div className='font-light text-3xl text-center font-mushroom'>KAMIRAN KHALIL</div>
                        </a>
                    </div>
                </Link>

                <div className='flex flex-row justify-center items-center mx-20 flex-wrap'>
                    <Link href='/paintings'>
                        <div
                            className={`font-mushroom p-4 cursor-pointer border-b-2 border-solid ${selected === 'paintings' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}
                        >
                            PAINTINGS
                        </div>
                    </Link>
                    <Link href='/sketches'>
                        <div
                            className={`font-mushroom p-4 cursor-pointer border-b-2 border-solid ${selected === 'sketches' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}
                        >
                            SKETCHES
                        </div>
                    </Link>
                    <Link href='/media'>
                        <div
                            className={`font-mushroom p-4 cursor-pointer border-b-2 border-solid ${selected === 'media' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}
                        >
                            MEDIA AND PHOTOS
                        </div>
                    </Link>
                    <Link href='/about'>
                        <div
                            className={`font-mushroom p-4 cursor-pointer border-b-2 border-solid ${selected === 'about' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}
                        >
                            ABOUT
                        </div>
                    </Link>

                    <a href="mailto:Kamiranart@hotmail.com" target="" name="kamirankhalil">
                        <div
                            className={`font-mushroom p-4 cursor-pointer border-b-2 border-solid border-transparent hover:border-gray-300`}
                        >
                            CONTACT
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}
