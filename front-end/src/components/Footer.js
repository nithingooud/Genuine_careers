
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComponent() {
    return (
        <div style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Footer container>
                <div className="w-full">
                    <div className="w-full flex items-center justify-between">
                        <Footer.Copyright href="#" by="Genuine Carrers" year={2024} />
                        <div className=" flex gap-2 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>

    );
}

export default Footer;