import styles from './OutputInfo.module.scss';

function OutputInfo({
    image,
    alt = 'An Info Image',
    primary = 'No Info',
    secondary,
    action,
}) {
    return (
        <aside className={styles.OutputInfo}>
            {image && <img src={image} alt={alt} />}
            <p className={styles.primary}>{primary}</p>
            {secondary && <p className={styles.secondary}>{secondary}</p>}
            {action && <p>{action}</p>}
        </aside>
    );
}

export default OutputInfo;
