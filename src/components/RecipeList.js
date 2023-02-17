import { Link } from "react-router-dom";
import './RecipeList.css'
export default function RecipeList({ recipes }) {
  // console.log(recipes.length)
 if(recipes.length===0){
  return <div className="error">No recipe to Load ....</div>
 } 
 return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h2>{recipe.title}</h2>
          <h3>{recipe.cookingTime}</h3>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`./recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}
