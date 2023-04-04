import { useState } from "react";
// import Accordion from 'react-bootstrap/Accordion';
import { Accordion } from "react-bootstrap";
import CreateButton from "./button";

function AllCollapseExample() {
    let mealTypes = ["Lunch", "Dinner"];
    let intolerances = ["Dairy", "Egg"];
    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Meal types</Accordion.Header>
          <Accordion.Body>
            <CreateButton arrayInput={mealTypes}></CreateButton>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Intolerances</Accordion.Header>
          <Accordion.Body>
          <CreateButton arrayInput={intolerances}></CreateButton>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
  
  export default AllCollapseExample;