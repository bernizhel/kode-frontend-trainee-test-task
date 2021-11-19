import styles from './UserBlock.module.scss';
import avatarPlaceholder from './avatar-placeholder.svg';
import { useSelector } from 'react-redux';
import { selectSort } from '@app/appSlice';
import { SORT } from '@app/appVars';

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
    const sortMethod = useSelector(selectSort);
    function formatBirthday(birthday) {
        return new Intl.DateTimeFormat('ru-RU', {
            day: 'numeric',
            month: 'short',
        }).format(new Date(birthday));
    }
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
                <div className={styles.main}>
                    <p className={styles.names}>
                        <span className={styles.name}>
                            {firstName} {lastName}
                        </span>
                        <span className={styles.tag}>{userTag}</span>
                    </p>
                    <p className={styles.position}>{position}</p>
                </div>
                {sortMethod === SORT.BIRTHDAY && (
                    <time className={styles.birthday} dateTime={birthday}>
                        {formatBirthday(birthday)}
                    </time>
                )}
            </div>
        </div>
    );
}

export default UserBlock;
