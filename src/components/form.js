import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import DatePicker12 from "react-date-picker";
const FormData = () => {
  const [state, setState] = useState(new Date());
  const handleChange = (date) => {
    setState(date);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Enter Pin</Form.Label>
        <Form.Control type="text" placeholder="Enter Pin" />
      </Form.Group>

      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row style={{ flex: 1, justifyContent: "space-around" }}>
        <Form.Group style={{ width: "45%" }} controlId="formGridCity">
          <Form.Control as="select" defaultValue="Choose...">
            <option>BirthDay</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group style={{ width: "45%" }} controlId="formGridState">
          <Form.Control as="select" defaultValue="Choose...">
            <option>AGE Range</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridState">
        <Form.Control as="select" defaultValue="PROVIENCE/TERRITORY">
          <option>PROVIENCE/TERRITORY</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>
      {/* // IS YOUR PREFFRED FLAVOUR */}
      {/* PROVIENCE/TERRITORY */}
      <Form.Group controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" defaultValue="WHAT IS YOUR PREFFRED FLAVOUR">
          <option>WHAT IS YOUR PREFFRED FLAVOUR</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormData;
