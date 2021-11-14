import styles from './InputBlock.module.scss';
import InputSearch from '@blocks/InputSearch/InputSearch';
import InputTabs from '@blocks/InputTabs/InputTabs';

function InputBlock() {
    return (
        <header className={styles.InputBlock}>
            <h1 className={styles.heading}>Поиск</h1>
            <InputSearch />
            <InputTabs />
        </header>
    );
}

export default InputBlock;
