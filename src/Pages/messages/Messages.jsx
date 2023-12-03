import moment from "moment/moment";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Messages.scss";
const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      const response = await newRequest.get(`/conversations`);
      console.log("Orders Data:", response);
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  
  const handleRead = (id) => {
    mutation.mutate({ id }); // Pass the ID as part of the message object
  };
  
  
  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
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
                <tr
                  key={`${c.id}-${c.someOtherUniqueProperty}`}
                  className={
                    (((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readBySeller)) &&
                      "active") ||
                    ""
                  }
                >
                  <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                  <td>
                    <Link to={`/message/${c.id}`} className="link">
                      {c.lastMessage?.substring(0, 50)}...
                    </Link>
                  </td>
                  <td>{moment(c.updateAt).fromNow()}</td>
                  <td>
                    {((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readBySeller)) && (
                        <button onClick={() => handleRead(c.id)}>Mark as Read</button>

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
