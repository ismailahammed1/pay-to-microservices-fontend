import React from "react";
import "./Orders.scss";
const Orders = () => {
  const currentUser={
    id:1,
    username:"Anna",
    isSeller:true,
  }
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
                
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller? "Buyer":"Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
            <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700061538/images_xtlbvv.jpg" alt="" className="image" />
            </td>
            <td>Stunning Concept car</td>
            <td>
              54<sup>99</sup>
            </td>
            <td>13</td>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700337769/img.icons8_bhwsbu.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700061538/images_xtlbvv.jpg" alt="" className="image" />
            </td>
            <td>car wash</td>
            <td>
              120<sup>99</sup>
            </td>
            <td>41</td>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700337769/img.icons8_bhwsbu.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700061538/images_xtlbvv.jpg" alt="" className="image" />
            </td>
            <td>car repair </td>
            <td>
              79<sup>99</sup>
            </td>
            <td>55</td>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700337769/img.icons8_bhwsbu.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700061538/images_xtlbvv.jpg" alt="" className="image" />
            </td>
            <td>Install and high quality service</td>
            <td>
              119.
              <sup>99</sup>
            </td>
            <td>29</td>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700337769/img.icons8_bhwsbu.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700061538/images_xtlbvv.jpg" alt="" className="image" />
            </td>
            <td>Orginal Authentic Product Install</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>34</td>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700337769/img.icons8_bhwsbu.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700061538/images_xtlbvv.jpg" alt="" className="image" />
            </td>
            <td>Full car wash And service</td>
            <td>
              110.
              <sup>99</sup>
            </td>
            <td>16</td>
            <td>
              <img src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700337769/img.icons8_bhwsbu.png" alt="" className="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
