import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import newRequest from "../../utils/newRequest";

const Add = () => {
  const Add = () => {
    const [formData, setFormData] = useState({
      title: "",
      category: "",
      coverImage: null,
      images: [],
      description: "",
      shortDescription: "",
      serviceTime: 0,
      rechargeTime: "",
      features: [],
      price: 0,
    });

    const handleInputChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "file" ? files : value,
      }));
    };

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
      queryKey: ["add", formData.id], // Replace 'formData.id' with the actual ID you want to fetch
      queryFn: () => newRequest.get(`/add/${formData.id}`).then((res) => res.data),
    });

    const mutation = useMutation(
      (add) => newRequest.post(`/add`, add),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["add"]);
          setFormData({
            title: "",
            category: "",
            coverImage: null,
            images: [],
            description: "",
            shortDescription: "",
            serviceTime: 0,
            rechargeTime: "",
            features: [],
            price: 0,
          });
        },
      }
    );

    const handleCreateGig = () => {
      mutation.mutate(formData);
    };

    return (
      <div className="add">
        <div className="container">
          <h1> Add your service</h1>
          <div className="section">
            <div className="info">
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="e.g i will do something I'm realy good at" />
              <label htmlFor="">Category</label>
              <select name="cats" id="cats">
                <option value="automobile">Automobile Service</option>
                <option value="Constuction">Constuction Service</option>
                <option value="teacher">Teacher</option>
                <option value="house">House Worker</option>
                <option value="house">Cleaner</option>
              </select>
              <label htmlFor="">Caver Image</label>
              <input type="file" />
              <label htmlFor="">Upload Image</label>
              <input type="file" multiple />
              <label htmlFor=""> Description</label>
              <textarea
                name=""
                id=""
                placeholder="Brief descriptions to introduce your service to customers"
                cols="30"
                rows="10"
              ></textarea>
              <button onClick={handleCreateGig}>Create</button>
            </div>
            <div className="details">
              <label htmlFor="">Service Title</label>
              <input type="text" placeholder="e.g. car service" />
              <label htmlFor="">Short Description </label>
              <textarea
                name=""
                id=""
                placeholder="Short Description your service"
                cols="30"
                rows="10"
              ></textarea>
              <label htmlFor="">Service Time (e.g 1 days)</label>
              <input type="number" />
              <label htmlFor="">Rechaek Time</label>
              <input type="date" />
              <label htmlFor="">Add feature</label>
              <input type="text" placeholder="e.g. car color" />
              <input type="text" placeholder="e.g. car equipment reinstall" />
              <input type="text" placeholder="e.g. car equipment service" />
              <input type="text" placeholder="e.g. car engine test" />
              <label htmlFor="">Price</label>
              <input type="number" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Add;
};
