import React, { useState } from "react";
import SortIcon from './assets/icons/Sort.svg'

const Table = ({ users, currentPage, searchQuery, setTotalPages }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("title");

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;

  const filteredUsers = users
    .filter(
      (user) =>
        user.title.includes(searchQuery) ||
        user.body.includes(searchQuery) ||
        user.userId.toString().includes(searchQuery) ||
        user.id.toString().includes(searchQuery)
    )
    .slice(startIndex, endIndex);

    setTotalPages(Math.ceil(users
    .filter(
      (user) =>
        user.title.includes(searchQuery) ||
        user.body.includes(searchQuery) ||
        user.userId.toString().includes(searchQuery) ||
        user.id.toString().includes(searchQuery)
    ).length / 10))

    const sortedUsers = filteredUsers.sort((a, b) => {
      if (sortOrder === "asc") {
        if (typeof a[sortColumn] === "number") {
          return a[sortColumn] - b[sortColumn];
        } else {
          return a[sortColumn].localeCompare(b[sortColumn]);
        }
      } else {
        if (typeof a[sortColumn] === "number") {
          return b[sortColumn] - a[sortColumn];
        } else {
          return b[sortColumn].localeCompare(a[sortColumn]);
        }
      }
    });

  const handleSortClick = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="id" onClick={() => handleSortClick("id")}><div>ID<img src={SortIcon} style={{transform:`rotate(${sortOrder === 'asc' ? "180" : "0"}deg)`}}/></div></th>
          <th className="title" onClick={() => handleSortClick("title")}><div>Заголовок<img src={SortIcon} style={{transform:`rotate(${sortOrder === 'asc' ? "180" : "0"}deg)`}}/></div></th>
          <th className="body" onClick={() => handleSortClick("body")}><div>Описание<img src={SortIcon} style={{transform:`rotate(${sortOrder === 'asc' ? "180" : "0"}deg)`}}/></div></th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td className="id"><span>{user.id}</span></td>
            <td className="title"><span>{user.title}</span></td>
            <td className="body">{user.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;