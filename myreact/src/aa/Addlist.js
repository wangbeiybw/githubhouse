import React from 'react';
export default class Addlist extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			
		};
	}
    
    formSumbit(event){
    	event.preventDefault();
	  	let xingm = this.refs.xingm.value,
	  	    nl = this.refs.nl.value,
	  	    sf = this.refs.sf.value,
	  	    xb = this.refs.xb.value
	  	    this.props.onsubmitBind({ info: {descrip:' ', sex: xb, age: nl, name: xingm, id:sf}})
	  }
    render(){
        return (
          <div>
              <form className="ui reply form" onSubmit={this.formSumbit.bind(this)}>
				<input type="text" placeholder="姓名" ref="xingm"/>
				<input type='text' name='wangbei' ref='nl'/>
				<input type='text' name='sf' ref='sf'/>
				<input  type='text' name='xb' ref='xb'/>
				<button type="submit">新增</button>
			  </form>
		   </div>
        );
    }
}