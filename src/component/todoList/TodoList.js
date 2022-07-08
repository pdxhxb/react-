import React from 'react'

export default function TodoList(props) {
  return (<div className='context'>
  <h2 style={{margin: "15px 0"}}>内容</h2>
  <ul>
  {props.count && props.count.map((item) => {
    if (item === null) {
      return undefined
    } 
    return (<li key={item.id}>{`${item.title} ---- ${item.create_time}`}</li>)
  })}
  </ul>
</div>)
}

