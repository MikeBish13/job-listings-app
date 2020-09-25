import React, { useState } from "react";
import data from "./data.json";
import JobListing from './JobListing.js';
import FilterBar from './FilterBar.js';
import "./App.css";

function App() {
  const [filters, setFilters] = useState([]);
   
  let filteredJobs = [];

  
  if (filters.length > 0) {
      data.forEach((x) => {
        let tags = x.languages.concat(x.tools).concat(x.role).concat(x.level);
        let result = filters.every((y) => tags.includes(y));
        result && filteredJobs.push(x);
      })
  } else {
    filteredJobs = [...data]
  }

  return (
    <div>
      {filters.length > 0 && <FilterBar filters={filters} setFilters={setFilters}/>}
      {filteredJobs.map((job, key) => 
      <JobListing job={job} filters={filters} setFilters={setFilters}/>
      ) 
      }
    </div>
  );
}
export default App;
