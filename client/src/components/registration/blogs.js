import React from 'react';
import Mighty from '../../images/mighty.png';
import Secret from '../../images/secret.png';
import Purple from '../../images/purple.jpg';

export default function blogs() {
    return (
        <div>
            <section className="Section hpSection-blogs">
                <h2 id= 'blogs' className="hpSection-blogs--heading">Blogs</h2>
                <div className="hpSection-blogs--blog">
                    <a target="blank" href="https://themighty.com/2016/11/mental-illness-a-thank-you-letter-to-my-professors/" className="blogCard">
                        <div className="blogCard-content">
                            <img src={Mighty} alt="" loading="lazy"/>
                                <p className="blogCard-content--cat">
                                    The Mighty<span>&nbsp;</span>
                                </p>
                                <h4>Their mental illness section is excellent, and covers a wide range of conditions.</h4>
                        </div>
                        <p className="blogCard-date">November 18, 2016 </p>
                    </a>
                    <a target="blank" href="https://thesecretlifeofamanicdepressive.wordpress.com/" className="blogCard">
                        <div className="blogCard-content">
                            <img src={Secret} alt="" loading="lazy"/>
                                <p className="blogCard-content--cat">
                                    The Secret Life of a Manic Depression<span>&nbsp;</span>
                                </p>
                                <h4>Writer and mental health activist Seaneen started The Secret Life of a Manic Depressive ten years ago and has been sharing her experiences of being “mentally interesting” since.</h4>
                        </div>
                        <p className="blogCard-date">2007 onwards </p>
                    </a>
                    <a target="blank" href="https://www.mind.org.uk/information-support/your-stories/" className="blogCard">
                        <div className="blogCard-content">
                            <img src={Purple} alt="" loading="lazy"/>
                                <p className="blogCard-content--cat">
                                    Purple Persuasion<span>&nbsp;</span>
                                </p>
                                <h4>Award-winning blogger Charlotte Walker has been battling with mental distress for over 25 years and have been a mental health service user since 1994. Her blog Purple Persuasion offers a compelling insight into her experience of living with a serious mental illness.</h4>
                        </div>
                        <p className="blogCard-date">2013 onwards</p>
                    </a>
                </div>
            </section>
        </div>
    )
}
