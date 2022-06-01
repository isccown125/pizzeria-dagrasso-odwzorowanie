import "./PrimaryNav.css"
import FilterPizza from "./Filter"
import Search from "./Search"
const PrimaryNav = ()=>{
    return(
        <div class="primary-navigation">
            <div class="container">
                <Search />
                <FilterPizza />
            </div>
        </div>
    )
}

export default PrimaryNav