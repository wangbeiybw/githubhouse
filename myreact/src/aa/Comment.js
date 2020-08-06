import React from 'react';
export default class Comment extends React.Component{
    render(){
        return (
          <div className="comment">
                <div className="content">
                    <span className="author">{this.props.author}</span>
                    <div className="metadate">
                        <span className="date">{this.props.date}</span>
                    </div>
                    <div className="text">{this.props.children}</div>
                </div>
            </div>
        );
    }
}