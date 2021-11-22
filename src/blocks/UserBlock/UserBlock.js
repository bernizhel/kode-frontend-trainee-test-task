import styles from './UserBlock.module.scss';
import avatarPlaceholder from './avatar-placeholder.svg';
import backButton from './back.svg';
import starImage from './star.svg';
import phoneImage from './phone.svg';
import { useSelector } from 'react-redux';
import { selectSort } from '@app/appSlice';
import { SORT, TAB } from '@app/appVars';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function UserBlock({
    id,
    avatarUrl,
    firstName,
    lastName,
    userTag,
    department,
    birthday,
    phone,
}) {
    const sortMethod = useSelector(selectSort);
    function formatDepartment(department) {
        for (const entry of Object.values(TAB)) {
            if (entry.code === department) {
                return entry.name;
            }
        }
        return TAB.ALL.name;
    }
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
    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== '/') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [location]);
    return (
        <section>
            <Link className={styles.UserBlock} to={`${id}`}>
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
                        <p className={styles.department}>
                            {formatDepartment(department)}
                        </p>
                    </div>
                    {sortMethod === SORT.BIRTHDAY && (
                        <time className={styles.birthday} dateTime={birthday}>
                            {formatBirthday(birthday, 'summary')}
                        </time>
                    )}
                </div>
            </Link>
            <Routes>
                <Route
                    path={`${id}`}
                    element={
                        <div className={styles.details}>
                            <div className={styles.details__main}>
                                <div className={styles.details__info}>
                                    <img
                                        className={styles.details__avatar}
                                        src={avatarUrl}
                                        onError={(event) => {
                                            event.target.src =
                                                avatarPlaceholder;
                                        }}
                                        alt={'User Avatar'}
                                    />
                                    <div className={styles.details__text}>
                                        <div className={styles.details__names}>
                                            <div
                                                className={styles.details__name}
                                            >
                                                {firstName} {lastName}
                                            </div>
                                            <div
                                                className={styles.details__tag}
                                            >
                                                {userTag}
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.details__department
                                            }
                                        >
                                            {formatDepartment(department)}
                                        </div>
                                    </div>
                                </div>
                                <Link className={styles.details__back} to={'/'}>
                                    <input
                                        type={'image'}
                                        src={backButton}
                                        alt={'Back'}
                                    />
                                </Link>
                            </div>
                            <div className={styles.details__contacts}>
                                <div className={styles.details__birthday}>
                                    <img src={starImage} alt={'Star'} />
                                    <div className={styles.details__dates}>
                                        <div className={styles.details__date}>
                                            {formatBirthday(
                                                birthday,
                                                'detailed',
                                            )}
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
                    }
                ></Route>
            </Routes>
        </section>
    );
}

export default UserBlock;
