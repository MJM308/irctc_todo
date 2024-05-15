import React from "react";
import "./AddList.css";
const AddList = () => {
  return (
    <div className="addList">
      <h1>Add / Delete Recent Journey List</h1>
      <div className="add-container">
        <div className="add-train">
          <label htmlFor="text">Train Number*:</label>
          <input
            type="text"
            placeholder="Enter Train Number
"
            required
          />
        </div>
        <div className="add-class">
          <label htmlFor="class">Class*:</label>
          <select name="class" id="">
            <option value="">Select class</option>
            <option value="">1 Ac</option>
            <option value="">2 Ac</option>
            <option value="">3 Ac</option>
            <option value="">3 Ec</option>
          </select>
        </div>
        <div className="add-From station">
          <label htmlFor="class">From station*:</label>
          <input type="text" placeholder="Select Origin" />
        </div>
        <div className="add-To Station">
          <label htmlFor="class">To Station*:</label>
          <input type="text" placeholder="Select Destination" />
        </div>
        <div className="add-Quota">
          <label htmlFor="class">To Station*:</label>
          <input type="text" placeholder="Select Quota" />
        </div>
        <div className="add-Quota">
          <label htmlFor="class">Quota*:</label>
          <select name="class" id="">
            <option value="">Select Quota</option>
            <option value="">General</option>
            <option value="">Tatkal</option>
            <option value="">LOWER BERTH/SR.CITIZEN</option>
            <option value="">LADIES</option>
          </select>
        </div>
        <div className="button-container">
          <button>Submit</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default AddList;
