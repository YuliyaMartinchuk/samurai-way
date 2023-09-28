import React from "react";
import s from "../Pagination/Pagination.module.css";


type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}


export const Pagination: React.FC<PropsType> = ({
                                                    pageSize,
                                                    totalUsersCount,
                                                    currentPage,
                                                    onPageChanged
                                                }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(page => {
                return (
                    <span key={page} onClick={() => onPageChanged(page)}
                          className={currentPage === page ? s.selectedPage : ""}>{page}</span>
                )
            })}
        </div>
    );
}