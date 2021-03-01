import { Component } from "react";
import { Link } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

class SectionView extends Component {
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
    fetch(`http://localhost:3001/section`)
      .then((response) => response.json())
      .then((result) => {
        let arrayAffichage = []
        result.map(actualSection => {
          // let link = "/Sections/"+actualSection.Id_section
          arrayAffichage.push(<div>name : {actualSection.name} {actualSection.level} <Link key={actualSection.id} to={ "/Sections/"+actualSection.id}>Détail</Link></div>)
          
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
        <div>liste des section</div>
        <div>{listAffichage}</div>
      </>
    )
  }
}

export { SectionView };
