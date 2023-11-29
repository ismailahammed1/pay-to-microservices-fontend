import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Orders.scss";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const response = await newRequest.get(`/orders`)
        console.log('Orders Data:', response);
        return response.data;
      
    },
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/singel/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.get(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((order) => (
                <tr key={order._id}>
                  <td>
                    <img
                      src={order.img}
                      alt=""
                      className="image"
                    />
                  </td>
                  <td>{order.title}</td>
                  <td>
                    {order.price}
                    <sup>99</sup>
                  </td>
                  <td>
                    <img
                      src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700366595/img.icons8_ehzdx9.png"
                      alt=""
                      className="message"
                      onClick={() => handleContact(order)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
