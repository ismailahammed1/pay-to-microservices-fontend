import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla voluptatum incidunt quam hic sed possimus deserunt eum rem, blanditiis impedit ex modi libero quos dolorem maxime, saepe tenetur doloremque et?`;
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>

            <th>Last Message</th>
            <th>Data</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Charly Sharp</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 50)}...
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Charly Sharp</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 50)}...
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Charly Sharp</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 50)}...
              </Link>
            </td>
            <td>2 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Charly Sharp</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 50)}...
              </Link>
            </td>
            <td>3 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Charly Sharp</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 50)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="">
            <td>Charly Sharp</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 50)}...
              </Link>
            </td>
            <td>2 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
