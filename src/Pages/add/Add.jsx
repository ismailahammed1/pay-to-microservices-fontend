import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
      <h1> Add your service</h1>
      <div className="section">
        <div className="info">
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="e.g i will do something I'm realy good at"
          />
          <label htmlFor="">Category</label>
          <select name="cats" id="cats">
            <option value="automobile">Automobile Service</option>
            <option value="Constuction">Constuction Service</option>
            <option value="teacher">Teacher</option>
            <option value="house">House Worker</option>
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
          <button>Create</button>
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
