import React, { useState, useEffect } from "react";
import { Container, Table, Row } from "react-bootstrap";
import API from "../utils/API";

const Responses = () => {
  const [guest, setGuest] = useState();

  let countYes = 0;
  let countNo = 0;

  function getGuest() {
    API.findAll().then((res) => {
      setGuest(res.data);
    });
  }

  useEffect(() => {
    getGuest();
  }, []);

  return (
    <Container>
      {guest ? (
        <>
          <Row
            style={{
              fontSize: "4rem",
              color: "white",
              justifyContent: "center",
            }}
          >
            YES
          </Row>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th style={{ fontSize: "1.8rem" }}>#</th>
                <th style={{ fontSize: "1.8rem" }}>Name</th>
                <th style={{ fontSize: "1.8rem" }}>Attendence</th>
              </tr>
            </thead>
            <tbody>
              {guest.map((res) => {
                if (res.attendence === "Yes") {
                  countYes++;
                }
                return res.attendence === "Yes" ? (
                  <tr key={res._id}>
                    <td style={{ fontSize: "1.8rem" }}>{countYes}</td>
                    <td style={{ fontSize: "1.8rem" }}>{res.name}</td>
                    <td style={{ fontSize: "1.8rem" }}>{res.attendence}</td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </Table>
          <Row
            style={{
              fontSize: "4rem",
              color: "white",
              justifyContent: "center",
            }}
          >
            NO
          </Row>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th style={{ fontSize: "1.8rem" }}>#</th>
                <th style={{ fontSize: "1.8rem" }}>Name</th>
                <th style={{ fontSize: "1.8rem" }}>Attendence</th>
              </tr>
            </thead>
            <tbody>
              {guest.map((res, index) => {
                if (res.attendence === "No") {
                  countNo++;
                }
                return res.attendence === "No" ? (
                  <tr key={res._id}>
                    <td style={{ fontSize: "1.8rem" }}>{countNo}</td>
                    <td style={{ fontSize: "1.8rem" }}>{res.name}</td>
                    <td style={{ fontSize: "1.8rem" }}>{res.attendence}</td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Responses;
