import React, { Component } from "react";
import EditableField from "./EditableField";

import check from "../../../../public/assets/img/icon-check.png";
import edit from "../../../../public/assets/img/icon-edit.png";

const TableRow = (
  { data, handleEditToggle, editStatus, idx } = {
    ...this.props
  }
) => {
  return (
    <tr className="row-player-data">
      <th scope="row">{idx}</th>
      <td className="player-name">{data.name}</td>
      <td className="player-winnings">
        {editStatus === data.id ? (
          <EditableField
            handleEditToggle={e => {
              handleEditToggle(e, data.id);
            }}
            userId={data.id}
            originalValue={data.winnings}
          />
        ) : (
          `$${data.winnings}`
        )}
        <div className={`name-edit-icon ${editStatus ? "check" : "edit"}`}>
          <img
            src={editStatus ? check : edit}
            onClick={e => {
              handleEditToggle(e, data.id);
            }}
          />
        </div>
      </td>
      <td className="player-country">
        <span className="table-data-emoji">{data.emoji}</span>
        {data.country}
      </td>
    </tr>
  );
};

export default TableRow;
