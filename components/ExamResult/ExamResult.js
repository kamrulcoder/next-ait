import { style } from "@mui/system";
import React from "react";
import { Row, Col ,Table} from "react-bootstrap";
import styles from "./examResult.module.css"
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';  

export default function () {

  const   printDocument = () =>  {  
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf");  
      });  
  }  
  return (
    <>
      <Row>
        <Col lg={8} className="m-auto">
          <div className={styles.resultTable}  id="pdfdiv">
            <h4>Result Publication </h4>
            <Table bordered  >
              
              <tbody>
                <tr>
                  <td>Exam year </td>
                  <td>2020</td>
                </tr>
                <tr>
                  <td>Technology Name </td>
                  <td>Computer Office Application </td>
                </tr>
                <tr>
                  <td>Registration Number  </td>
                  <td>30008365444 </td>
                </tr>
                <tr>
                  <td>Session  </td>
                  <td>2021</td>
                </tr>
                <tr>
                  <td> Name </td>
                  <td>Rabiul Islam  </td>
                </tr>
                <tr>
                  <td>Father,s  Name </td>
                  <td>Md Noyon Mia  </td>
                </tr>
                <tr>
                  <td>Insitute  </td>
                  <td>Advance It Institute   </td>
                </tr>
               
               <tr>
                 <td>Result   </td>
                 <td>Passed    </td>
               </tr>
               
               <tr>
                 <td>CGPA/Division/ Grade    </td>
                 <td>Passed    </td>
               </tr>
               
              </tbody>
            </Table>
            
            
          </div>
          <div className={styles.download}><button onClick={printDocument} >Download </button></div>
        </Col>
      </Row>
    </>
  );
}
