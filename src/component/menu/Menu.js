import { DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react'

export default function Menu(props) {
  const [zero, setZero] = useState(false)
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const newDay = (value) => {
    props.monday(value)

  }
  const old = (small, big) => {
    props.time(small, big)
  }
  return (<div className='menu'>
  <p className='first'>Meeting Notes</p>
  <ul>
  <li>
      <p onClick={() => {setZero(!zero); newDay("2022-07-11")}}><DownOutlined /><span>Monday, July 11</span></p>
      {zero && <div className='item' onClick={(e) => {e.target.className = 'newColor'; old("2022-07-11 16:00:01", "2022-07-11 16:45:01")}}>
        <p>&nbsp;&nbsp;Title of the meeting<br/> <span>&nbsp;&nbsp;4:00pm-4:45pm</span></p>
        
      </div>}
    </li>
    <li>
      <p onClick={() => {setOne(!one); newDay("2022-07-12")}}><DownOutlined /><span>Tuesday, July 12</span></p>
      {one && <div className='item' onClick={(e) => {e.target.className = 'newColor'; old("2022-07-12 16:00:01", "2022-07-12 16:45:01")}}>
        <p>&nbsp;&nbsp;Title of the meeting<br/> <span>&nbsp;&nbsp;4:00pm-4:45pm</span></p>
      </div>}
    </li>
    <li>
      <p onClick={() => {setTwo(!two); newDay("2022-07-13")}}><DownOutlined /><span>Wednesday, July 13</span></p>
      {two && <div>
        <div className='item' onClick={(e) => {e.target.className = 'newColor'; old("2022-07-13 10:00:01", "2022-07-13 11:00:01")}}>
        <p>&nbsp;&nbsp;Title of the meeting<br/><span>&nbsp;&nbsp;10:00am-11:00am</span></p>
      </div>
      <div className='item' onClick={(e) => {e.target.className = 'newColor'; old("2022-07-13 14:00:01", "2022-07-13 14:30:01")}}><p>&nbsp;&nbsp;Title of the meeting<br/><span>&nbsp;&nbsp;2:00pm-2:30pm</span></p>
      </div>
      <div className='item' onClick={(e) => {e.target.className = 'newColor'; old("2022-07-13 16:00:01", "2022-07-13 16:45:01")}}><p>&nbsp;&nbsp;Title of the meeting<br/><span>&nbsp;&nbsp;4:00pm-4:45pm</span> </p></div>
      </div> }
    </li>
    <li>
      <p onClick={() => {setThree(!three); newDay("2022-07-14")}}><DownOutlined /><span>Thursday, July 14</span></p>
      {three && <div className='item' onClick={(e) => {e.target.className = 'newColor'; old("2022-07-14 16:00:01", "2022-07-14 16:30:01")}}>
        <p>&nbsp;&nbsp;Title of the meeting <br /><span>&nbsp;&nbsp;4:00pm-4:45pm</span></p>
      </div>}
    </li>
    <li>
      <p onClick={() => {setFour(!four); newDay("2022-07-15")}}><DownOutlined /><span>Friday, July 15</span></p>
      {four && <div className='item' onClick={(e) => {e.target.className = 'newColor'; old("2022-07-15 16:00:01", "2022-07-15 16:45:01")}}>
        <p>&nbsp;&nbsp;Title of the meeting <br /><span>&nbsp;&nbsp;4:00pm-4:45pm</span></p>
      </div>}
    </li>
    <li>
      <p onClick={() => {setFive(!five); newDay("2022-07-16")}}><DownOutlined /><span>Saturday, July 16</span></p>
      {five && <div className='item' onClick={(e) => {e.target.className = 'newColor'; old("2022-07-16 16:00:01", "2022-07-16 16:45:01")}}>
        <p>&nbsp;&nbsp;Title of the meeting <br /><span>&nbsp;&nbsp;4:00pm-4:45pm</span></p>
      </div>}
    </li>
    <li>
      <p onClick={() => {setSix(!six); newDay("2022-07-17")}}><DownOutlined /><span>Sunday, July 17</span></p>
      {six && <div className='item' onClick={(e) => {e.target.className = 'newColor'; old("2022-07-17 16:00:01", "2022-07-17 16:45:01")}}>
        <p>&nbsp;&nbsp;Title of the meeting <br /><span>&nbsp;&nbsp;4:00pm-4:45pm</span></p>
      </div>}
    </li>
  </ul>
</div>)
}
