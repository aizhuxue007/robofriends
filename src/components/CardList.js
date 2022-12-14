import React from "react";
import Card from "./Card";

const CardList = ( {robots} ) => {
    const cardComponent = robots.map((user, i) => {
        return <Card 
        key={user.id} 
        name={robots[i].name} 
        email={robots[i].email} 
        id={robots[i].id}/>
    });
    return (
    <div>
        {cardComponent};
    </div>
    );
}

export default CardList;