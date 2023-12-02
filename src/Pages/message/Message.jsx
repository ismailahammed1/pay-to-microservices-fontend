import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";

const Message = () => {
  const { id } = useParams();
  console.log("Message Component ID:", id);
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const response = await newRequest.get(`/messages/${id}`);
      console.log("Orders Data:", response);
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to={`/messages/${id}`}>Messages &gt;</Link>Jhon Doe &gt;
        </span>
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="messages">
            { data.map((m)=>( 
            <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
              <img
                src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700945627/png-clipart-computer-icons-avatar-user-profile-blog-personal-heroes-recruiter_ioy4sg.png"
                alt="User Avatar"
              ></img>
              <p>
                {m.desc}
              </p>
            </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="Type your message here"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
