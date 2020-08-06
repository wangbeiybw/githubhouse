import React from 'react';
import CommentList from '../aa/CommentList.js';
import CommentForm from '../aa/CommentForm.js';
import $ from 'jquery'; 
export default class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state={data:[]};
        this.getComments();
        //setInterval(()=>this.getComments(),5000);
    }
    handleCommentSumit(comment){
        let comments=this.state.data,
            newComments =comments.concat(comment);
        this.setState({data:newComments})
    }
    getComments(){
        $.ajax({
        	type:'GET',
        	dataType:'json',
            url:'./Comments.json',  
            cache:false,
            success:comments=>{
                this.setState({data:comments});
            }
        })
}  
    render(){
        return (
          <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSumit.bind(this)}/>
            </div>
        );
    }
}