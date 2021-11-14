import { useState } from 'react';
import styles from './InputTabs.module.scss';

function InputTabs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        { text: 'All' },
        { text: 'Designers' },
        { text: 'Android' },
        { text: 'iOS' },
        { text: 'Managment' },
        { text: 'QA' },
        { text: 'HR' },
        { text: 'PR' },
        { text: 'Back Office' },
        { text: 'Frontend' },
        { text: 'Backend' },
        { text: 'Support' },
        { text: 'Analytics' },
    ];
    return (
        <div className={styles.InputTabs}>
            {data.map((item, index) => (
                <button
                    className={`${styles.tab} ${
                        activeIndex === index ? styles.tab_active : ''
                    }`}
                    key={index}
                    onClick={() => setActiveIndex(index)}
                >
                    {item.text}
                </button>
            ))}
        </div>
    );
}

export default InputTabs;
