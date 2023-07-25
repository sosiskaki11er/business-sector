import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Pagination from "./Pagination";
import Table from "./Table.js";


const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setUsers(response.data);
        setTotalPages(Math.ceil(response.data.length / 10));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <Search setSearchQuery={setSearchQuery} />
      <Table
        users={users}
        currentPage={currentPage}
        searchQuery={searchQuery}
        setTotalPages={setTotalPages}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;