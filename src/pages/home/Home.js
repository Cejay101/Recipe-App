// import { useState, useEffect } from 'react'
// import { projectFirestore } from '../../firebase/config'
// import RecipeList from '../../components/RecipeList'

// // styles
// import './Home.css'

// export default function Home() {
//   const [data, setData] = useState(null)
//   const [isPending, setIsPending] = useState(false)
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     setIsPending(true)

//     const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {
//       if (snapshot.empty) {
//         setError('No recipes to load')
//         setIsPending(false)
//       } else {
//         let results = []
//         snapshot.docs.forEach(doc => {
//           // console.log(doc)
//           results.push({ ...doc.data(), id: doc.id })
//         })
//         setData(results)
//         setIsPending(false)
//       }
//     }, err => {
//       setError(err.message)
//       setIsPending(false)
//     })

//     return () => unsub()

//   }, [])

//   return (
//     <div className="home">
//       {error && <p className="error">{error}</p>}
//       {isPending && <p className="loading">Loading...</p>}
//       {data && <RecipeList recipes={data} />}
//     </div>
//   )
// }
import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
export default function Home() {
  const { data, error, isPending } = useFetch(" http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ....</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
