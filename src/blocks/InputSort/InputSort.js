import { useState } from 'react';
import styles from './InputSort.module.scss';
import sort from './sort.svg';
import cross from './cross.svg';

function InputSort() {
    const [isSelecting, setIsSelecting] = useState(false);
    const [activeName, setActiveName] = useState('alphabet');
    const FIELDSET_NAME = 'sort';
    const ALPHABET = 'alphabet';
    const BIRTHDATE = 'birthdate';
    return (
        <>
            <input
                className={`${styles.button} ${
                    activeName === BIRTHDATE ? styles.button_active : ''
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
                            id={ALPHABET}
                            name={FIELDSET_NAME}
                        />
                        <label
                            className={`${styles.dialogue__label} ${
                                activeName === ALPHABET
                                    ? styles.dialogue__label_active
                                    : ''
                            }`}
                            htmlFor={ALPHABET}
                            onClick={() => {
                                setActiveName(ALPHABET);
                                setIsSelecting(false);
                            }}
                        >
                            По алфавиту
                        </label>
                        <input
                            className={styles.dialogue__button}
                            type={'radio'}
                            id={BIRTHDATE}
                            name={FIELDSET_NAME}
                        />
                        <label
                            className={`${styles.dialogue__label} ${
                                activeName === BIRTHDATE
                                    ? styles.dialogue__label_active
                                    : ''
                            }`}
                            htmlFor={BIRTHDATE}
                            onClick={() => {
                                setActiveName(BIRTHDATE);
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
