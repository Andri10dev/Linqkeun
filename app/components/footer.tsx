import Image from "next/image"
import LogoOnlyBlue from '../images/logo-ony-blue.png'
import FooterVector from '../images/footer-vector.svg'
import Link from "next/link"

const Footer = () => {
    return (
        <div id="footer" className="w-full">
            <div className="flex flex-col md:flex-row bg-custom-blue">
                <div className="order-5 md:order-1 md:w-[33%] h-fit grid relative overflow-hidden pl-10 py-5 bg-cover " style={{ backgroundImage: `url(${FooterVector.src})` }}>
                    <p className="font-semibold text-4xl text-custom-blue mb-5">Linqkeun</p>
                    <Image src={LogoOnlyBlue} alt="Logo Linqkeun Blue" className="w-32 aspect-square object-contain"></Image>
                </div>
                <div className="order-1 md:order-2 md:w-[16.6%] 500 px-3 py-5 text-white">
                    <p className="font-semibold border-b-4 mb-3 pb-3">Our Company</p>
                    <div className="flex flex-col space-y-3 pl-5">
                        <Link href="/" >Home</Link>
                        <Link href="/" >About Us</Link>
                        <Link href="/" >Our Service</Link>
                        <Link href="/" >Contact</Link>
                    </div>
                </div>
                <div className="order-2 md:order-3 md:w-[16.6%] 500 px-3 py-5 text-white">
                    <p className="font-semibold border-b-4 mb-3 pb-3">Service</p>
                </div>
                <div className="order-3 md:order-4 md:w-[16.6%] 500 px-3 py-5 text-white">
                    <p className="font-semibold border-b-4 mb-3 pb-3">Contact</p>
                </div>
                <div className="order-4 md:order-5 md:w-[16.6%] h-32 500 px-3 py-5 text-white">
                    <p className="font-semibold">Map</p>
                </div>
            </div>
            <div className="text-center py-5 bg-gray-900 text-white text-sm md:text-base">
                <span>&copy;</span>
                <span> All Copyrights are Reserverd by Linqkeun</span>
            </div>
        </div>
    )
}

export default Footer