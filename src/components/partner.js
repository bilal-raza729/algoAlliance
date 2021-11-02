import {Row, Col, Image} from 'react-bootstrap';
import ftribe from '../image/Ftribe.png'
import quanta from '../image/Quanta.png'
import giga from '../image/gigasourse.png'
import nethru from '../image/nethru.png'
import nether from '../image/nether.png'
import diagit from '../image/Digit.png'
import star2 from '../image/star2.png';

function Partner(){
    return(
        <div style={{backgroundColor:"black"}}>
            <div className="partner-heading">
            <p>Meet Our Partners</p>
            </div>
                <div className="partner-star-div">
                    <img src={star2} className="partner-star" />
                </div>
            <br/>
            <div >
                <Row>
                    <Col lg={2}></Col>

                    <Col lg={2}>
                        <Image src={ftribe} style={{height:'40px', width:'80px',
                        position:'absolute', left:'270px',zIndex:'2'}}/>
                    </Col>
                    <Col lg={2}>
                        <Image src={quanta} style={{height:'40px', width:'120px'}}/>
                    </Col>
                    <Col lg={2}>
                        <Image src={giga} style={{height:'40px', width:'120px'}}/>
                    </Col>
                    <Col lg={2}>
                        <Image src={nethru} style={{height:'40px', width:'120px'}}/>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <br/><br/><br/>

                <Row>
                    <Col lg={2}></Col>

                    <Col lg={2}>
                        <Image src={nether} style={{height:'40px', width:'80px'}}/>
                    </Col>
                    <Col lg={2}>
                        <Image src={giga} style={{height:'40px', width:'120px'}}/>
                    </Col>
                    <Col lg={2}>
                        <Image src={nethru} style={{height:'40px', width:'120px'}}/>
                    </Col>
                    <Col lg={2}>
                        <Image src={diagit} style={{height:'40px', width:'120px'}}/>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <br/><br/><br/>

                <Row>
                    <Col lg={2}></Col>

                    <Col lg={2}>
                        <Image src={ftribe} style={{height:'40px', width:'80px'}}/>
                    </Col>
                    <Col lg={2}>
                        <Image src={quanta} style={{height:'40px', width:'120px'}}/>
                    </Col>
                    <Col lg={2}>
                        <Image src={giga} style={{height:'40px', width:'120px'}}/>
                    </Col>
                    <Col lg={2}>
                        <Image src={nethru} style={{height:'40px', width:'120px'}}/>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <br/><br/><br/><br/><br/><br/><br/><br/>

            </div>
            

        </div>
        
    )
}
export default Partner;