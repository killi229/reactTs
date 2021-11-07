import React from "react";

export const SearchPanel = ({param, setParam, users}) => {
    return <form action="">
        <div>
            <input value={param.name} onChange={evt => {
                setParam({
                    ...param,
                    name: evt.param.name
                })
            }}/>

            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option value={""}>负责人</option>
                {
                    users.map(user => {
                        return <option value={user.id} key={user.id}>{user.name}{user.id}</option>
                    })
                }
            </select>
        </div>
    </form>
}