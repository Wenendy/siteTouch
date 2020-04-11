import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { faPaperPlane, faMapMarkerAlt, faEnvelopeOpen, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Title, Description } from '../../components/common/title/index';
import Icon from '../../components/common/icon/index';
import Image from '../../components/common/image/index';
import logo from '../../public/assets/images/Logo.png';
import InputBox from '../../components/common/input/index';
import { ArrowRightCircle } from 'react-feather';
import './footer.scss';

function Footer() {
    return (
        <div className="footer-wrapper">
            <Container>
                <div className="footer-content-wrapper">
                    <Row>
                        <Col lg={4} sm={6}>
                            <div className="footer-logo-wrapper">
                                <Image Path={logo} Class="footer-logo" />
                                <Description
                                    Class="footer-dec"
                                    Name="A solução que sua empresa precisa com a qualidade que o seu cliente merece. Keep in touch with your customer"
                                />
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="footer-contact-us">
                                <Title Class="footer-title" Name="Contato" />
                                <div className="footer-details-link">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span>
                                                    <Icon icon={faMapMarkerAlt} />
                                                </span>
                                                <Title
                                                    Class="footer-link"
                                                    Name="Osiris de Camargo Street, 100 - São Paulo"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>
                                                    <Icon icon={faEnvelopeOpen} />
                                                </span>
                                                <Title
                                                    Class="footer-link footer-email"
                                                    Name="comercial@touchworks.com.br"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>
                                                    <Icon icon={faPhoneVolume} />
                                                </span>
                                                <Title Class="footer-link" Name="+55 11 94721 - 2865" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} sm={6}>
                            <div className="footer-about-us">
                                <div className="footer-about-outer">
                                    <Title Class="footer-title" Name="Mapa" />
                                    <div className="footer-details-link">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <ArrowRightCircle/>
                                                    <Title
                                                        Class="footer-link footer-arrow"
                                                        Name="Home"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#about">
                                                <ArrowRightCircle/>
                                                    <Title
                                                        Class="footer-link footer-arrow"
                                                        Name="Sobre"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#service">
                                                <ArrowRightCircle/>
                                                    <Title
                                                        Class="footer-link footer-arrow"
                                                        Name="Serviços"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#contact">
                                                <ArrowRightCircle/>
                                                    <Title
                                                        Class="footer-link footer-arrow"
                                                        Name="Contact"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="footer-newsletter">
                                <Title Class="footer-title" Name="Fique por dentro das novidades" />
                                <div className="form-group">
                                    <InputBox
                                        Type="text"
                                        PlaceHolder="Enter email"
                                        Class="input-search"
                                    />
                                    <span className="search-icon gradient-color">
                                        <Icon icon={faPaperPlane} />
                                    </span>
                                </div>
                                <Title Class="footer-social-title" Name="Segue lá" />
                                <ul className="social-wrapper">
                                    <li>
                                        <a href="/index">
                                            <span>
                                                <Icon icon={faFacebookSquare} />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/index">
                                            <span>
                                                <Icon icon={faTwitterSquare} />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/touchworks-consulting" >
                                            <span>
                                                <Icon icon={faLinkedin} />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>

    );
}

export default Footer;