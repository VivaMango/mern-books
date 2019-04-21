import React, { Component } from "react";
const axios = require("axios");

class SearchForm extends Component {
    
    state = {
        searchText: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        let searchVal = this.state.searchText;
        
        console.log(searchVal , "search val")
        //AXIOS STUFF HERE
    
        this.setState({
          searchText: "",
        });
      };
    
    render() {
        return (
        <div>
            <p>Enter a Book Title</p>
            <div>
                <form className="form-group">
                    <input
                        className="form-control"
                        value={this.state.searchText}
                        name="searchText"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Enter a Book Title"
                    />
                <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Search</button>
                </form>
            </div>
        </div>
        )
    }
};

export default SearchForm;