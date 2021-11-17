import { useState } from 'react';
import styles from './InputSearch.module.scss';
import loop from './loop.svg';
import InputSort from '@blocks/InputSort/InputSort';

function InputSearch() {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={styles.InputSearch}>
            <img
                className={`${styles.loop} ${
                    isFocused ? styles.loop_active : ''
                }`}
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
            <InputSort />
        </div>
    );
}

export default InputSearch;
