import { useDispatch } from 'react-redux';
import { asyncUsers } from '../../app/appSlice';
import styles from './AgainButton.module.scss';

function AgainButton() {
    const dispatch = useDispatch();
    return (
        <button
            className={styles.AgainButton}
            onClick={() => {
                dispatch(asyncUsers());
            }}
        >
            Попробовать снова
        </button>
    );
}

export default AgainButton;
