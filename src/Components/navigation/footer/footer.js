import React from 'react';
import './footer.css';
import { Container, Col, Row } from 'reactstrap';
import fb from '../../../Assests/icons/footer/fb.png';
import tweet from '../../../Assests/icons/footer/tweet.png';
const footer = () => {
    return (
        <footer id="footer" className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="storage">
                            <a href='/'>About Us</a>
                            <a href="/">Blog</a>
                            <a href="/">Pages</a>
                            <a href="/">Map</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="storage2">
                            <a href="/" ><img src={fb} alt="Icon" /></a>
                            <a href="/" ><img src={tweet} alt="Icon" /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </footer>
    );
}
export default footer;