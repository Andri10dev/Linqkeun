import Title from "@/app/components/title"
import Image from "next/image"
import AboutImage from '../../images/about-img.jpg'

const AboutUs = () => {
    return (
        <div id="aboutUs" className="w-full bg-custom-blue py-16">
            <Title name="About Us" color="white"></Title>
            <div className="flex flex-col md:flex-row items-center mt-10 px-5 md:px-0">
                <div className="md:w-1/2 md:pl-10">
                    <Image src={AboutImage} alt="linqkeun - about image" className="w-[90%] md:w-[70%] aspect-video rounded-2xl mx-auto"></Image>
                </div>
                <div className=" md:w-1/2 md:pr-10 mt-5 md:mt-0">
                    <p className="text-justify text-white text-sm">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs