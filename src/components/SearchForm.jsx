
import { useEffect, useRef } from "react"
import { useGlobalContext } from "../context/AppContext"
import { use } from "react"



function SearchForm (){

    const {searchTerm, setSearchTerm} = useGlobalContext()
    const searchValue = useRef('')

  const searchCocktail = ()=> {
    setSearchTerm(searchValue.current.value)
  }

    useEffect(() => {
        searchValue.current.focus()
    },[])

    const handleSubmit = (e)=>{
    e.preventDefault()
    }
   



    return(
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    
                   <label htmlFor="name">search your favorite cocktail</label>
                   <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
                   
                </div>
            </form>

        </section>
    )
} 

export default SearchForm








