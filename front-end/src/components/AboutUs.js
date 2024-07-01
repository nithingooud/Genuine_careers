import React from "react"
import '../styles/AboutJs.css'
import { Card } from "flowbite-react";


const AboutUsComponent = () => {
    return (
        <div>
            <Card className="max-w-5xl mx-auto mb-4 mt-4 shadow-md bg-white rounded-lg overflow-hidden">
                <div className="about d-flex ">
                    <div className="text-container">
                        <h1 style={{ fontFamily: "math", fontSize: 'xxx-large', color: 'cornsilk' }}>I REALLY LOVE TO </h1>
                        <h1 style={{ fontFamily: "math", fontSize: 'xxx-large', color: 'cornsilk' }}>WORK WITH PEOPLE</h1>
                        <h2 style={{ fontFamily: "Playwrite FR Moderne, cursive" }}>Nithin</h2>
                    </div>
                </div>
                <div>
                    <h2>
                        About Us
                    </h2>
                    <p>
                        Welcome to Genuine Careers, your premier source for career opportunities and insights. Our commitment is to deliver up-to-date information on internships and job openings across diverse industries.
                    </p>
                    <p>
                        At Genuine Careers, we meticulously curate trending and authentic job opportunities, ensuring you have access to roles that match your career ambitions.

                    </p>
                    <h2>
                        Stay Updated!
                    </h2>
                    <p>
                        Stay updated with the latest internship and job postings by visiting our website at <a style={{ color: 'blue' }} href="/">genuinecareers.in</a>. For tailored and exclusive job alerts, subscribe to our channel.                    </p>
                    <p>
                        Channel: <a style={{ color: 'blue' }} href="https://t.me/genuineCareers">//t.me/genuinecareers</a></p>
                    <h2>
                        Collaborations and Promotions
                    </h2>
                    <p>
                        If you're interested in partnering with us or promoting your services, please contact us at <span style={{ color: 'blue' }}> goudnithin77@gmail.com</span>.
                    </p>
                    <p>
                        Thank you for choosing Go Careers to assist you in finding valuable career opportunities. We are dedicated to helping you reach your career objectives.
                    </p>
                </div>
            </Card>

        </div>
    )
}
export default AboutUsComponent