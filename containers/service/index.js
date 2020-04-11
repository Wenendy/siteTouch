import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/common/title/index';
import Button from '../../components/common/button';
import { Servicedata, Servicedata1 } from '../../data/service/index';
import FontAwesomeIcon from '../../components/common/icon';
import '../service/service.scss';

function Service() {
    return (
        <section className="service-wrapper" id="service">
            <Container>
                <Row>
                    <Col lg={5} md={4}>
                        <div className="service-content-1 main-title-wrapper">
                            <Titlespan2
                                Class="sitemain-subtitle"
                                Name="Soluções "
                                Label="Empresariais"
                            />
                            <Title
                                Class="service-title"
                                Name="Nossos Serviços"
                            />
                            <Description
                                Class="service-dec"
                                Name="Nossas soluções vão muito além do que seus olhos podem ver... Temos uma vasta experiência em customer success, user experience, inovação tecnológica, evolução de produtos, inteligência artificial, machine learning e muito mais."
                            />
                            <a href="#contact">
                                <Button
                                    Class="button1 btn button2 gradient-color"
                                    Name="Descubra"
                                    BtnIcon="btn-icon"
                                />
                            </a>
                        </div>
                    </Col>
                    <Col lg={7} md={8} className="service-block-content">
                        <Row>
                            <Col sm={6} className="service-block1">
                                {Servicedata.map((data, i) => (
                                    <div className={`service-${i} service-content`} key={data.id}>
                                        <div className="service-icon">
                                            <span><FontAwesomeIcon icon={data.Icon} /></span>
                                        </div>
                                        <div className="service-content-dec">
                                            <Title Class="service-title" Name={data.title} />
                                            <Description Class="service-dec-content" Name={data.content} />
                                        </div>
                                    </div>
                                ))}
                            </Col>
                            <Col sm={6} className="service-block2">
                                {Servicedata1.map((data, i) => (
                                    <div className={`service-${i} service-content`} key={data.id}>
                                        <div className="service-icon">
                                            <span><FontAwesomeIcon icon={data.Icon} /></span>
                                        </div>
                                        <div className="service-content-dec">
                                            <Title Class="service-title" Name={data.title} />
                                            <Description Class="service-dec-content" Name={data.content} />
                                        </div>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Service;
