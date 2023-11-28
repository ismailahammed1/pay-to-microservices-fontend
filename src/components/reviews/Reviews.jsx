import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import newRequest from "../../utils/newRequest";
import Review from "../review/Review";
import "./Reviews.scss";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();

  // Check if gigId is valid before making the query
  if (!gigId) {
    return <div>Error: Invalid gigId</div>;
  }
  
  const { data, error, isLoading } = useQuery({
    queryKey: ["reviews", gigId],
    queryFn: async ({ queryKey }) => {
      const [, gigId] = queryKey; // Extract gigId from queryKey
      const res = await newRequest.get(`/reviews/${gigId}`);
      return res.data;
    },
  });
  

  const mutation = useMutation({
    mutationFn: (reviews) => newRequest.post('/reviews', reviews),
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews', gigId]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading ? "Loading..." : error ? "Something went wrong!" :
        Array.isArray(data) && data.map((review) => (
          <Review key={review._id} review={review} />
        ))}
    <div className="add">
      <h3>Add a review</h3>
      <form action="" className="addForm" onSubmit={handleSubmit}>
        <input type="text" placeholder="Write your opinion" />
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Reviews;
