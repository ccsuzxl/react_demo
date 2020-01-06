import React from 'react'
import RouterList from './demos/RouterList'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content, Footer } = Layout
const { SubMenu } = Menu
class Home extends React.Component {
  componentDidMount () {
    console.log(this.props.location.pathname)
  }
  render () {
    return (
      <div className="Home" >
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>
              <Menu
                defaultSelectedKeys={[this.props.location.pathname]}
                mode="inline"
              >
                <SubMenu title={<span> <Icon type="mail" /> <span>demos</span></span>} key="demos">
                  <Menu.Item key="/Cards"><Link to="/Cards">Cards</Link></Menu.Item>
                  <Menu.Item key="/EmptyDemo"><Link to="/EmptyDemo">EmptyDemo</Link></Menu.Item>
                  <Menu.Item key="/UploadDemo"><Link to="/UploadDemo">UploadDemo</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content><RouterList /></Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>


      </div>
    )
  }
}

export default withRouter(Home);