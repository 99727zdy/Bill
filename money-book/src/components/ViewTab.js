import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import {LIST_VIEW,CHART_VIEW} from '../utility'

const generateLinkClass = (current,view)=>{
  return (current === view) ? "nav-link active" : "nav-link"
}

const ViewTab = ({ activeTab, onTabChange }) => {
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <a className={generateLinkClass(activeTab,LIST_VIEW)} 
        href="#"
        onClick={(event) =>{event.preventDefault();onTabChange(LIST_VIEW)}}
        >
          <Ionicon 
            className="rounded-circle mr-2"
            fontSize="25px"
            color={"#007bff"}
            icon="ios-paper"
          />
        </a>
      </li>
      <li className="nav-item">
        <a className={generateLinkClass(activeTab,CHART_VIEW)} 
        href="#"
        onClick={(event) =>{event.preventDefault();//先把默认事件屏蔽掉(#号跳到默认页面上面)
        onTabChange(CHART_VIEW)}}
        >
        <Ionicon 
            className="rounded-circle mr-2"
            fontSize="25px"
            color={"#007bff"}
            icon="ios-pie"
          />
        </a>
      </li>
    </ul>
  );
};


ViewTab.PropTypes ={
  activeTab:PropTypes.string.isRequired,
  onTabChange:PropTypes.func.isRequired
}


export default ViewTab;
