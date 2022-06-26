import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import ExamResult from "../../components/ExamResult/ExamResult"
import { Store } from "../../utils/Store";
import { useRouter } from "next/router";


export default function page() { 

  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const {result  } = state;


  useEffect(() => {
    if (result?.name ==  null ) {
      router.push('/result');
    }
  }, []);
  return (
    <>
    <Layout>
      
      <div>
      <ExamResult/>
        
      </div>
    </Layout>
    </>
  );
}
