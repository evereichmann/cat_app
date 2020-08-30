import React from 'react';

class CatCard extends React.Component {
    constructor(){
        super()
        this.state= {
            singleCat: []
        }
    }

    handleComment = (e) => {
         console.log(e)
        // console.log("comment")
    }



    render() { 
        return (  
            <div className="cat-card">
                <br/>
                <img src={this.props.cat.url} height="200" width="200" />
                <br/>
                <div className="ui breadcrumb row">
                    <p className="section" value={this.props.cat.id} onClick={this.handleComment}> comment </p>
                    <div className="divider">/</div>
                    <p className="section"> like </p>
                    <div className="divider">/</div>
                    <p className="section"> favorite </p>
                </div>
                <br/>
            </div>
        );
    }
}
 
export default CatCard;