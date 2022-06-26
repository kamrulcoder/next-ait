import { style } from "@mui/system";
import React, { useContext } from "react";
import { Row, Col ,Table} from "react-bootstrap";
import styles from "./examResult.module.css"
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';
import { Store } from "../../utils/Store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function ExamResult () {
  
  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  console.log(state.result)

  const {course,roll, name, father, mother, mobile, result , session, certificate_issue_date } = state?.result || {};
  

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


  const refreshResult = () => {
    dispatch({ type: "USER_RESULT_REMOVE" });
    Cookies.remove("result");
    router.push("/result");
  };
  return (
    <>
      <Row>
        <Col lg={8} className="m-auto">
          <div className={styles.resultTable}  id="pdfdiv">
            <h4>Result Publication </h4>
            <Table bordered  >
              
              <tbody>
                <tr>
                  <td>Course Name </td>
                  <td>{course}</td>
                </tr>
                <tr>
                  <td> Roll Number  </td>
                  <td>{roll} </td>
                </tr>
                <tr>
                  <td>Session  </td>
                  <td>{session}</td>
                </tr>
                <tr>
                  <td> Name </td>
                  <td>{name}  </td>
                </tr>
                <tr>
                  <td>Father,s  Name </td>
                  <td>{father} </td>
                </tr>
                <tr>
                  <td>Mother,s  Name </td>
                  <td> {mother} </td>
                </tr>
                <tr>
                  <td>Mobile No:  </td>
                  <td> {mobile}</td>
                </tr>
                              
               <tr>
                 <td>Result   </td>
                 <td>{result}    </td>
               </tr>       
               <tr>
                 <td>Certificate Issue Date    </td>
                 <td>{certificate_issue_date}    </td>
               </tr>
               
              
               
              </tbody>
            </Table>
            
            
          </div>
          <div className={styles.download}>
          <button   onClick={refreshResult}>Again Search  </button>
            <button onClick={printDocument} >Download </button>
            </div>
        </Col>
      </Row>
    </>
  );
}
