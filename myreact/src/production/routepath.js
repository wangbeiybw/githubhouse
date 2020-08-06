import React from 'react';
import News from '../production/News';
import About from '../production/About';
import Test from '../production/Test';
import Testtwo from '../production/Testtwo';
import B from '../production/B';
import { BrowserRouter as Router,HashRouter, Route, Link } from "react-router-dom";
let routes=[
    
    {
    	title:"新闻管理",
		path:"/news",
		component:News,
		icon: "<AlertOutlined />",
		

},{
    	title:"一级菜单",
		path:"/b",
		component:B,
		icon: "DribbbleOutlined",
		children:[{
			title:"测试2",
			path:"/b/testtwo",
			component:Testtwo,
			icon: "0000",
			
		},{
			title:"测试",
			path:"/b/test",
			component:Test,
			icon: "BellOutlined",
		}]

    }]
export default routes