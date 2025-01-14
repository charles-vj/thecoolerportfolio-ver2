import { Container, useMediaQuery } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import Fade from 'react-reveal/Fade';

import { Row, Col, Grid, Button, Spacer } from '@nextui-org/react';
import arnab3 from '../../public/images/Group.svg'

import { SiJavascript } from 'react-icons/si'

import rlogowhite from '../../public/images/react-logo-white.png'
import nextlogo from '../../public/images/next-logo.png'

export default function About() {

    const getResume = () => {
        window.open("https://drive.google.com/file/d/1RgVE8Gz73VaZknW-OKXpCiu3SOGetE0V/view?usp=sharing")
    }

    return (
        <div className="about" id="about">
            <h1 className="about-header">About</h1>
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        <Fade bottom duration={2000}>
                            <p className="about-main-text">All Work, All Play</p>
                            <p className="about-subtext">I hail from Thrissur, Kerala 🇮🇳 <br /> You will find me playing on the multicourt or the sports complex and sometimes an AWP in Mirage.</p>
                            <Spacer y={1} />
                            <Button onClick={getResume} className="about-btn" size="xlarge" shadow color="gradient" auto>Get My Manifesto</Button>
                        </Fade>

                    </Grid>
                    <Grid xs={12} md={6} className="about-img-col">
                        <Fade bottom duration={2000}>
                            <Image className="about-img" src={arnab3} width="2000px" height="2000px" />
                        </Fade>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
