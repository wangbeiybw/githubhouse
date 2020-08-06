import React from 'react';
import Addlist from '../aa/Addlist.js';
export default class Ceshi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userItems:props.items,
		};
	}
	  handleClick(index){
	    var lists=this.state.userItems;
	    lists.splice(index,1);
	    this.setState({userItems:lists})
        return index
	  }
	  handleCommentSumit(user){
	  	let useritems = this.state.userItems,
	  	    newComments =useritems.concat(user);
        this.setState({userItems:newComments});
        
       var pushArr1=[1,2,3,4];
var pushArr2=[5,6,7,8];
console.log(pushArr1.push(8));console.log(pushArr1);


     
	  }
	render() {
        const userItems = this.state.userItems;
        const listItems = userItems.map((userItem,index)=>{
        	return (
        		<tr key={index}>
        		<td>{userItem.info.name}</td>
        		<td>{userItem.info.age}</td>
        		<td>{userItem.info.id}</td>
        		<td>{userItem.info.sex}</td>
        		<td onClick={()=>this.handleClick(index)}>删除</td>
        	</tr>
        	)
        })
		return(
			<div>
                 <table>
		            <thead>
		               <tr>
		                <th className='itemTd'>姓名</th>
		                <th className='itemTd'>年龄</th>
		                <th className='itemTd'>身份</th>
		                <th className='itemTd'>性别</th>
		                <th className='itemTd'>操作</th>
		                </tr>
		            </thead>
                   <tbody key={this.handleClick}>{listItems}</tbody>
               </table>
               <Addlist onsubmitBind={this.handleCommentSumit.bind(this)}/>
           </div>
		)
	}
}
