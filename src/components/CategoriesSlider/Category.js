import "./Category.css"


const Category = (props)=>{
    return(
        <div className="category">        
            <img className="category__img" src={props.imgSrc} alt=""/>
            <div className="category__title">{props.title || ""}</div>
        </div>
    )
}

export default Category;