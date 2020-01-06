import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cards from './Cards';
import Welcome from './Welcome';
import EmptyDemo from './EmptyDemo';
import UploadDemo from './UploadDemo';


class RouterList extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/Cards" component={Cards}></Route>
          <Route path="/EmptyDemo" component={EmptyDemo}></Route>
          <Route path="/UploadDemo" component={UploadDemo}></Route>
          <Route path="/" component={Welcome}></Route>
        </Switch>
      </div>
    )
  }
}

export default RouterList;