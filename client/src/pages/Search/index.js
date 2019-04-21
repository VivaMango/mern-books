import React, { Component } from "react";
import JumboHeader from "../../components/JumboHeader";
import CardContainer from "../../components/CardContainer";
import Wrapper from "../../components/Wrapper"

class Search extends Component {
    render() {
        return (
            <Wrapper>
            <JumboHeader pageName={"Search"}/>
            <CardContainer/>
            </Wrapper>
        )
    }
};

export default Search;