import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class Footer extends Component{

    render(){
        return (
        <>

        <Navbar fixed="bottom" bg="dark" variant="dark"> 
          <Container>
          Footer
          </Container>
        </Navbar>
        </>
        );
    }
}


export {Footer};