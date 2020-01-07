import React from 'react'
import RouterList from './demos/RouterList'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import Draw from './demos/Draw'
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
          <Header></Header>
          <Layout>
            <Sider style={{ backgroundColor: 'white' }}>
              <Menu
                defaultOpenKeys={['demos']}
                defaultSelectedKeys={[this.props.location.pathname]}
                mode="inline"
              >
                <SubMenu title={<span> <Icon type="mail" /> <span>demos</span></span>} key="demos">
                  <Menu.Item key="/Cards"><Link to="/Cards">Cards</Link></Menu.Item>
                  <Menu.Item key="/EmptyDemo"><Link to="/EmptyDemo">EmptyDemo</Link></Menu.Item>
                  <Menu.Item key="/UploadDemo"><Link to="/UploadDemo">UploadDemo</Link></Menu.Item>
                  <Menu.Item key="/Uploader"><Link to="/Uploader">Uploader</Link></Menu.Item>
                </SubMenu>
              </Menu>
              <Draw />
            </Sider>
            <Content className="Content"><RouterList /></Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>


      </div>
    )
  }
}

export default withRouter(Home);