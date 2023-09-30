import React, {useState} from "react";
import s from "../Pagination/Pagination.module.css";
import cn from 'classnames';

type PropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}


export const Pagination: React.FC<PropsType> = ({
                                                    pageSize,
                                                    totalItemsCount,
                                                    currentPage,
                                                    onPageChanged,
                                                    portionSize = 10
                                                }) => {
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))


    const onClickPrevHandler = () => {
        setPortionNumber(portionNumber - 1)
    }
    const onClickNextHandler  = () => {
        setPortionNumber(portionNumber + 1)
    }

    const pages = []
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.block}>
        <div className={s.pagination}>
            {portionNumber > 1 &&
                <button onClick={onClickPrevHandler}>PREV</button>}
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => {
                    return (
                        <span key={page} onClick={() => onPageChanged(page)}
                              className={cn({[s.selectedPage]: currentPage === page}, s.pageNumber)}>{page}</span>
                    )
                })}
            {portionCount > portionNumber &&
                <button onClick={onClickNextHandler}>NEXT</button>}
        </div>
        </div>
    );
}