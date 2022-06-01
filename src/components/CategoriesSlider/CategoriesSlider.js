import React from "react";
import "./CategoriesSlider.css"
import Category from "./Category";
const CategoriesSlider = ()=>{
    return(
        <div className="slider">        
            <div className="categories_wrapper">
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/www-96x96_promocje.png"} title="promocje"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/www-ico-foto_pizza.png"} title="pizza"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/80x80_bresaola.png"} title="speciale"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/www-ico-foto_startery.png"} title="startery"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/www-ico-foto_salaty.png"} title="sałaty"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/www-ico-foto_zupy.png"} title="zupy"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/www-ico-foto_burger.png"} title="burgery"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/www-ico-foto_makarony.png"} title="makarony"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/www-ico-foto_dania.png"} title="dania"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/fondant.png"} title="desery"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/pepsi+heineken.png"} title="napoje"/>
                <Category imgSrc={process.env.PUBLIC_URL + "/images/CategoryImg/www-96x96_kupon.png"} title="mam kupon"/>
            </div>
        </div>
    )
}

export default CategoriesSlider;