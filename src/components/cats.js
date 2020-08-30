import React from "react";
import CatCard from "./CatCard";

class Cats extends React.Component {
    constructor(){
        super()
        this.state = {
            catsArr: []
        }
    }
    
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount() {
        const reqObj = {
                method: 'GET',
                crossDomain: true,
                headers: {
                    "x-api-key": ""
                }
            }
        fetch("https://api.thecatapi.com/v1/images/search?limit=9", reqObj)
            .then(resp => resp.json())
            .then(cats => {
                this.setState({ 
                    catsArr: cats })
                })
            }


    renderCat = () => {
            return this.state.catsArr.map(catObj => {
                return < CatCard key={catObj.id} cat={catObj} />
            })
        }  
        
        
        render() { 
        return ( 
            <div className="ui text container">
                <h1  className="ui header" >Random Nine Cats</h1>
                <div className="ui divided three column grid">
                {this.renderCat()}
                </div>
            </div>
         )
    }
}
 
export default Cats;
