import styles from './OutputBlock.module.scss';
import UserPlaceholder from '@blocks/UserPlaceholder/UserPlaceholder';
import OutputInfo from '@blocks/OutputInfo/OutputInfo';
import flyingSaucer from '@images/flying-saucer.png';
import magnifyingGlass from '@images/magnifying-glass.png';
import AgainButton from '@blocks/AgainButton/AgainButton';
import UserBlock from '../UserBlock/UserBlock';
import {
    asyncUsers,
    selectUsers,
    selectStatus,
    selectSearch,
    selectTab,
    selectSort,
} from '@app/appSlice';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS, SORT } from '@app/appVars';

function OutputBlock() {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const searchWords = useSelector(selectSearch)
        .toLowerCase()
        .trim()
        .split(' ');
    const tab = useSelector(selectTab);
    useEffect(() => {
        dispatch(asyncUsers());
    }, [dispatch]);
    function filterCallback(user) {
        return (
            user.department.includes(tab) &&
            searchWords.every((searchWord) =>
                [user.firstName, user.lastName, user.userTag]
                    .join(' ')
                    .toLowerCase()
                    .trim()
                    .includes(searchWord),
            )
        );
    }
    const sortMethod = useSelector(selectSort);
    let sortByBirthdayId;
    function sortUsers() {
        function sortCallback(nextUser, previousUser) {
            if (sortMethod === SORT.ALPHABET) {
                return [nextUser.firstName, nextUser.lastname]
                    .join(' ')
                    .localeCompare(
                        [previousUser.firstName, previousUser.lastName].join(
                            ' ',
                        ),
                    );
            } else if (sortMethod === SORT.BIRTHDAY) {
                const nextUserBirthday = new Date(nextUser.birthday);
                const previousUserBirthday = new Date(previousUser.birthday);
                return nextUserBirthday.getMonth() ===
                    previousUserBirthday.getMonth()
                    ? nextUserBirthday.getDate() -
                          previousUserBirthday.getDate()
                    : nextUserBirthday.getMonth() -
                          previousUserBirthday.getMonth();
            }
        }
        users.sort(sortCallback);
        if (sortMethod === SORT.BIRTHDAY) {
            const currentDate = new Date();
            for (let i = 0; i < users.length; i++) {
                const userDate = new Date(users[i].birthday);
                if (
                    userDate.getMonth() === currentDate.getMonth()
                        ? userDate.getDate() >= currentDate.getDate()
                        : userDate.getMonth() > currentDate.getMonth()
                ) {
                    const usersThisYear = users.slice(i, users.length);
                    const usersNextYear = users.slice(0, i);
                    sortByBirthdayId = usersNextYear[0]?.id;
                    users = usersThisYear.concat(usersNextYear);
                    break;
                } else {
                    sortByBirthdayId = users[0].id;
                }
            }
        }
    }
    let users = useSelector(selectUsers);
    users = users.filter(filterCallback);
    sortUsers();
    function getPlaceholders() {
        const content = [];
        const count = 10;
        for (let i = 0; i < count; i++) {
            content.push(<UserPlaceholder key={i} />);
        }
        return content;
    }
    return (
        <main className={styles.OutputBlock}>
            {status === STATUS.LOADING && getPlaceholders()}
            {status === STATUS.IDLE &&
                (users.length !== 0 ? (
                    users.map((user) => (
                        <Fragment key={user.id}>
                            {sortMethod === SORT.BIRTHDAY &&
                                sortByBirthdayId === user.id && (
                                    <div className={styles.divider}>
                                        <div className={styles.divider__left} />
                                        <div className={styles.divider__year}>
                                            {new Date().getFullYear() + 1}
                                        </div>
                                        <div
                                            className={styles.divider__right}
                                        />
                                    </div>
                                )}
                            <UserBlock
                                avatarUrl={user.avatarUrl}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                userTag={user.userTag}
                                department={user.department}
                                birthday={user.birthday}
                                phone={user.phone}
                            />
                        </Fragment>
                    ))
                ) : (
                    <OutputInfo
                        image={magnifyingGlass}
                        primary={'Мы никого не нашли'}
                        secondary={'Попробуй скорректировать запрос'}
                    />
                ))}
            {status === STATUS.ERROR && (
                <OutputInfo
                    image={flyingSaucer}
                    primary={'Какой-то сверхразум все сломал'}
                    secondary={'Постараемся быстро починить'}
                    action={<AgainButton />}
                />
            )}
        </main>
    );
}

export default OutputBlock;
