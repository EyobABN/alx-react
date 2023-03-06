import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const className = css(
    isHeader ? styles.headerRow : styles.row
  )
  return (
    <tr className={className}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={className}>{textFirstCell}</th>
        ) : (
          <>
            <th className={className}>{textFirstCell}</th>
            <th className={className}>{textSecondCell}</th>
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

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab'
  },
  headerRow: {
    backgroundColor: '#deb5b545'
  }
})

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
