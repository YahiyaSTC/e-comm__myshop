import React from "react";
import { Link } from "react-router-dom";
import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="filterBar ">
      <div className="d-flex gap-3 justify-content-between align-items-center">
        <div className="productView">
          <div className="icon">
            <Link>
              <i class="fa-solid fa-border-all"></i>
            </Link>
            <Link>
              <i class="fa-solid fa-bars"></i>
            </Link>
          </div>
          <div className="text d-flex gap-2">
            <p>Grid View </p>
            {/* <p>List View </p> */}
          </div>
        </div>
        <div className="productSearch">
          <input type="text" />
          {/* <div className=''></div> */}
        </div>
        <div className="productSort">
          <select>
            <option>Sort By Name</option>
            <option>Sort By Price</option>
          </select>
          {/* <div className=''></div> */}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
