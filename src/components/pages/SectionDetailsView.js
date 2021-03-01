import { Component } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

class SectionDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: document.location.href,
      id: [],
      productList: [],
      listAffichage: [],
      nomSection: []
    };
  }

  componentDidMount(){
    let idSection = this.state.URL.split('/');
    console.log(idSection);

    fetch(`http://localhost:3001/section/${idSection[4]}/student`)
    .then((response) => response.json())
    .then((result) => {
      let arrayAffichage = []
      result.map(actualSection => {
        
        arrayAffichage.push(<div>name : {actualSection.firstname} {actualSection.lastname} </div>)
        
      })
      this.setState({ productList: result, listAffichage: arrayAffichage, id: idSection[4]});
    });

    fetch(`http://localhost:3001/section/${idSection[4]}`)
    .then((response) => response.json())
    .then((result) => {
      let nomSection = []
      result.map(actualSection => {
        
        nomSection.push(<div>name : {actualSection.name}  </div>)
        
      })
      this.setState({ nomSection:nomSection});
    });

    
  }

  render() {
    const id = this.state.id
    const { listAffichage } = this.state
    const { nomSection } = this.state
    console.log(nomSection)
    return (
      <>
        <div>liste des etudients de la section :  { nomSection[0] }</div>
        <div>{listAffichage}</div>
      </>
    )
  }
}

export { SectionDetailsView };