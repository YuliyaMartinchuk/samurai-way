import styles from './UsersFilteredButtons.module.css'

import {FilterType} from '../../../redux/reducers/usersReducer';

type PropsType = {
    filter: FilterType
    onFilterChanged: (filter: FilterType) => void
}

export const
    UsersFilteredButtons: React.FC<PropsType> = (props) => {
    const {onFilterChanged, filter} = props

    const onClickFilterChangedHandler = (filter: FilterType) => onFilterChanged(filter)

    return (
        <div className={styles.root}>
            <button onClick={() => onClickFilterChangedHandler({friend: null, term: filter.term})}
                    className={`${styles.button} ${filter.friend === null ? styles.buttonSelected : ''}`}>
                All
            </button>
            <button onClick={() => onClickFilterChangedHandler({friend: true, term: filter.term})}
                    className={`${styles.button} ${filter.friend === true ? styles.buttonSelected : ''}`}>Followed
            </button>
        </div>
    );
};

