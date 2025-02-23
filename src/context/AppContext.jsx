import { createContext, useContext, useEffect, useState } from "react";


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppContext = createContext();

function AppProvider ({children}) {

  const[loading, setLoading]= useState(true)
  const[searchTerm, setSearchTerm]= useState('a')
  const[cocktails, setCocktails]= useState([])
 
  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const {drinks}= data;
      if(drinks){
        const newCocktails = drinks.map((item) =>{
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass}= item;
        return { id:idDrink, name:strDrink, image:strDrinkThumb, info:strAlcoholic, glass:strGlass}

        })
        setCocktails(newCocktails)
      }else{
        setCocktails([])
      }
      
      setLoading(false)
       
    } catch (error) {
       setLoading(false)
    }
  }


  useEffect(()=>{
    fetchDrinks()
  },[searchTerm])
   

    return(
        <AppContext.Provider value={{loading, setLoading,searchTerm, setSearchTerm,cocktails, setCocktails}} >
          {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider