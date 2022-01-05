import React from "react";


class Movie extends React.Component{
    // constructor(props){
    //     super();
    // }
    

    render(){
        console.log('From movie',this.props.movies.title)
        return(
            
            <div className="card">{}</div>
        )

    }
}

export default Movie