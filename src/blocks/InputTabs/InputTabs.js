import styles from './InputTabs.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectTab, setTab } from '@app/appSlice';
import { TAB } from '@app/appVars';

function InputTabs() {
    const dispatch = useDispatch();
    const activeTab = useSelector(selectTab);
    return (
        <div className={styles.InputTabs}>
            {Object.values(TAB).map((tab, index) => (
                <button
                    className={`${styles.tab} ${
                        activeTab === tab.code ? styles.tab_active : ''
                    }`}
                    key={index}
                    onClick={() => dispatch(setTab(tab.code))}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    );
}

export default InputTabs;
