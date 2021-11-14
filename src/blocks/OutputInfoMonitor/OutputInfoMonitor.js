import styles from './OutputInfoMonitor.module.scss';

function OutputInfoMonitor({ image, primary, secondary, action = '' }) {
    return (
        <aside className={styles.OutputInfoMonitor}>
            <img src={image} alt={''} />
            <div className={styles.primary}>{primary}</div>
            <div className={styles.secondary}>{secondary}</div>
            {action}
        </aside>
    );
}

export default OutputInfoMonitor;
