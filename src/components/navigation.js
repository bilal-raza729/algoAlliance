import {Navbar, Nav, Image, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../image/logo.PNG';
import '../css/navigation.css';

const Navigation = ()=>{
  return(
    <div>
          <Navbar className="tabs-style" style={{height:"50px"}}>
            <Container>
            <Navbar.Brand>
                <Link to='/'><img src={logo} /></Link>
            </Navbar.Brand>
            <Nav className="me-auto" style={{marginLeft:'30px'}}>
              <Link to="/" className="element-style" style={{color:"white", marginLeft:"300px"}} >Home</Link>
              <Link to="/strength" className="element-style" style={{color:"white"}}>Strength</Link>
              <Link to="/partner" className="element-style" style={{color:"white"}}>Partner</Link>
              <Link to="/news" className="element-style" style={{color:"white"}}>News</Link>
            </Nav>
            </Container>
          </Navbar>
    </div>


  )
}
export default Navigation;