import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MainMovie from "./MainMovie"


export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainMovie} />



    </Switch>
    </BrowserRouter>
  )
}



export default App
