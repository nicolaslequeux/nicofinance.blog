import React from "react"
import { Container, Button } from "react-bootstrap"

import XLSX from "xlsx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import imgTable from "../images/table-to-column/table.png"

export default () => {
  const fileUploadHandler = event => {
    let selectedFile = event.target.files[0]
    let fileReader = new FileReader()

    fileReader.onload = event => {
      let data = event.target.result
      let workbook = XLSX.read(data, { type: "binary" })

      workbook.SheetNames.forEach(sheet => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        )

        rowObject.forEach(year => {
          // get the value for each key
          Object.values(year).forEach(data => {
            // remove index[0] which holds the year
            if (data !== Object.values(year)[0]) {
              document
                .getElementById("jsonData")
                .insertAdjacentHTML(
                  "beforebegin",
                  '<p style="margin:0;padding:0;">' + data + "</p>"
                )
            }
          })
        })
      })
    }
    fileReader.readAsBinaryString(selectedFile)
  }

  return (
    <Layout>
      <SEO title="Convertir une table en colonne" />

      <Container style={{ maxWidth: "700px", margin: "auto" }}>
        <h2 className="text-center pt-4">Utilitaire</h2>
        <p className="text-center">
          Transformer des données sous forme de table en colonne
        </p>

        <p className="text-center font-italic font-weight-light">
          (Les nouvelles données peuvent être "copier-coller" après la conversion)
        </p>

        <p className="text-center font-weight-bold">
          Les formats de fichiers acceptés sont xls, csv... ods
          <br></br>
          La table de départ doit avoir la structure suivante:
        </p>

        <img src={imgTable} alt="Exemple de table" style={{ width: "100%" }} />

        <div style={{ textAlign: "center" }}>
          <br />
          <br />

          <Button variant="outline-info">
            <input type="file" onChange={fileUploadHandler} />
          </Button>

          <br />
          <br />
          <div id="jsonData"></div>
        </div>
      </Container>
    </Layout>
  )
}
