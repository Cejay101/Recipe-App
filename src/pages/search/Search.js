// import { useFetch } from '../../hooks/useFetch'
// import { useLocation } from 'react-router-dom'
// import RecipeList from '../../components/RecipeList'

// // styles
// import './Search.css'

// export default function Search() {
//   const queryString = useLocation().search
//   const queryParams = new URLSearchParams(queryString)
//   const query = queryParams.get('q')

//   const url = 'http://localhost:3000/recipes?q=' + query
//   const { error, isPending, data } = useFetch(url)

//   return (
//     <div>
//       <h2 className="page-title">Recipes including "{query}"</h2>
//       {error && <p className="error">{error}</p>}
//       {isPending && <p className="loading">Loading...</p>}
//       {data && <RecipeList recipes={data} />}
//     </div>
//   )
// }
import React from "react";
import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";
export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("q");

  const url = `http://localhost:3000/recipes?q=${name}`;

  const {data, isPending, error} =useFetch(url)
  return (
    <div>
      <h1 className="page-title">
        {`Results including "${name}"`}</h1>
      {isPending && <div>Loading</div>}
      {error && <div>{error}</div>}
      {data && <RecipeList recipes= {data} />}
    </div>
  );
}
