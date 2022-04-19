import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddFoodForm.css";

const AddNewFoodItem = ({addNewItem}) => {
  let history = useHistory();
  const INITIAL_STATE = {
    category: "drinks",
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  }
  
  // state for form
  const [formData, setFormData] = useState(INITIAL_STATE);

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewItem(formData, formData.category)
    history.push("/");
  }

  // handle form change
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }

  // render form
  return (
    <div className="AddFoodForm-wrapper">
      <form onSubmit={handleSubmit} className="AddFoodForm">
        <label htmlFor="category">category</label>
        <select
        id="category"
        name="category"
        onChange={handleChange}
        required>
          <option value="drinks">drinks</option>
          <option value="snacks">snacks</option>
        </select>

        <label htmlFor="id">identifier</label>
        <input
          className="AddFoodForm-input"
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">name</label>
        <input
          className="AddFoodForm-input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">description</label>
        <input
          className="AddFoodForm-input"
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="recipe">recipe</label>
        <input
          className="AddFoodForm-input"
          type="text"
          id="recipe"
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
          required
        />

        <label htmlFor="serve">serve</label>
        <input
          className="AddFoodForm-input"
          type="text"
          id="serve"
          name="serve"
          value={formData.serve}
          onChange={handleChange}
          required
        />
        

        
        <button className="AddFoodForm-button">Add</button>
      </form>
    </div>
    
  )

}

export default AddNewFoodItem;