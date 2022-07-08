import React, { useEffect, useState } from 'react'

import instance from '../../axios/api.js'
import './LeftLayout.css'
import imgUrl from '../../assets/01.png'
import Menu from '../menu/Menu.js'
import TodoList from '../todoList/TodoList.js'
export default function LeftLayout() {
  const [count, setCount] = useState([])
  const [todayList, setTodayList] = useState({})
  const [day, setDay] = useState([])
  useEffect(() => {
    async function fn() {
      let alist = await instance.get('/meeting-a/list')
      let blist = await instance.get('/meeting-b/list')
      setCount([...alist.list, ...blist.list])
    }
    fn()
  }, [])
  useEffect(() => {
    let arr = []
    count.forEach((item) => {
      arr.push(item?.create_time.slice(0, 10))
    })
    const lists = new Set(arr)
    let newarr = Array.from(lists);
    const ArrayList = {}
    newarr.forEach((item) => {
      if (item !== null) {
        ArrayList[item] = []
      }
    })
    for (let i in ArrayList) {
      let x = count.filter((item) => {
        return i === item?.create_time.slice(0, 10)
      })
      ArrayList[i] = x
    }
    setTodayList({...ArrayList})
    setDay(ArrayList["2022-07-11"])
  }, [])
  
  const time = (small, big) => {
    let min = new Date(small).getTime()
    let max = new Date(big).getTime()
    let sift = day?.filter(item => {
      let numberTime = new Date(item?.create_time.slice(0, 19)).getTime()
      return numberTime < max && numberTime > min
    })
    sift.sort((a, b) => {
      let min = new Date(a?.create_time.slice(0, 19)).getTime()
      let max = new Date(b?.create_time.slice(0, 19)).getTime()
      return max - min
    })
    setDay(sift)
  }
  const Monday = (value) => {
    setDay(todayList[value])
    // time()
  }
  console.log(count)
  return (
    <div className='itemList'>
      <div className='left'>
        <img src={imgUrl} alt="" />
      </div>
      <div className='right'>
        <Menu monday={Monday} time={time} />
        <TodoList count={day} />
      </div>
    </div>
  )
}

