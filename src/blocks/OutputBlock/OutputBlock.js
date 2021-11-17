import styles from './OutputBlock.module.scss';
import UserPlaceholder from '@blocks/UserPlaceholder/UserPlaceholder';
import OutputInfo from '@blocks/OutputInfo/OutputInfo';
import flyingSaucer from '@images/flying-saucer.png';
import magnifyingGlass from '@images/magnifying-glass.png';
import AgainButton from '@blocks/AgainButton/AgainButton';
import UserBlock from '../UserBlock/UserBlock';
import { usersAsync, selectUsers, selectStatus } from '@app/appSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '@app/appVars';

function OutputBlock() {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const status = useSelector(selectStatus);
    useEffect(() => {
        dispatch(usersAsync());
    }, [dispatch]);
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
                        <UserBlock
                            key={user.id}
                            avatarUrl={user.avatarUrl}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            userTag={user.userTag}
                            position={user.position}
                            department={user.department}
                            birthday={user.birthday}
                            phone={user.phone}
                        />
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
