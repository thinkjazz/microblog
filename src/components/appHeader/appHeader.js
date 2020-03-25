import React from "react";
import "./appHeader.css";



const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Лукреций Пынь</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}
export default AppHeader;