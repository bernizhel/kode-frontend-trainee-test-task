import { useState } from 'react';
import styles from './InputSort.module.scss';
import sort from './sort.svg';
import cross from './cross.svg';
import { selectSort, setSort } from '@app/appSlice';
import { SORT } from '@app/appVars';
import { useDispatch, useSelector } from 'react-redux';

function InputSort() {
    const dispatch = useDispatch();
    const [isSelecting, setIsSelecting] = useState(false);
    const FIELDSET_NAME = 'sort';
    const sortMethod = useSelector(selectSort);
    return (
        <>
            <input
                className={`${
                    sortMethod === SORT.BIRTHDAY ? styles.button_active : ''
                }`}
                type={'image'}
                src={sort}
                alt={'Sort!'}
                onClick={() => setIsSelecting(true)}
            />
            {isSelecting && (
                <aside
                    className={styles.dialogue}
                    onClick={() => setIsSelecting(false)}
                >
                    <div
                        className={styles.dialogue__container}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h2 className={styles.dialogue__heading}>Сортировка</h2>
                        <input
                            className={styles.dialogue__button}
                            type={'radio'}
                            id={SORT.ALPHABET}
                            name={FIELDSET_NAME}
                        />
                        <label
                            className={`${styles.dialogue__label} ${
                                sortMethod === SORT.ALPHABET
                                    ? styles.dialogue__label_active
                                    : ''
                            }`}
                            htmlFor={SORT.ALPHABET}
                            onClick={() => {
                                dispatch(setSort(SORT.ALPHABET));
                                setIsSelecting(false);
                            }}
                        >
                            По алфавиту
                        </label>
                        <input
                            className={styles.dialogue__button}
                            type={'radio'}
                            id={SORT.BIRTHDAY}
                            name={FIELDSET_NAME}
                        />
                        <label
                            className={`${styles.dialogue__label} ${
                                sortMethod === SORT.BIRTHDAY
                                    ? styles.dialogue__label_active
                                    : ''
                            }`}
                            htmlFor={SORT.BIRTHDAY}
                            onClick={() => {
                                dispatch(setSort(SORT.BIRTHDAY));
                                setIsSelecting(false);
                            }}
                        >
                            По дню рождения
                        </label>
                        <input
                            className={styles.dialogue__close}
                            type={'image'}
                            src={cross}
                            alt={'Close'}
                            onClick={() => setIsSelecting(false)}
                        />
                    </div>
                </aside>
            )}
        </>
    );
}

export default InputSort;
