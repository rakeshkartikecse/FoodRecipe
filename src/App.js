import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes"
import Axios from "axios"

function App() {
  
  const [search, setSearch]=useState("chiken");
  const [recipes,setRecipes]=useState([]);
  const APP_ID="e40af8";
  const APP_KEY="1d1d892b78d1d30d671b7";

  useEffect(()=>{
     getRecipes();
  },[]);

  const getRecipes( async ()=>{

  const res=await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  console.log(res);
  setRecipes(res.data.hits);
  });

  const onInputChange = e =>{
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  return(
    <div className="App">
      <Header search= {search} onInputChange={onInputChange}/>
      <Recipes recipes={recipes} />

    </div>
  )
}

export default App;
