import React from 'react';
import Comment from '../aa/Comment.js';
export default class CommentList extends React.Component{
    render(){
    	let commentNodes=this.props.data.map(comment =>{
             return (
                <Comment author={comment.author} date={comment.date}>
                    {comment.text}
                </Comment>
             );
         });
        return (
          <div>
                {commentNodes}
          </div>
        );
    }
}