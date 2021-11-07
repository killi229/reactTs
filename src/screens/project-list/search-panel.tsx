import React from "react";

export interface User {
  name: string;
  id: string;
  email: string;
  title: string;
  organization: string;
}

interface SearchPanelProps {
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
  users: User[];
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <form>
      <div>
        <input
          value={param.name}
          onChange={(evt) => {
            setParam({
              ...param,
              name: evt.target.value,
            });
          }}
        />

        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => {
            return (
              <option value={user.id} key={user.id}>
                {user.name}
                {user.id}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};
