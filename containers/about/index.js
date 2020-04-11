import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/common/title/index';
import Button from '../../components/common/button';
import Image from '../../components/common/image/index';
import AboutImg from '../../public/assets/images/about/about-img.png';
import './about.scss';

function About() {
    return (
        <section className="about-wrapper gradient-color" id="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="about-content-block main-title-wrapper">
                            <Subtitle
                                Class="sitemain-subtitle"
                                Name="Sobre Nós"
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name="Seu cliente está feliz?"
                            />

                            <Description
                                Class="about-dec about-dec-1"
                                Name="Nossa filosofia é proporcionar a melhor experiência aos clientes e otimizar os processos de atendimento reduzindo os custos operacionais. Para isso desenvolvemos Chatbots e URAs Inteligentes de uma maneira que nenhuma outra empresa faz!"
                            />
                            <Titlespan2
                                Class="about-twosub-title"
                                Name="Nós somos experts em "
                                Label="Satisfação"
                            />
                            <Description
                                Class="about-dec"
                                Name="Se você espera encantar seu cliente com o melhor atendimento por voz disponível no mercado, pode ter certeza que nós estamos aqui para te ajudar!"
                            />
                            <a href="#contact">
                            <Button
                                Class="button1 button4 btn"
                                Name="VAMOS ENCANTAR JUNTOS"
                                Title="gradient-color"
                                BtnIcon="btn-icon gradient-color1"
                            />
                            </a>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="about-image">
                            <Image Path={AboutImg} Class="about-img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
