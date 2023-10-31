import Image from "next/image"
import Title from "../components/title"
import Service from '../images/service.jpg'

const ServiceSection = () => {
    return (
        <div id="serviceSection" className="w-full h-fit md:h-screen bg-white pt-16">
            <Title name="Our Service" color="black"></Title>
            <Image src={Service} alt="Linqkeun Service" className="h-[85%] aspect-video object-contain my-10"></Image>
        </div>
    )
}

export default ServiceSection