import React from 'react'

export default function about() {
    return (
        <div id='about'>
            <section className="Section hpSection-application">
                <div className="application">
                    <div className="application-content">
                        <h3>
                            Our Aim & Objectives
                        </h3>
                        <p>
                            We aspire to provide a safe space for everyone to share and communicate with like-minded people suffering from similar mental health problems. We aim to provide a personalized solution to users and try to bring people a bit closer by lending a shoulder to people who are feeling lonely and have no one to talk to.
                        </p>
                    </div>
                    <div className="application-cta">
                        <a href="#navbar" className="outlineBtn">
                            Sign In
                        </a>
                        <a href="#navbar" className="whiteBgBtn">
                            Sign Up
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}