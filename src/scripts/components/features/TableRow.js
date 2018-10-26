import React, { Component } from "react";
import EditableField from "./EditableField";

const TableRow = (
  { data, handleEditToggle, idx } = {
    ...this.props
  }
) => {
  return (
    <tr className="row-player-data">
      <th scope="row">{idx}</th>
      <td className="player-name">{data.name}</td>
      <td className="player-winnings">
        <EditableField
          handleEdit={handleEditToggle}
          userId={data.id}
          originalValue={data.winnings}
        />
      </td>
      <td className="player-country">
        <span className="table-data-emoji">{data.emoji}</span>
        {data.country}
      </td>
    </tr>
  );
};

export default TableRow;
