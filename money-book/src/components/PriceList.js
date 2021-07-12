import React from 'react'
import Ionicon  from 'react-ionicons'
import PropTypes from 'prop-types'

const PriceList = ({items,onModifyItem,onDeleteItem})=>{
  return (
  <ul className="List-group list-grop-flush">
    {
      items.map((item)=>(
        <li className="List-group-item d-flex
        justify-content-between align-items-center" 
        key={item.id}
        >
        <span className="col-1 badge badge-primary" >
          <Ionicon 
            className="rounded-circle"
            fontSize="30px"
            style={{backgroundColor:'#007bff',padding:'5px'}}
            color={"#fff"}
            icon={item.category.iconName}
          />
        </span>
        <span className="col-5">{item.title}</span>
        <span className="col-2 font-weight-bold">
          {(item.category.type === "income") ? "+":"-"}
          {item.price}元
        </span>
        <a className="col-1" 
        onClick={()=>{onModifyItem(item)}}
        >
          <Ionicon 
            className="rounded-circle"
            fontSize="30px"
            style={{backgroundColor:'#28a745',padding:'5px'}}
            color={"#fff"}
            icon="ios-create-outline"
          />
        </a>
        <a className="col-1"
        onClick={()=>{onDeleteItem(item)}}
        >
          <Ionicon 
            className="rounded-circle"
            fontSize="30px"
            style={{backgroundColor:'#dc3545',padding:'5px'}}
            color={"#fff"}
            icon="ios-close"
          />
        </a>
        </li>
      ))
    }
  </ul>
)
}
//检查类型
PriceList.PropTypes={
  items:PropTypes.array.isRequired,
  onModifyItem:PropTypes.func.isRequired,
  onDeleteItem:PropTypes.func.isRequired
}

//Props默认的值
PriceList.defaultProps={
  onModifyItem:()=>{}
}


export default PriceList

