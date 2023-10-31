import Image from 'next/image'
import Waves from '../../images/waves.svg'

const WelcomeSection = () => {
    return (
        <div className="w-full h-screen relative">
            <Image src={Waves} alt='linqkeun-wave' className='w-full'></Image>
            <Image src={Waves} alt='linqkeun-wave' className='absolute bottom-0 rotate-180 w-full'></Image>
            <div className='w-full px-5 md:px-10 flex flex-col md:flex-row'>
                <div className='md:w-1/2'>
                    <h1 className='text-custom-blue font-bold text-5xl'>Linqkeun</h1>
                    <p>Connecting Your Business</p>
                    <p className='mt-10 text-sm'>
                        Manage your business with ease with Linqkeun, a mini ERP app that helps you with:
                    </p>
                    <p className='text-sm md:text-base'>
                        Sales and marketing: Track your sales, leads, and marketing campaigns.
                        Customer relationship management: Organize your customer data and interactions.
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default WelcomeSection