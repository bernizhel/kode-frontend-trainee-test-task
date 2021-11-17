import { useDispatch } from 'react-redux';
import { usersAsync } from '../../app/appSlice';
import styles from './AgainButton.module.scss';

function AgainButton() {
    const dispatch = useDispatch();
    return (
        <button
            className={styles.AgainButton}
            onClick={() => {
                dispatch(usersAsync());
            }}
        >
            Попробовать снова
        </button>
    );
}

export default AgainButton;
