import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from '../../components/common/button';
import { Titlespan, Description } from '../../components/common/title/index';
import Image from '../../components/common/image/index';
import BannerImg1 from '../../public/assets/images/banner/bannerimg.png';
import BannerImg from '../../public/assets/images/banner/bg.png';
import BannerBackgroundImages from '../../data/bannerimages';
import './banner.scss';



function Banner(props) {
    return (
        <section className={`banner-wrapper ${props.ChangeClass}`} id="home">
            <div className="banner-outer">
                <div className="slider-animation-images">
                    {BannerBackgroundImages.map((img, index) => (
                        <span className={`image${index + 1}`} key={`banner-${index}`} ><Image Path={img.img} /></span>
                    ))}
                </div>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="banner-content">
                                <Titlespan
                                    Class="banner-main-title"
                                    Label="NÃO FIQUE PARA TRÁS,"
                                    Name="AUTOMATIZE SEU ATENDIMENTO"
                                />
                                <Description
                                    Class="banner-dec"
                                    Name="Mais vendas, menos custos e maior satisfação dos seus clientes"
                                />
                                <div className="banner-btn-wrapper">
                                <a href="#contact">
                                    <Button
                                        Class="button1 button4 btn"
                                        Name="AUTOMATIZAR"
                                        Title="gradient-color"
                                        BtnIcon="btn-icon gradient-color1"
                                                                           
                                    />
                                </a>
                                </div>
                            </div>
                            
                        </Col>
                        <Col md={6}>
                            <div className="banner-image">
                                <Image
                                    Path={BannerImg1}
                                    Class="banner-img"
                                />
                            </div>
                        </Col>
                        
                    </Row>
                    
                </Container>
            </div>
        </section>
    );
}

export default Banner;
