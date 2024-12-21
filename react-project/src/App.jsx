/* eslint-disable react/prop-types */
import './App.css'

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//       <p>Copyright {props.year}</p>
//     </header>
//   )
// }

// using destructuring:
function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup"
];

const dishObjects = items.map((dish, i) => ({
  id: i, title: dish
}))

function Main({dishes}){
  return (
    <ul>
      {dishes.map((dish) => (
         <li key={dish.id} style={{ listStyleType : 'none'}}>{dish.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
    <Header name="Garry" year={new Date().getFullYear()}></Header>
    <Main dishes={dishObjects}/>
    </>
  );
}

export default App
