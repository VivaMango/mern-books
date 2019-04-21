import React from "react";
import SearchForm from "../SearchForm"
import SavedButton from "../SavedButton"

function JumboHeader(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.pageName} Google Books API</h1>
            {props.pageName !== "Not Found" ? 
                props.pageName === "Search" ? <SearchForm/> : <SavedButton/>
                : "404 Page Not Found"}
        </div>
    )
};

export default JumboHeader;