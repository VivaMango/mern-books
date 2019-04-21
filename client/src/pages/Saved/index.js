import React, { Component } from "react";
import Wrapper from "../../components/Wrapper"
import JumboHeader from "../../components/JumboHeader"
import CardContainer from "../../components/CardContainer"

function Saved() {
    return (
        <Wrapper>
        <JumboHeader pageName={"Saved"}/>
        <CardContainer/>
        </Wrapper>
    )
};

export default Saved;