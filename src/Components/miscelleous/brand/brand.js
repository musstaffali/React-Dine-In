import React from 'react';
import './brand.css';

const brand=(props)=>{
    let vclass=" ";
    if(props.show){
        vclass="show";
    }
    let all_class=["brand"];
    all_class.push(vclass);
    return(
        <div className={all_class.join(" ")}>
            {/* <p className="brandnum">2</p> */}
            <p className="name">Barjr Qatar</p>
            {/* <div className="image-container">
            <img src={logo} alt="Compoany Logo"/>
            </div> */}
            <p className="lastTitle">Burger, Fries, Shakes, and more</p>
        </div>

    );
}

export default brand;