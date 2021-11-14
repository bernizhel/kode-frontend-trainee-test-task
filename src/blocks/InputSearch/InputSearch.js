import { useState } from 'react';
import styles from './InputSearch.module.scss';
import loop from './loop.svg';
import sort from './sort.svg';

function InputSearch() {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={styles.InputSearch}>
            <input
                className={`${styles.loop} ${
                    isFocused ? styles.loop_active : ''
                }`}
                type={'image'}
                src={loop}
                alt={'Search!'}
            />
            <input
                className={styles.input}
                type={'text'}
                placeholder={!isFocused ? 'Введите имя, тег...' : ''}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <input
                className={`${styles.sort} ${
                    isFocused ? styles.sort_active : ''
                }`}
                type={'image'}
                src={sort}
                alt={'Sort!'}
            />
        </div>
    );
}

export default InputSearch;
