import React from "react";
import Select from "react-select";
import styles from "../../styles/result.module.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { AwesomeButton } from "react-awesome-button";
export default function ResultSearch() {
    const options = [
        { value: "choco", label: "Chocolate" },
        { value: "stra", label: "Strawberry" },
        { value: "vini", label: "Vanilla" },
      ];
  return (
    <>
      <Row>
        <Col lg={6} className="m-auto">
          <div className={styles.formBox}>
            <h3>পরিক্ষার রেসাল্ট </h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>পরিক্ষার ধরণ :</Form.Label>
                <Select options={options} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>পরিক্ষার সন : </Form.Label>
                <Select options={options} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>রোল নাম্বার : </Form.Label>
                <Form.Control type="text" placeholder="Roll Number " />
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
