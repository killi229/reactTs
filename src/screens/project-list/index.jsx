import React from "react";
import {List} from "./list";
import {SearchPanel} from "./search-panel";
import {useEffect, useState} from "react";
import {cleanObject} from "../../utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "", // 搜索名
        personId: ""  // id
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])  // 用户列表

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            if(res.ok){
                setList(await res.json())
            }
        })
        console.log('adasdasd')
    }, [param])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if(res.ok){
                setUsers(await res.json())
            }
        })
    }, [])  // [] 页面加载的时候执行一次


    return <div>
        <List list={list} param={param} users={users} />
        <SearchPanel param={param} setParam={setParam} users={users} />
    </div>
}