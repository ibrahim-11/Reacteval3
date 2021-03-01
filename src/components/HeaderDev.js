import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Protected } from ".";
// import UserContext from '../contexts/UserContext'

class HeaderDev extends Component {

  

  render() {
    return (
      <>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link as="div">
      <Link to="/">Home</Link>
      </Nav.Link>
      <Nav.Link as="div">
      <Link to="/Login">Login</Link>
      </Nav.Link>
      <Nav.Link as="div">
      <Link to="/Sections">Sections</Link>
      </Nav.Link>
      <Nav.Link as="div">
           <Link to="/Teachers">Teachers</Link>
           </Nav.Link>
           <Nav.Link as="div">
           <Link to="/CreatePersonne">CreatePersonne</Link>
           </Nav.Link>
           <Nav.Link as="div">
           <Link to="/TeacherDetails">TeacherDetails</Link>
           </Nav.Link>
           <Nav.Link as="div">
           <Link to="/TeacherDetails">TeacherDetails</Link>
           </Nav.Link>
           {/* <Nav.Link as="div">
           <Link to="/SectionDetails">SectionDe</Link>
           </Nav.Link> */}


      
    </Nav>
    
  </Navbar>
      </>
    );
  }
}

export { HeaderDev };
