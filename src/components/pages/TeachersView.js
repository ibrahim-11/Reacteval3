import { Component } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { Link } from "react-router-dom";

class TeachersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      listAffichage: []
    };
  }
  componentDidMount() {
    const { listAffichage, productList } = this.state
    //const table = JSON.stringify({ "table" : "product"});
    let nomTable = "product"
    // fetch(`http://apiindex.loc/index.php?table=${nomTable}`)
    fetch(`http://localhost:3001/teacher`)
      .then((response) => response.json())
      .then((result) => {
        let arrayAffichage = []
        result.map(actualTeacher => {
          let link = "/teacher/"+actualTeacher.Id_teacher
          arrayAffichage.push(<div>firstname : {actualTeacher.firstname} lastname : {actualTeacher.lastname} <Link to={link}>Détail</Link></div>)
          
        })
        this.setState({ productList: result, listAffichage: arrayAffichage});
      });
    //const data = JSON.parse(response);
  }
  render() {
    const { listAffichage } = this.state
    console.log(listAffichage)
    return (
      <>
        <div>liste des Professeurs</div>
        <div>{listAffichage}</div>
      </>
    )
  }
}

export { TeachersView };