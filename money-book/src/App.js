import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import MonthPicker from './components/MonthPicker';
import {LIST_VIEW,CHART_VIEW} from './utility'

const items = [
  {
    "id":1,
    "title":"去云南旅游",
    "price":200,
    "date":"2018-09-10",
    "category":{
      "id":"1",
      "name":"旅行",
      "type":"outcome",
      "iconName":"ios-plane"
    }
  },
  {
    "id":1,
    "title":"去云南旅游",
    "price":200,
    "date":"2018-09-10",
    "category":{
      "id":"1",
      "name":"旅行",
      "type":"outcome",
      "iconName":"ios-plane"
    }
  },
  {
    "id":1,
    "title":"去云南旅游",
    "price":200,
    "date":"2018-09-10",
    "category":{
      "id":"1",
      "name":"旅行",
      "type":"outcome",
      "iconName":"ios-plane"
    }
  }
]

class App extends Component {
  render() {
    return (
        <div className="App">
        <PriceList 
          items={items} 
          onModifyItem={(item)=>{alert(item.id)}}
          onDeleteItem={(item)=>{alert(item.id)}}
        />
        <ViewTab
          activeTab={LIST_VIEW}
          onTabChange={(view) =>{console.log(view)}}
        />
        <MonthPicker
          year={2018}
          month={5}
        />
        </div>
    );
  }
}

export default App;