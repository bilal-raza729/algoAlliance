import '../App.css';
import {Row, Col} from 'react-bootstrap';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import n1 from '../image/n1.png';
import n2 from '../image/n2.png';
import n3 from '../image/n3.png';
import newsEffect from '../image/newsEffect.png';
import newsEffect1 from '../image/newsEffect1.png';

function News(){
    return(
        <div style={{backgroundColor:'black',position:'relative',zIndex:'2'}}>
            <div className="new-heading-effect">
                {/* <img src={newsEffect1} className="news-image1" /> */}
                <img src={newsEffect} className="news-image" />
            </div>
            <p className="news-heading">News</p>
            <br/><br/>
            <div>
                <Row>
                    <Col lg={2}>1</Col>

                    <Col lg={3}>
                        <Card className="n1-styling" style={{borderRadius:'10px',}} sx={{ maxWidth: 260 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="250"
                                image={n1}
                                alt="green iguana"
                                />
                                <CardContent className="text-styling">
                                <Typography>Open Box, Got Many Object </Typography><br/>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="n2-styling" style={{borderRadius:'10px'}} sx={{ maxWidth: 260 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="250"
                                image={n2}
                                alt="green iguana"
                                />
                                <CardContent className="text-styling">
                                <Typography>What Are NFT Games and How Do They Work</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col lg={3}>
                    <Card className="n3-styling" style={{borderRadius:'10px'}} sx={{ maxWidth: 260 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="250"
                                image={n3}
                                alt="green iguana"
                                />
                                <CardContent className="text-styling">
                                <Typography >Buy and Sell Item On Marketplace</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <br/><br/><br/><br/><br/><br/>
            </div> 

        </div>
    )
}
export default News;