import React, { useContext } from "react";
// import Select from "react-select";
import styles from "../../styles/result.module.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { AwesomeButton } from "react-awesome-button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from "../../utils/data"  
import { useRouter } from "next/router";
import { Store } from "../../utils/Store";
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import axios from "axios"
import Cookies from "js-cookie";

export default function ResultSearch() {
  const {    handleSubmit,control,formState: { errors }, } = useForm();
  const router = useRouter();
  const { redirect } = router.query; // login?redirect=/shipping
  const { state, dispatch } = useContext(Store);
  
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  // state all form data 
  const [searchData, setSearchData] = React.useState({});

  // get all courses and sessions 
  const {courses, sessions} = data ;

  // handle change  form data and set 
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchData({
      ...searchData,
      [event.target.name]: value
    });
  };

  // submit value api 
  const submitHandler = async () => {
    closeSnackbar();
    try {
      const  {data}  = await axios.post('/api/results',searchData);
      if(data){
        dispatch({ type: 'USER_RESULT', payload: data});
        Cookies.set('result', data);
        router.push(redirect || 'result/page');
      }else{
        enqueueSnackbar(
          "তুমার তথ্যটি ভুল, আবার চেষ্টা কর   ",
         { variant: 'error' }
       );
      }
      
      
      
    } catch (err) {
      enqueueSnackbar(
         err.message,
        { variant: 'error' }
      );
    }
  };


  return (
    <>
      <Row>
        <Col lg={6} className="m-auto">
          <div className={styles.formBox}>
            <h3>পরিক্ষার রেসাল্ট </h3>
            <Form  onSubmit={handleSubmit(submitHandler)}>
              <Form.Group className="mb-3">
                <Form.Label>কোর্স  :</Form.Label>
                <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">কোর্স</InputLabel>
        <Select   
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchData.course}
          label="Course "
          name="course"
          onChange={handleChange}
        >
          {courses.map(course => (
            <MenuItem value={course.name}>{course.name}</MenuItem>
          ))}
          
        </Select>

      </FormControl>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>সেশন : </Form.Label>
                <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">সেশন</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchData.session}
          label="session"
          name="session"
          onChange={handleChange}
        >
         {sessions.map(session => (
            <MenuItem value={session.name}>{session.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>রোল নাম্বার : </Form.Label>
                <Form.Control type="text" placeholder="Roll Number " name="roll" onChange={handleChange} />
              </Form.Group>
              <Button variant="light" type="submit">
                রেসাল্ট
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}
