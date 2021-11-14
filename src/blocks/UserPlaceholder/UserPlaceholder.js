import styles from './UserPlaceholder.module.scss';

function UserPlaceholder() {
    return (
        <div className={styles.UserPlaceholder}>
            <div className={styles.avatar} />
            <div className={styles.text}>
                <div className={styles.name} />
                <div className={styles.position} />
            </div>
        </div>
    );
}

export default UserPlaceholder;
