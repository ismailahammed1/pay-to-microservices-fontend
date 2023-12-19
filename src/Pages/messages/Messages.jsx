import moment from "moment/moment";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Messages.scss";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        console.log("API Response:", res.data);
        return Array.isArray(res.data) ? res.data : [res.data]; // Convert to array if it's not already
      }),
  });

  const mutation = useMutation(
    (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["conversations"]);
      },
    }
  );

  const handleRead = (id) => {
    console.log("Button Clicked with ID:", id); 
   
    mutation.mutate(id);
  };
  

  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        `error: ${error.message || "An error occurred"}`
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Data</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {data.map((c) => (
  console.log('Mapping Conversation:', c),
  console.log('All Conversations:', data),
  <tr
    key={`${c._id}-${c.someOtherUniqueProperty}`}
    className={
      (((currentUser.isSeller && !c.readBySeller) ||
        (!currentUser.isSeller && !c.readBySeller)) &&
        "active") ||
      ""
    }
  >
    <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
    <td>
      <Link to={`/message/${c._id}`} className="link">
        {c.lastMessage?.substring(0, 50)} more...
      </Link>
    </td>
    <td>{moment(c.updateAt).fromNow()}</td>
    <td>
      {((currentUser.isSeller && !c.readBySeller) ||
        (!currentUser.isSeller && !c.readBySeller)) && (
          <button onClick={() => handleRead(c._id)}>
          Mark as Read
        </button>
      )}
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

export default Messages;
