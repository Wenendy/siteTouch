import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/common/title/index';
import BlogData from '../../data/blog/index';
import FontAwesomeIcon from '../../components/common/icon';
import './blog.scss';

function Blog() {
    return (
        <section className="blog-wrapper" id="blog">
            <Container>
                <div className="main-title-wrapper">
                    <Subtitle
                        Class="site-subtitle"
                        Name="SPEECH ANALYTICS"
                    />
                    <Titlespan2
                        Class="sitemain-subtitle"
                        Name="I.A. & Machine Learning"
                        Label=""
                    />

                    <Description
                        Class="site-dec"
                        Name="Ninguém conhece mais do seu negócio do que o seu cliente, por isso, a análise das chamadas pode se tornar seu maior aliado na busca da satisfação, perfil de clientes e desempenho de agentes. I.A. & Machine Learning te auxiliam no processamento desses dados e construção de modelos precisos, criando oportunidades para alavancar ganhos e reduzir custos.                        "
                    />
                </div>
                <Row>
                    {BlogData.map((data, i) => (
                        <Col lg={4} sm={6} key={data.id} className={`blog-${i}`}>
                            <div className="blog-content">
                                <div className="blog-first-block">
                                    <img src={data.img} alt="" title="" />
                                </div>
                                <div className="blog-second-block">
                                    <div className="blog-left-content">
                                        <div className="blog-icon">
                                            <span><FontAwesomeIcon icon={data.Icon} /></span>
                                        </div>
                                    </div>
                                    <div className="blog-right-content">
                                        <Title
                                            Class="blog-title"
                                            Name={data.title}
                                        />
                                        <Description
                                            Class="blog-dec"
                                            Name={data.content}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Blog;
