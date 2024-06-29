
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComponent({ isDrawerOpen }) {
    return (
        <div className={`footer-wrapper ${isDrawerOpen ? 'footer-hidden' : ''}`}>
            <Footer container>
                <div className="w-full">
                    <div className="w-full flex items-center justify-between">
                        <Footer.Copyright href="#" by="Genuine Careers" year={2024} />
                        <div className="flex gap-2 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="https://www.instagram.com/developer.nithin/?hl=en" icon={BsInstagram} />
                            <Footer.Icon href="https://x.com/Nithin80875999" icon={BsTwitter} />
                            <Footer.Icon href="https://github.com/nithingooud" icon={BsGithub} />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>

    );
}

export default Footer;