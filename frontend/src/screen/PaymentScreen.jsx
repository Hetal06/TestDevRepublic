import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import FormContainer from "../component/FormContainer";
import CheckoutSteps from "../component/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePayementMethod } from "../slices/cartSlice";

function PaymentScreen() {
  const [paypalMethod, setPaypalMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingAddress } = useSelector((state) => state.cart);
  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayementMethod(paypalMethod));
    navigate("/placeoder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="Paypal or Credit Card"
              id="Paypal"
              name="paypalMethod"
              value={"Paypal"}
              checked
              onChange={(e) => setPaypalMethod(e.target.value)}></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
