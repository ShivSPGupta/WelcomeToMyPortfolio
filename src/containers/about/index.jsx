import React from 'react';
import PageHeaderContent from '../../components/PageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { DiApple, DiAndroid, DiReact } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'


const personalDetails = [
    {
        label: "Name",
        value: "Shiv Shankar Prasad Gupta",
    },
    {
        label: "Age",
        value: "28",
    },
    {
        label: "Address",
        value: "Ghazipur,UP, India",
    },
    {
        label: "Email",
        value: "demo@expamle.com"
    },
    {
        label: "Contact No",
        value: "+11 234567890",
    },
];

const jobSummary = 'Seasoned and independent Front End Developer, very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you will be judged by your ability to use UX and UI concepts and follow design guidelines. It is about expressing your attention to detail and how you can help implement design ideas for your future employer. '


const About = () => {
    return (
        <section id='about' className='about'>
            <PageHeaderContent
                headerText='About Me'
                icon={<BsInfoCircleFill size={40} />} />


            <div className='about__content'>
                <div className='about__content__personalWrapper'>

                    <Animate play duration={1.5} delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>


                    <Animate play duration={1.5} delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>
                        <h3 className='personalInformationHeaderText'>Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className='title'>{item.label}</span>
                                        <span className='value'>{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className='about__content__servicesWrapper'>
                <Animate play duration={1.5} delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>
                    <div className='about__content__servicesWrapper__innerContent'>
                        <div>
                            <FaDev size={60} color='var( --yellow-theme-main-color)' />
                        </div>
                        <div><DiReact size={70} color='var( --yellow-theme-main-color)' /></div>
                        <div><FaDatabase size={60} color='var( --yellow-theme-main-color)' /></div>
                        <div><DiAndroid size={60} color='var( --yellow-theme-main-color)' /></div>
                    </div>
                    </Animate>

                </div>

            </div>

        </section>
    )
}

export default About;