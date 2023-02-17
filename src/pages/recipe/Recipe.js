// import { useParams } from 'react-router-dom'
// import { useTheme } from '../../hooks/useTheme'
// import { useState, useEffect } from 'react'
// import { projectFirestore } from '../../firebase/config'

// // styles
// import './Recipe.css'

// export default function Recipe() {
//   const { id } = useParams()
//   const { mode } = useTheme()

//   const [isPending, setIsPending] = useState(false)
//   const [error, setError] = useState(null)
//   const [recipe, setRecipe] = useState(null)

//   useEffect(() => {
//     setIsPending(true)

//     const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot(doc => {
//       if (doc.exists) {
//         setIsPending(false)
//         setRecipe(doc.data())
//       } else {
//         setIsPending(false)
//         setError(`Could not find that recipe`)
//       }
//     })

//     return () => unsub()

//   }, [id])

//   const handleClick = () => {
//     projectFirestore.collection('recipes').doc(id).update({
//       title: 'Something completely different'
//     })
//   }

//   return (
//     <div className={`recipe ${mode}`}>
//       {error && <p className="error">{error}</p>}
//       {isPending && <p className="loading">Loading...</p>}
//       {recipe && (
//         <>
//           <h2 className="page-title">{recipe.title}</h2>
//           <p>Takes {recipe.cookingTime} to cook.</p>
//           <ul>
//             {recipe.ingredients.map(ing => <li key={ing}>ing</li>)}
//           </ul>
//           <p className="method">{recipe.method}</p>
//           <button onClick={handleClick}>Update me</button>
//         </>
//       )}
//     </div>
//   )
// }
import {useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Recipe.css"
export default function Recipe() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );
  const history = useHistory();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);
  return (
    <div>
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div className="recipe" >
          <h2 className="page-title ">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook</p>
          <ul >
          {data.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
          </ul>
          <p>{data.method}</p>
        </div>
      )}
    </div>
  );
}
