import React, { Component } from "react";
import JumboHeader from "../../components/JumboHeader";
import CardContainer from "../../components/CardContainer";
import Wrapper from "../../components/Wrapper"

function Search() {
    return (
        <Wrapper>
        <JumboHeader pageName={"Search"}/>
        <CardContainer/>
        </Wrapper>
    )
};

export default Search;