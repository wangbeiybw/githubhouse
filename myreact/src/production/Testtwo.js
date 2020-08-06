import React from 'react';
import $ from 'jquery'


export default class Testtwo extends React.Component {
	bindClick = () => {
		$.ajax({
			url: "http://172.17.10.22:2000/api/a",
			dataType: 'json',
			cache: false,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success: function(data) {
				console.log(data)
				//this.setState({data: data});   // 注意这里
			}.bind(this),
			error: function(xhr, status, err) {
				// console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	
	bindfetch = () => {
		fetch('http://172.17.10.22:2000/api/b',
		{
			method:"post",
			body: "muzouruanjian",
			
	    }).then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				console.log(myJson);
			});
	}
	componentDidMount() {

	}
	render() {
		return(
			<div>
              		<buttion onClick={this.bindClick}>向后台请求数据ajax</buttion>
              		<buttion onClick={this.bindfetch}>向后台请求数据fetch</buttion>
              </div>
		);
	}
}