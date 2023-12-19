import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";
import "./MyGigs.scss";

const MyGigs = () => {
  const currentUser = getCurrentUser();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs",],
    queryFn: async () => {
      try {
        const res = await newRequest.get(`/gigs?userId=${currentUser._id}`);
        return res.data;
      } catch (error) {
        throw new Error("Error fetching data");
      }
    },
  });
  

  const mutation = useMutation({
    mutationFn: (_id) => newRequest.delete(`/gigs/${_id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["mygigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="myGigs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Gig</button>
              </Link>
            )}
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) &&
                data.map((gig) => (
                  <tr key={gig._id}>
                    <td>
                      <img src={gig.cover} alt="" className="image" />
                    </td>
                    <td>{gig.title}</td>
                    <td>
                      {gig.price}
                      <sup>99</sup>
                    </td>
                    <td>{gig.sales}</td>
                    <td>
                      <img
                        src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1700337769/img.icons8_bhwsbu.png"
                        alt=""
                        className="delete"
                        onClick={() => handleDelete(gig._id)}
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

export default MyGigs;
