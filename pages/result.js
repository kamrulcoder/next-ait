import React from "react";
import Layout from "../components/Layout";

import ExamResult from "../components/ExamResult/ExamResult";
import ResultSearch from "../components/ExamResult/ResultSearch";

export default function resulet() {
 

  return (
    <>
    <Layout>
      
      <div>
        <ResultSearch/>
      <ExamResult/>
        
      </div>
    </Layout>
    </>
  );
}
