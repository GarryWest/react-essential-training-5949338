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
  "Tofu with Vegetables"
];

function Main({dishes}){
  return (
    <ul>
      {dishes.map((dish) => (
         <li style={{ listStyleType : 'none'}}>{dish}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
    <Header name="Garry" year={new Date().getFullYear()}></Header>
    <Main dishes={items}/>
    </>
  );
}

export default App
