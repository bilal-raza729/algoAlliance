import '../App.css';
import {Row, Col} from 'react-bootstrap'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../css/navigation.css';

import s1 from '../image/s1.png';
import s2 from '../image/s2.png';
import s3 from '../image/s3.png';
import s4 from '../image/s4.png';
import s5 from '../image/s5.png';
import s6 from '../image/s6.png';
import s7 from '../image/s7.png';


function Strength() {
    const myStyle={height: '130px', width: '190px'}
  return (
    <div style={{background:'black'}}>
        <p className="str-heading">Strengths</p>
        <br/><br/>
        <div>
        <Row>
            <Col lg={2}></Col>

            <Col lg={2}>
                <Card sx={{ maxWidth: 245 }} style={{background:'#141415' ,borderRadius:'10px'}}  >
                    <CardActionArea >
                        <CardMedia className="card-media-check"
                        component="img"
                        // height="240"
                        image={s1}
                        style={myStyle}
                        alt="green iguana"
                        />
                        <CardContent style={{textAlign:'left',color:'white' , marginTop:'-15px'}}>
                        <Typography > Ecosystem Design </Typography>
                        <Typography variant="body2" color="#C0C0C4" style={{marginTop:'10px',marginBottom:'-10px'}}>Ftribe</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>    
            </Col>
            <Col lg={2}>
                <Card sx={{ maxWidth: 245 }} style={{background:'#141415' ,borderRadius:'10px'}}>
                    <CardActionArea>
                        <CardMedia className="card-media-check"
                        // className="card-media-check"
                        component="img"
                        image={s2}
                        style={myStyle}
                        alt="green iguana"
                        />
                        <CardContent style={{textAlign:'left',color:'white', marginTop:'-15px'}}>
                        <Typography > Blockchain </Typography>
                        <Typography variant="body2" color="#C0C0C4" style={{marginTop:'10px',marginBottom:'-10px'}}>Quanta</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
            <Col lg={2}>
                <Card sx={{ maxWidth: 245 }} style={{background:'#141415' ,borderRadius:'10px'}}>
                    <CardActionArea>
                        <CardMedia className="card-media-check"
                        component="img"
                        style={myStyle}
                        image={s3}
                        alt="green iguana"
                        />
                        <CardContent style={{textAlign:'left',color:'white', marginTop:'-15px'}}>
                        <Typography >  Syber Security </Typography>
                        <Typography variant="body2" color="#C0C0C4" style={{marginTop:'10px',marginBottom:'-10px'}}>Algo</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
            <Col lg={2}>
                <Card sx={{ maxWidth: 245 }} style={{background:'#141415' ,borderRadius:'10px'}}>
                    <CardActionArea>
                        <CardMedia className="card-media-check"
                        component="img"
                        image={s4}
                        style={myStyle}
                        alt="green iguana"
                        />
                        <CardContent style={{textAlign:'left',color:'white', marginTop:'-15px'}}>
                        <Typography > Platfrom </Typography>
                        <Typography variant="body2" color="#C0C0C4" style={{marginTop:'10px',marginBottom:'-10px'}}>Gigasource</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
            <Col lg={2}></Col>
        </Row>

                        <br/>

        
        <Row>
            <Col lg={3}></Col>

            <Col lg={2}>
                <Card sx={{ maxWidth: 245 }} style={{background:'#141415' ,borderRadius:'10px'}}>
                    <CardActionArea>
                        <CardMedia className="card-media-check"
                        component="img"
                        image={s4}
                        style={myStyle}
                        alt="green iguana"
                        />
                        <CardContent style={{textAlign:'left',color:'white' , marginTop:'-15px'}}>
                        <Typography > Marketing </Typography>
                        <Typography variant="body2" color="#C0C0C4" style={{marginTop:'10px',marginBottom:'-10px'}}>Daigit</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>    
            </Col>
            <Col lg={2}>
                <Card sx={{ maxWidth: 245 }} style={{background:'#141415' ,borderRadius:'10px'}}>
                    <CardActionArea>
                        <CardMedia className="card-media-check"
                        component="img"
                        image={s6}
                        style={myStyle}
                        alt="green iguana"
                        />
                        <CardContent style={{textAlign:'left',color:'white', marginTop:'-15px'}}>
                        <Typography > Gamefi </Typography>
                        <Typography variant="body2" color="#C0C0C4" style={{marginTop:'10px',marginBottom:'-10px'}}>FtribeGame </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
            <Col lg={2}>
                <Card sx={{ maxWidth: 245 }} style={{background:'#141415' ,borderRadius:'10px'}}>
                    <CardActionArea>
                        <CardMedia className="card-media-check"
                        component="img"
                        image={s7}
                        style={myStyle}
                        alt="green iguana"
                        />
                        <CardContent style={{textAlign:'left',color:'white', marginTop:'-15px'}}>
                        <Typography > Data Center </Typography>
                        <Typography variant="body2" color="#C0C0C4" style={{marginTop:'10px',marginBottom:'-10px'}}>Qservi</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
            <Col lg={3}></Col>
        </Row>
        <div>
        <br/><br/><br/><br/><br/><br/><br/>

        </div>
        </div>
    </div>
  );
}

export default Strength;