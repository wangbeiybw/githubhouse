import React, {
	Component
} from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";
import News from '../production/News';
import About from '../production/About';
import 'antd/dist/antd.css';
import '../index.css';

import routes from '../production/routepath';
import { Layout, Menu, Breadcrumb } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, LaptopOutlined, UserOutlined } from '@ant-design/icons';

const {
	SubMenu
} = Menu;
const {
	Header,
	Content,
	Sider
} = Layout;
export default class Home extends React.Component {
	rootSubmenuKeys = ['1', '2', '3'];

	state = {
		openKeys: ['1'],
		path:[]
	};
	componentDidMount() {
		console.log(this.createMenuListMap(routes))
	}
	createMenuListMap = (list) => {
		return(
			list.map((list, i) => {

				if(list.children && list.children.length > 0) {
					return(
						<SubMenu key={list.path} icon={<LaptopOutlined />} title={list.title}>
			            {
			              this.createMenuListMap(list.children)
			            }
			          </SubMenu>
					);
				} else {
					return(
						<Menu.Item key={list.path} onClick={this.handleClick}>
			            <Link to={list.path}>
			              <span>{list.title}</span>
			            </Link>
			          </Menu.Item>
					);
				}
			})
		)

	}
	handleClick = (e) => {
	     let path=e.key
	     
	    let locatArr = path.split("/").filter(item => item != '');
	    this.setState({
	      path:locatArr
	    });
	    console.log(this.state.path)
	}

	descRouter = (routes) => {
		return routes.map((route, j) => {
			if(route.children) {
				return(
					<Route component={route.component} path={route.path} key={route.path}>
                    {this.descRouter(route.children)}
                </Route>
				);
			} else {
				return(<Route component={route.component} path={route.path} key={route.path}/>);
			}
		});

	}

	onOpenChange = openKeys => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if(this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({
				openKeys
			});
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
	};
	render() {
		return(
			<Router>
              	<Layout>
				    <Header className="header">
				      <div className="logo" />
				      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
				        <Menu.Item key="1">nav 1</Menu.Item>
				        <Menu.Item key="2">nav 2</Menu.Item>
				        <Menu.Item key="3">nav 3</Menu.Item>
				      </Menu>
				    </Header>
				    <Layout>
				      <Sider width={210} className="site-layout-background">
				        <Menu
				         mode="inline"
				        openKeys={this.state.openKeys}
				        onOpenChange={this.onOpenChange}
				        style={{ width: 210}}
				        >  
				  {this.createMenuListMap(routes)}
				        </Menu>
				      </Sider>
				      
				      <Layout style={{ padding: '0 10px 10px' }}>
				        {/*位置*/}
				        <Breadcrumb style={{ margin: '16px 0' }}>
				          <Breadcrumb.Item>Home</Breadcrumb.Item>
				         {
				         		this.state.path.map((item,i)=>{
				         	   return(
				         	   	<Breadcrumb.Item key={i}>{item}</Breadcrumb.Item>
				         	   )
				             })
				        	
				         }
				        </Breadcrumb>
				        <Content
				          className="site-layout-background"
				          style={{
				            margin: 0,
				            minHeight: 600,
				          }}
				        >
				           {
				            this.descRouter(routes)
				            }
				        </Content>
				      </Layout>
				    </Layout>
				</Layout>
           </Router>
		);
	}
}