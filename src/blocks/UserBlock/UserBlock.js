import styles from './UserBlock.module.scss';
import avatarPlaceholder from './avatar-placeholder.svg';

function UserBlock({
    avatarUrl,
    firstName,
    lastName,
    userTag,
    position,
    department,
    birthday,
    phone,
}) {
    return (
        <div className={styles.UserBlock}>
            <img
                className={styles.avatar}
                src={avatarUrl}
                onError={(event) => {
                    event.target.src = avatarPlaceholder;
                }}
                alt={'User Avatar'}
            />
            <div className={styles.text}>
                <p className={styles.names}>
                    <span className={styles.name}>
                        {firstName} {lastName}
                    </span>
                    <span className={styles.tag}>{userTag}</span>
                </p>
                <p className={styles.position}>{position}</p>
            </div>
        </div>
    );
}

export default UserBlock;
