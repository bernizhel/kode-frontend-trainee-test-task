import styles from './App.module.scss';
import InputBlock from '@blocks/InputBlock/InputBlock';
import OutputBlock from '@blocks/OutputBlock/OutputBlock';

function App() {
    return (
        <div className={styles.container}>
            <InputBlock />
            <OutputBlock />
        </div>
    );
}

export default App;
