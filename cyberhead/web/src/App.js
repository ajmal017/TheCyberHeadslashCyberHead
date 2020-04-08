



import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import './App.css';

import getStrategies from './modules/actions/getStrategies'



// Automated Import //
import Coinbase from './modules/Coinbase'

import Ameritrade from './modules/Ameritrade'

import Alpaca from './modules/Alpaca'

import Strategies from './modules/Strategies'

import Mysql from './modules/Mysql'

import Mongodb from './modules/Mongodb'

import Portfolio from './modules/Portfolio'

import Datasets from './modules/Datasets'
// Automated Import //



const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
      selectedKeyMenu: "1",
      loaded: false,
      strategies: []
    };
    this.updateMenuKey = this.updateMenuKey.bind(this);
    this.loadStrategies = this.loadStrategies.bind(this);
  }

  updateMenuKey(key){
    this.setState({selectedKeyMenu: key})
  }

  loadStrategies(){
    getStrategies()
      .then(response => {
        response.strategies.map(strategy => this.setState({strategies: [...this.state.strategies, strategy.strategy_name]}))
      })
  }

  componentDidMount(){
    this.loadStrategies()
    this.setState({loaded: true})
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };



  render() {
    return (
      <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ background: '#141414'}}>
          <div className="logo">
          <img src="/logo64.png" className="center"/>
          </div>
          <Menu style={{ background: '#141414'}} theme="dark" mode="inline" defaultSelectedKeys={["1"]} selectedKeys={[this.state.selectedKeyMenu]} >


{/* Automated Menu */}
    <Menu.Item className="item" key="303">
      <Link  to="coinbase">
	<Icon type="experiment" />
	<span>Coinbase</span>
      </Link>
    </Menu.Item>




    <Menu.Item className="item" key="302">
      <Link  to="ameritrade">
	<Icon type="experiment" />
	<span>Ameritrade</span>
      </Link>
    </Menu.Item>




    <Menu.Item className="item" key="300">
      <Link  to="alpaca">
	<Icon type="experiment" />
	<span>Alpaca</span>
      </Link>
    </Menu.Item>




  <SubMenu
    style={{ background: '#141414'}}
    theme="dark"
    mode="inline"
    key="sub1"
    title={
      <span>
	<Icon type="stock" />
	<span>Strategies</span>
      </span>
    }
  >
    {this.state.loaded && this.state.strategies.map((strategy, index) => (
      <Menu.Item className="item" key={index+11} >
	<Link to={`/strategy/${strategy}`}>
	  <Icon type="stock" />
	  <span>{strategy}</span>
	</Link>
      </Menu.Item>

    ))}

      <Menu.Item className="item" key="100" style={{ background: '#090909'}}>
        <Link  to="strategy1">
	  <Icon type="experiment" />
	  <span>Strategy1</span>
        </Link>
      </Menu.Item>

      <Menu.Item className="item" key="101" style={{ background: '#090909'}}>
        <Link  to="strategy2">
	  <Icon type="experiment" />
	  <span>Strategy2</span>
        </Link>
      </Menu.Item>

      <Menu.Item className="item" key="103" style={{ background: '#090909'}}>
        <Link  to="strategy3">
	  <Icon type="experiment" />
	  <span>Strategy2</span>
        </Link>
      </Menu.Item>


{/* Automated Submenu */}

{/* Automated Submenu */}


  </SubMenu>




    <Menu.Item className="item" key="3">
      <Link to="/heat-vision">
	<Icon type="dot-chart" />
	<span>MySQL</span>
      </Link>
    </Menu.Item>




    <Menu.Item className="item" key="60">
      <Link to="/mongodb">
	<Icon type="dot-chart" />
	<span>MongoDB</span>
      </Link>
    </Menu.Item>




  <Menu.Item className="item"key="200">
	<Link to="/portfolio">
    <Icon type="desktop" />
    <span>Porfolio</span>

	</Link>
  </Menu.Item>



    <Menu.Item className="item" key="400">
      <Link to="/datasets">
	<Icon type="file-add" />
	<span>Data Sets</span>
      </Link>
    </Menu.Item>

{/* Automated Menu */}

          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#090909'}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '0px 0px',
              padding: 24,
              background: '#1b1b1b',
              minHeight: '100vh',
            }}
          >
              <Switch>


{/* Automated Route */}
<Route exact path="/Coinbase">
  <Coinbase updateKey={this.updateMenuKey}/>
</Route>

<Route exact path="/Ameritrade">
  <Ameritrade updateKey={this.updateMenuKey}/>
</Route>

<Route exact path="/Alpaca">
  <Alpaca updateKey={this.updateMenuKey}/>
</Route>

<Route exact path="/Strategies">
  <Strategies updateKey={this.updateMenuKey}/>
</Route>

<Route exact path="/Mysql">
  <Mysql updateKey={this.updateMenuKey}/>
</Route>

<Route exact path="/Mongodb">
  <Mongodb updateKey={this.updateMenuKey}/>
</Route>

<Route exact path="/Portfolio">
  <Portfolio updateKey={this.updateMenuKey}/>
</Route>

<Route exact path="/Datasets">
  <Datasets updateKey={this.updateMenuKey}/>
</Route>
{/* Automated Route */}

            </Switch>
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default App;



