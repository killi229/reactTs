import React from "react";
import {List} from "./list";
import {SearchPanel} from "./search-panel";
import {useEffect, useState} from "react";
import {cleanObject, useDebounce, useMount} from "../../utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "", // 搜索名
        personId: ""  // id
    })
    const [list, setList] = useState([])  // 数据名称列表
    const [users, setUsers] = useState([])  // 负责人列表
    const debounceParam = useDebounce(param, 200)  // 防抖操作


    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {
            if(res.ok){
                setList(await res.json())
            }
        })
    }, [debounceParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if(res.ok){
                setUsers(await res.json())
            }
        })
    })  // [] 页面加载的时候执行一次


    return <div>
        <List list={list} param={param} users={users} />
        <SearchPanel param={param} setParam={setParam} users={users} />
    </div>
}