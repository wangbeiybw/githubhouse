import React, {
	Component
} from "react";

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import Modalc from '../production/Modalc';


import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";
import { Table, Tag, Space,Popconfirm,message,Modal,Button} from 'antd';

const tabledata = [
  {
    key: '0',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '1',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default class Test extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			list:tabledata,
			visible: false,
		    columns:"wangbei"
		};
		this.columns = [
		  {
		    title: 'Name',
		    dataIndex: 'name',
		    key: 'name',
		    render: text => <a>{text}</a>,
		  },
		  {
		    title: 'Age',
		    dataIndex: 'age',
		    key: 'age',
		  },
		  {
		    title: 'Address',
		    dataIndex: 'address',
		    key: 'address',
		  },
		  {
		    title: 'Tags',
		    key: 'tags',
		    dataIndex: 'tags',
		  },
		  {
		    title: 'Action',
		    key: 'action',
		    render: (text, record,index) => (
		    	     <Popconfirm placement="leftTop" title='确定删除吗' onConfirm={() => this.del(record.key)} okText="Yes" cancelText="No">
                       <Space size="middle">
				        <a>Invite {record.name}</a>
				        <a>Delete</a>
				      </Space>
                     </Popconfirm>

		    ),
		  },
         ];
	}
	
	//splic  atn版本不支持
    del = (key)=>{
        let newData = this.state.list.filter(function (item) {
            return item.key !== key//返回你选中删除之外的所有数据
        })
        this.setState({
        	list:newData,
        	name:"jingyu"
        });
        
    	}
	    showModal = () => {
	    this.setState({
	      visible: true,
	    });
	  };
	
	  handleOk = e => {
	   

	  };
	
	  handleCancel = e => {
	    console.log(e);
	    this.setState({
	      visible: false,
	    });
	  };
	  handleCommentSumit(comment){
        let comments=this.state.list,
            newComments =comments.concat(comment);
        this.setState({list:newComments})
    }
    render(){
        const list=this.state.list
        return (
              <div>
                     <Button type="primary" onClick={this.showModal}>
			          新增
			        </Button>
              		<Table columns={this.columns} dataSource={list}/>
              		<div>{this.state.name}</div>
              		<Modal
			          title="用户新增"
			          visible={this.state.visible}
			          onOk={this.handleOk}
			          onCancel={this.handleCancel}
			        >
			          <Modalc mdata={tabledata} onCommentSubmit={this.handleCommentSumit.bind(this)}></Modalc>
			        </Modal>
              </div>
        );
    }
}