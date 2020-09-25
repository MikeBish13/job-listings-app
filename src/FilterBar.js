import React from "react";

function FilterBar(props) {
  return (
    <div className="filter-bar">
      <div className="filter-buttons">
      {props.filters.map((x) => {
        return (
          <div className="filter-btn">
            <p className="btn btn-tag">{x}</p>
            <button
                onClick={() =>
                props.setFilters(
                  props.filters.filter(y => y !== x)
                )}
              className="close-btn"
            >
              X
            </button>
          </div>
        );
      })}
      </div>

      <button onClick={() => props.setFilters([])} className="clear-btn btn">
        Clear
      </button>
    </div>
  );
}

export default FilterBar;
