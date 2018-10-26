import React from 'react'
import { Route } from 'react-router-dom'

import Index from './components/index/index'
import News from './components/news/news'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Index}></Route>
        <Route path="/news" component={News}></Route>
      </div>
    )
  }
}

export default App