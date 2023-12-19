import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";

const Message = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages", id],
    queryFn: () => newRequest.get(`/messages/${id}`).then((res) => res.data),
  });

  const [newMessage, setNewMessage] = useState("");

  const mutation = useMutation(
    (message) => newRequest.post(`/messages`, message),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["messages"]);
        setNewMessage(""); // Clear the input after sending the message
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: newMessage,
    });
  };

  if (isLoading) return "Loading...";
  if (error) return "Error: " + error.message;

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to={`/message/${id}`}>Messages</Link> John Doe
        </span>
        <div className="messages">
          {data.map((m) => (
            <div
              className={m.userId === currentUser._id ? "owner item" : "item"}
              key={m._id}
            >
              <img
                src={m.userId === currentUser._id ? currentUser.img : m.img}
                alt=""
              />
            

              <p>{m.desc}</p>
            </div>
          ))}
        </div>
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea
            type="text"
            placeholder="Write a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
