import React from "react";
import PropTypes, { number, string } from "prop-types";

const rowStyle = {backgroundColor: '#f5f5f5ab'}
const headerStyle = {backgroundColor: '#deb5b545'}
export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={headerStyle}>{textFirstCell}</th>
            <th style={headerStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.required,
  textSecondCell: PropTypes.oneOfType([string, number]),
};
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};
