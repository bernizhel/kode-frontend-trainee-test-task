import styles from './UserBlock.module.scss';
import avatarPlaceholder from './avatar-placeholder.svg';
import backButton from './back.svg';
import starImage from './star.svg';
import phoneImage from './phone.svg';
import { useSelector } from 'react-redux';
import { selectSort } from '@app/appSlice';
import { SORT } from '@app/appVars';
import { useState } from 'react';

function UserBlock({
    avatarUrl,
    firstName,
    lastName,
    userTag,
    position,
    birthday,
    phone,
}) {
    const [isDetailed, setIsDetailed] = useState(false);
    const sortMethod = useSelector(selectSort);
    function formatBirthday(birthday, type) {
        switch (type) {
            case 'summary':
                return new Intl.DateTimeFormat('ru-RU', {
                    day: 'numeric',
                    month: 'short',
                }).format(new Date(birthday));
            case 'detailed':
                return new Intl.DateTimeFormat('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }).format(new Date(birthday));
            default:
                return birthday;
        }
    }
    function getAge(birthday) {
        const age = String(
            new Date(Date.now() - new Date(birthday).getTime()).getFullYear() -
                1970,
        );
        if (age[age.length - 2] === '1') {
            return `${age} лет`;
        } else {
            const year = age[age.length - 1] ?? '0';
            if (year === '1') {
                return `${age} год`;
            } else if (['0', '5', '6', '7', '8', '9'].includes(year)) {
                return `${age} лет`;
            } else if (['2', '3', '4'].includes(year)) {
                return `${age} года`;
            } else {
                return birthday;
            }
        }
    }
    return (
        <section>
            <div
                className={styles.UserBlock}
                onClick={() => {
                    setIsDetailed(true);
                    document.body.style.overflow = 'hidden';
                }}
            >
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
                            {formatBirthday(birthday, 'summary')}
                        </time>
                    )}
                </div>
            </div>
            {isDetailed && (
                <div className={styles.details}>
                    <div className={styles.details__main}>
                        <div className={styles.details__info}>
                            <img
                                className={styles.details__avatar}
                                src={avatarUrl}
                                onError={(event) => {
                                    event.target.src = avatarPlaceholder;
                                }}
                                alt={'User Avatar'}
                            />
                            <div className={styles.details__text}>
                                <div className={styles.details__names}>
                                    <div className={styles.details__name}>
                                        {firstName} {lastName}
                                    </div>
                                    <div className={styles.details__tag}>
                                        {userTag}
                                    </div>
                                </div>
                                <div className={styles.details__position}>
                                    {position}
                                </div>
                            </div>
                        </div>
                        <input
                            className={styles.details__back}
                            type={'image'}
                            src={backButton}
                            alt={'Back'}
                            onClick={() => {
                                setIsDetailed(false);
                                document.body.style.overflow = 'visible';
                            }}
                        />
                    </div>
                    <div className={styles.details__contacts}>
                        <div className={styles.details__birthday}>
                            <img src={starImage} alt={'Star'} />
                            <div className={styles.details__dates}>
                                <div className={styles.details__date}>
                                    {formatBirthday(birthday, 'detailed')}
                                </div>
                                <div className={styles.details__age}>
                                    {getAge(birthday)}
                                </div>
                            </div>
                        </div>
                        <div className={styles.details__phone}>
                            <img src={phoneImage} alt={'Phone'} />
                            <div className={styles.details__number}>
                                {phone}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default UserBlock;
