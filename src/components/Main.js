import { Component } from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { HomeView, LoginView} from "./pages";
import { SectionView, TeachersView, CreatePersonView, TeacherDetailsView, SectionDetailsView } from "./pages";



class Main extends Component {
  
  render() {

    return (
      <>
        <Container>
          <Switch>
            <Route exact path="/" component={HomeView} />

      
              
            <Route path="/Login" component={LoginView} />
            <Route exact path="/Sections" component={SectionView} />
            <Route path='/Sections/:id' component={SectionDetailsView} />

            <Route exact path="/Teachers" component={TeachersView}/>
            <Route path="/CreatePersonne" component={CreatePersonView}/>
            <Route path="/Teacher/:id" component={TeacherDetailsView}/>
            {/* <Route path="/SectionDetails" component={SectionDetailsView}/> */}
    
       
        


     

          
          

          </Switch>
        </Container>
      </>
    );
  }
}

export { Main };
