import { Component } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

class TeacherDetailsView extends Component {
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
    let idTeacher = this.state.URL.split('/');
    console.log(idTeacher[4]);

    fetch(`http://localhost:3001/teacher/${idTeacher[4]}/subjects`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      let arrayAffichage = []
      result.map(actualteacher => {
        
        arrayAffichage.push(<div>cours : {actualteacher.name} {actualteacher.lastname} </div>)
        
      })
      this.setState({ productList: result, listAffichage: arrayAffichage, id: idTeacher[4]});
    });

    fetch(`http://localhost:3001/teacher/${idTeacher[4]}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      let nomSection = []
      result.map(actualteacher => {
        
        nomSection.push(<div>name : {actualteacher.lastname}  {actualteacher.lastname}  </div>)
        
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

export { TeacherDetailsView};