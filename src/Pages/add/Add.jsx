import React, { useReducer, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import uploadFile from "../../utils/uploadFile";
import { INITIAL_STATE, gigReducer } from "../Reducers/gigReducer";
import "./Add.scss";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFile] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleInputChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
        const cover = await uploadFile(singleFile);
        const images = await Promise.all(
            [...files].map(async (file) => {
                const url = await uploadFile(file);
                return url;
            })
        );
        setUploading(false);
        dispatch({
            type: "ADD_IMAGES",
            payload: { cover: cover, images: images },
        });
    } catch (err) {
        console.log(err);
    }
};
const navigate=useNavigate();

const queryClient = useQueryClient();
const mutation = useMutation(
  {
    mutationFn:(gig)=>{
      return newRequest.post("/gigs",gig)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["mygigs"]);
    },
  }
);

 const handleSubmit=(e)=>{
  e.preventDefault()
  mutation.mutate(state);
  console.log("Mutation status:", mutation.status);
  //navigate("/mygigs")
 }
  return (
    <div className="add">
      <div className="container">
        <h1> Add your service</h1>
        <div className="section">
          <div className="info">
            <label htmlFor=""></label>
            <input
              type="text"
              name="title"
              placeholder="e.g i will do something I'm realy good at"
              onChange={handleInputChange}
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats" onChange={handleInputChange}>
              <option value="automobile">Automobile Service</option>
              <option value="Constuction">Constuction Service</option>
              <option value="teacher">Teacher</option>
              <option value="house">House Worker</option>
              <option value="house">Cleaner</option>
            </select>
            <div className="images">
              <div className="imageInputs">
                {" "}
                <label htmlFor="coverImage">Cover Image</label>
                <input
                  type="file"
                  name="coverImage"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="images">Upload Images</label>
                <input
                  type="file"
                  name="images"
                  multiple
                  onChange={(e) => setFile(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>{uploading ? "uploading" : "upload"}</button>
            </div>

            <label htmlFor=""> Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="30"
              rows="10"
              onChange={handleInputChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g. car service"
              onChange={handleInputChange}
            />
            <label htmlFor="">Short Description </label>
            <textarea
              name="shortDesc"
              id=""
              placeholder="Short Description your service"
              cols="30"
              rows="10"
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="">Service Time (e.g 1 days)</label>
            <input
              type="number"
              name="ServiceTime"
              onChange={handleInputChange}
            />
            <label htmlFor="">Rechaek Time</label>
            <input
              type="date"
              name="RechaekTime"
              onChange={handleInputChange}
            />
            <label htmlFor="">Add feature</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. car color" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f} <span> X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" name="price" onChange={handleInputChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
