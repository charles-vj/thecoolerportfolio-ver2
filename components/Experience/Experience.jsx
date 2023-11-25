import React from 'react'
import { Container } from '@mui/material'
import Fade from 'react-reveal/Fade';
import Image from 'next/image'

import fi from '../../public/images/filogo.svg'
import amazon from '../../public/images/amazon.svg'
import msc from '../../public/images/msc.svg'
import polygon from '../../public/images/polygon.svg'
import push from '../../public/images/push.svg'
import mozilla from '../../public/images/mozilla.svg'
import mauka from '../../public/images/Mauka.svg'
import hackclub from '../../public/images/hackclub.svg'

import { Tooltip, Text, Row, Col, Grid, Button } from '@nextui-org/react';

export default function Experience() {
    return (
        <div className="experience">
            <h1 className="exp-header">experience</h1>

            <Container className="exp-cont">
                <Fade bottom duration={2000}>
                    <p className="exp-main-text">

                        {/* <Tooltip className="tooltip" content={'Jan \'24 '} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Software Engineer
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={amazon} />
                                    </div>
                                    <span style={{ 'color': 'rgb(255, 153, 0)' }}> Amazon</span>
                                </span>
                            </Text>
                        </Tooltip> */}

                        <Tooltip className="tooltip" content={<div> Played all possible sports</div>} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Basketball winner
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={push} />
                                    </div>
                                    <span style={{ "background": "-webkit-linear-gradient(0deg, rgba(224,61,193,1) 0%, rgba(130,71,229,1) 62%, rgba(255,148,166,1) 100%)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent" }}> JPL</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Captain as well '} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Emerging Player
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                    {/* <div className='expImgContainer'>
                                    
                                    </div> */}
                                    <span style={{ 'color': 'rgb(0, 184, 153)' }}>🌏Intersectionals</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Intersectionals'} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Winner
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                    {/* <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={polygon} />
                                    </div> */}
                                    <span style={{ 'color': 'rgb(130, 71, 229)' }}>💟Table tennis</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={'Relay team'} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Sprinter
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                    {/* <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={mauka} />
                                    </div> */}
                                    <span style={{ 'color': 'rgb(40, 120, 145)' }}>🏃‍♂️Inter-IIIT</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" content={"IIIT Kottayam"} placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Captain
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                    {/* <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={msc} />
                                    </div> */}
                                    <span style={{ 'color': 'rgb(1, 118, 211)' }}>🧊College Basketball Team</span>
                                </span>
                            </Text>
                        </Tooltip>

                        <Tooltip className="tooltip" placement="right" hideArrow rounded>
                            <Text style={{ 'display': 'flex' }}>Intern
                                <span style={{ 'display': 'flex', 'marginLeft': '10px', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={mozilla} />
                                    </div>
                                    <span style={{ 'color': 'rgb(242, 25, 0)' }}>Puma</span>
                                </span>
                            </Text>
                        </Tooltip>
                    </p>

                    {/* <div className='parent'>
                        <div className='div0 grid-div'>Incoming SDE <br />                                
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={amazon}/>
                                    </div>
                                <span style={{ 'color': 'rgb(255, 153, 0)' }}> Amazon</span>
                            </span>
                        </div>
                        <div className='div1 grid-div'>SWE Intern<br />                                
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={push}/>
                                    </div>
                                <span style={{ 'color': 'rgb(224,61,193)' }}> Push Protocol</span>
                            </span>
                        </div>
                        <div className='div2 grid-div'>SWE Intern <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={fi}/>
                                    </div>
                                <span style={{ 'color': 'rgb(0, 184, 153)' }}> Fi Money</span>
                            </span>
                        </div>
                        <div className='div3 grid-div'>SWE Intern <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={polygon}/>
                                    </div>
                                <span style={{ 'color': 'rgb(130, 71, 229)' }}> Polygon</span>
                            </span>
                        </div>
                        <div className='div4 grid-div'>Frontend Intern <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={mauka}/>
                                    </div>
                                <span style={{ 'color': 'rgb(40, 56, 145)' }}>Mauka</span>
                            </span>
                        </div>
                        <div className='div6 grid-div'>Web Lead <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={msc}/>
                                    </div>
                                <span style={{ 'color': 'rgb(1, 118, 211)' }}>MSC KIIT</span>
                            </span>
                        </div>
                        <div className='div5 grid-div'>Tech Lead <br />
                            <span style={{ 'display': 'flex', 'display': 'flex', 'alignItems': 'center' }} >
                                    <div className='expImgContainer'>
                                        <Image className='expImage' layout='responsive' src={mozilla}/>
                                    </div>
                                <span style={{ 'color': 'rgb(242, 25, 0)' }}>Mozilla</span>
                            </span>
                        </div>
                    </div> */}
                </Fade>
            </Container>
        </div>
    )
}
