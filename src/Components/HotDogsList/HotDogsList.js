import React from "react";
import HotDogsInfo from "./hotDogsInfo/hotDogsInfo";
import "./HotDogsList.css";


const HotDogsList = ({ 
    List, 
    onDeleteHotDog, 
    onEditHotDog
})  => {
    const item = List.map(item => {
        return (
        <HotDogsInfo 
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.image}
        onDeleteHotDog={() => onDeleteHotDog(item.id)}
        onEditHotDog={() => onEditHotDog(item.id)}
        />
        )
    })

    return (
        <ul className="main">
            {item.length !== 0 ? item : <h2>HotDogsList is empty</h2>}
        </ul>
    );
};

export default HotDogsList;