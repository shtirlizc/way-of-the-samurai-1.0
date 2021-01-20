import React from "react";
import Button from "../Button";
import s from "./Pagination.module.css";

const Pagination = (props) => {
  const { currentPage, totalCount, pageSize, onChangePage } = props;

  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.root}>
      {pages.map((page, idx) => (
        <div key={idx}>
          <Button
            fullWidth
            active={currentPage === page}
            onClick={() => {
              onChangePage(page);
            }}
          >
            {page}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
