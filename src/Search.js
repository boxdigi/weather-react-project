import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form className="p-3" action="search">
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Enter a city..."
            autoFocus="off"
            autoComplete="off"
          />
          <button
            type="button"
            className="search btn border btn-light text-muted">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  )
}