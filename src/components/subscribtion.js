import {Row, Col, InputGroup, FormControl, Image} from 'react-bootstrap';
import '../css/navigation.css';
import arrow from '../image/arrow.png';
function Subs(){
    return(
        <div style= {{backgroundColor:'Black'}}>
            <Row>
                <Col lg={2}></Col>
                <Col lg={4}>
                    <div>
                    <p className="subs-heading">Recieve Transmissions</p>
                    </div>
                    <div>
                    <p className="subs-para">Unsubscribe at any time</p>
                    </div>
                
                </Col>
                <Col lg={4}>
                    <InputGroup className="box-styling">
                        <FormControl className="form-left-text" label="email" placeholder="Your Email" />
                        <InputGroup.Text className="form-right-text">
                            <Image src={arrow} style={{height:'25px', width:'25px'}} />
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <br/><br/><br/>
            <hr style={{color:'white', marginLeft:'50px',marginRight:'50px'}}/>
            
            <br/><br/>
        </div>
    )
}
export default Subs;