import Image from 'next/image'
import Waves from '../images/waves.svg'
import Kaos from '../images/kaos.png'
import DocLinqkeun from '../images/doc linqkeun.png'
import Link from 'next/link'

const WelcomeSection = () => {
    return (
        <div id='welcomeSection' className="w-full h-fit md:h-screen relative">
            <Image src={Waves} alt='linqkeun-wave' className='w-full h-[150px] md:h-[200px] object-cover object-bottom'></Image>
            <Image src={Waves} alt='linqkeun-wave' className='absolute bottom-0 rotate-180 w-full sm:h-[100px] md:h-52 object-cover object-bottom'></Image>
            <div className='w-full px-5 md:px-10 flex flex-col md:flex-row'>
                <div className='md:w-1/2'>
                    <h1 className='text-custom-blue font-bold text-5xl'>Linqkeun</h1>
                    <p>Connecting Your Business</p>
                    <p className='mt-5 text-sm mb-5'>
                        Manage your business with ease with Linqkeun, a mini ERP app that helps you with
                    </p>
                    <p className='text-sm md:text-base mb-10'>
                        Sales and marketing: Track your sales, leads, and marketing campaigns.
                        Customer relationship management: Organize your customer data and interactions.
                    </p>
                    <Link href="/" className='px-5 py-2 rounded-md text-white bg-custom-blue font-semibold'>
                        Try Now
                    </Link>
                </div>
                <div className='md:w-1/2 flex flex-col justify-end items-center md:items-end pb-[100px] md:pb-0'>
                    <Image src={DocLinqkeun} alt='linqkeun - merchandise' className='h-[250px] aspect-video object-contain md:-mt-5 md:pl-32'></Image>
                    <Image src={Kaos} alt='linqkeun - merchandise' className='w-[200px] aspect-square object-contain self-center md:mr-24 md:-mt-16'></Image>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection