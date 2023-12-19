import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import newRequest from "../../utils/newRequest";
import "./Pay.css";
const stripePromise = loadStripe("pk_test_51OJrbOL8KvISqLF2oY50i4nAdRP6tiMYoYZkNH8BQkTupb3etsof3ayetHCRaMYIRtxHRUmv5eRO9XqzsQw6Vsv7007GC23KaD");
const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");
    const {id}=useParams();
    useEffect(()=>{
        const makeRequest=async()=>{
            try {
                const res=await newRequest.post(`/orders/create-payment-intent/${id}`)
                setClientSecret(res.data.clientSecret)
            } catch (error) {
                console.log(error);
            }
        }
        makeRequest()
    },[])
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };
  return (
    <div>  {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm/>
        </Elements>
      )}</div>
  )
}

export default Pay