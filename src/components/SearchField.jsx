import React from "react";

class SearchField extends React.Component{
    constructor() {
        super();
        this.state = {
          movies: [],
          search: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({search: event.target.value});
        console.log(this.state.search);
        }


    handleSubmit(event) {
        event.preventDefault();
        fetch("https://www.omdbapi.com/?apikey=e4db3ced&t=" + this.state.search)
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        movies: data
                    });
                    if (this.state.movies.Response === "False") {
                        this.setState({
                            error: "Movie not Found"
                        });
                    }
                }
            );
    }
render(){
    console.log(this.state.movies)
    return(
        <div>
            <p>Paieska</p>
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Iveskite pavadinima" onChange={this.handleChange} value={this.state.search}></input>
            <button>Ieskoti</button>
            </form>
        </div>
    )
}
    

}

export default SearchField