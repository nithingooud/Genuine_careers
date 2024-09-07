
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComponent({ isDrawerOpen }) {
    return (
        <div className="h-8 bg-gray-800 flex items-center justify-center">
            <div className="w-full flex items-center justify-between mx-4">
                <Footer.Copyright href="#" by="All rights reserved developer.nithin" year={2024} />
                <div className="flex gap-2 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="https://www.instagram.com/developer.nithin/?hl=en" icon={BsInstagram} />
                    <Footer.Icon href="https://x.com/Nithin80875999" icon={BsTwitter} />
                    <Footer.Icon href="https://github.com/nithingooud" icon={BsGithub} />
                </div>
            </div>

        </div>

    );
}

export default Footer;