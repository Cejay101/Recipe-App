// import { useState, useRef, useEffect } from 'react'
// import { projectFirestore } from '../../firebase/config'
// import { useHistory } from 'react-router-dom'

// // styles
// import './Create.css'

// export default function Create() {
//   const [title, setTitle] = useState('')
//   const [method, setMethod] = useState('')
//   const [cookingTime, setCookingTime] = useState('')
//   const [newIngredient, setNewIngredient] = useState('')
//   const [ingredients, setIngredients] = useState([])
//   const ingredientInput = useRef(null)

//   const history = useHistory()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes' }

//     try {
//       await projectFirestore.collection('recipes').add(doc)
//       history.push('/')
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const handleAdd = (e) => {
//     e.preventDefault()
//     const ing = newIngredient.trim()

//     if (ing && !ingredients.includes(ing)) {
//       setIngredients(prevIngredients => [...prevIngredients, newIngredient])
//     }
//     setNewIngredient('')
//     ingredientInput.current.focus()
//   }

//   return (
//     <div className="create">
//       <h2 className="page-title">Add a New Recipe</h2>
//       <form onSubmit={handleSubmit}>

//         <label>
//           <span>Recipe title:</span>
//           <input
//             type="text"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             required
//           />
//         </label>

//         <label>
//           <span>Recipe Ingredients:</span>
//           <div className="ingredients">
//             <input
//               type="text"
//               onChange={(e) => setNewIngredient(e.target.value)}
//               value={newIngredient}
//               ref={ingredientInput}
//             />
//             <button onClick={handleAdd} className="btn">add</button>
//           </div>
//         </label>
//         <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

//         <label>
//           <span>Recipe Method:</span>
//           <textarea
//             onChange={(e) => setMethod(e.target.value)}
//             value={method}
//             required
//           />
//         </label>

//         <label>
//           <span>Cooking time (minutes):</span>
//           <input
//             type="number"
//             onChange={(e) => setCookingTime(e.target.value)}
//             value={cookingTime}
//             required
//           />
//         </label>

//         <button className="btn">submit</button>
//       </form>
//     </div>
//   )
// }
import { useFetch } from "../../hooks/useFetch";
import React, { useRef } from "react";
import { useState,useEffect } from "react";
import { useHistory} from "react-router-dom"
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [Ingredient, setIngredients] = useState([]);
  const history =useHistory();
 
  const { postData,data } = useFetch(" http://localhost:3000/recipes", "POST");
  const IngredientRef = useRef();
  console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    postData({title,method,Ingredient,cookingTime:cookingTime + ' mins' })
  };
  useEffect(() => {
  if(data) setTimeout(() => {
    history.goBack()
  },2000);
  }, [data,history])
  
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !Ingredient.includes(ing)) {
      setIngredients((prev) => [...prev, ing]);
    }
    setNewIngredient("");
    IngredientRef.current.focus();
  };
  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="create">
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
            value={title}
          />
        </label>
        <label>
          <span>Cooking Time (min):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <label>
          <span> Add Ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={IngredientRef}
            />
            <button onClick={handleAdd}>Add</button>
          </div>
          <p>
            Current ingredients:{" "}
            {Ingredient.map((i) => (
              <em key={i}>{i}, </em>
            ))}
          </p>
        </label>
        <label>
          <span>Recipe Method :</span>
          <textarea
            type="text"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
