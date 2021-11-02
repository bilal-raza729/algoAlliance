import {Col, Row, Image, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import foo from '../image/foo.png';
import { VscMail } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { BsHeadset } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";

function Footer(){
    return(
        <div style={{backgroundColor: 'black'}}>
            <Row>
                <Col lg={2}></Col>
                <Col lg={3}  style={{textAlign:'left'}}>
                    <div>
                        <Image src={foo} style={{height:'75px', width:'240px',marginTop:'-10px'}}/>
                    </div>
                    <div className="copyright-styling" style={{color:'#ABABB0'}}>
                    Algo Alliance © 2021. Support@algo <br/>All right reserved. Design by Ftribe
                    </div>
                </Col>
                <Col lg={3} style={{textAlign:'left'}}>
                    <div className="termAndCondition">Terms and condition</div>
                    <div className="termAndCondition">Privacy Policy</div>
                    <div className="termAndCondition">Documentations</div>
                    <div className="termAndCondition">Audits</div>
                </Col>

                <Col lg={3}>
                    <div className="address">
                        <VscMail 
                        style={{ height: 20, width: 20, color: "white" }}
                        />
                        <p className="address-text">inquiries@dso.ae</p>
                    </div>

                    <div className="address">
                        <IoLocationOutline 
                        style={{ height: 20, width: 20, color: "white" }}
                        />
                        <p className="address-text">Dubai Silicon Oasis, P.O.BOX: 6009,U.A.E</p>
                    </div>

                    <div className="address">
                        <BsHeadset 
                        style={{ height: 20, width: 20, color: "white" }}
                        />
                        <p className="address-text">(+071) 4 501 5000 <br/> (+071) 4 501 9230</p>
                    </div>
                
                </Col>
            </Row>
            <br/><br/><br/><br/>
            <Row>
                <Col lg={2}></Col>
                <Col lg={10} style={{textAlign:'left'}}>
                    <Button className="twt-btn">
                    <FiTwitter style={{ height: 20, width: 20, color: "#36CD77",marginRight:'7px'}} />
                    Twitter</Button>
                    <Button className="med-btn">
                    <BsMedium style={{ height: 20, width: 20, color: "#36CD77",marginRight:'7px' }} />
                    Medium</Button>
                </Col>
            </Row>
            <br/><br/><br/>

        </div>
    )
}
export default Footer;