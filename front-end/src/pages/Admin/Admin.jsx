import React from "react";

export default function Admin() {

  return (
    <div className="admin-container">
      <div className="admin-child">
        <h2>Add Comic</h2>
        <form className="admin__form">
          <label>enter title</label>

          <input></input>
          <label>enter author</label>
          <input></input>
          <label>enter illustrator</label>
          <input></input>
          <label>add image</label>
          <input></input>
          <label>add year</label>
          <input type="date"></input>


          <div className="admin__admin-button">
            <button className="admin__admin-button--add" type="submit">
              agregar
            </button>
            <button className="admin__admin-button--remove" type="submit">
              eliminar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
