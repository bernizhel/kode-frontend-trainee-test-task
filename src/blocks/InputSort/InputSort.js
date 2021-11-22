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
    function selectOption(payload) {
        dispatch(setSort(payload));
        setIsSelecting(false);
        document.body.style.overflow = 'visible';
    }
    return (
        <div>
            <input
                className={`${
                    sortMethod === SORT.BIRTHDAY ? styles.button_active : ''
                }`}
                type={'image'}
                src={sort}
                alt={'Sort!'}
                onClick={() => {
                    setIsSelecting(true);
                    document.body.style.overflow = 'hidden';
                }}
            />
            {isSelecting && (
                <div
                    className={styles.dialogue}
                    onClick={() => {
                        setIsSelecting(false);
                        document.body.style.overflow = 'visible';
                    }}
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
                            onClick={() => selectOption(SORT.ALPHABET)}
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
                            onClick={() => selectOption(SORT.BIRTHDAY)}
                        >
                            По дню рождения
                        </label>
                        <input
                            className={styles.dialogue__close}
                            type={'image'}
                            src={cross}
                            alt={'Close'}
                            onClick={() => {
                                setIsSelecting(false);
                                document.body.style.overflow = 'visible';
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default InputSort;
