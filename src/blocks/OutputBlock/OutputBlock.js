import styles from './OutputBlock.module.scss';
import UserPlaceholder from '@blocks/UserPlaceholder/UserPlaceholder';
import OutputInfo from '@blocks/OutputInfo/OutputInfo';
import flyingSaucer from '@images/flying-saucer.png';
import magnifyingGlass from '@images/magnifying-glass.png';
import AgainButton from '@blocks/AgainButton/AgainButton';
import UserBlock from '../UserBlock/UserBlock';

function OutputBlock() {
    function getContent() {
        const content = [];
        for (let i = 0; i < 5; i++) {
            content.push(<UserPlaceholder key={i} />);
            content.push(<UserBlock key={i} />);
        }
        return content;
    }
    return (
        <main className={styles.OutputBlock}>
            {getContent()}
            <OutputInfo
                image={flyingSaucer}
                primary={'Какой-то сверхразум все сломал'}
                secondary={'Постараемся быстро починить'}
                action={<AgainButton />}
            />
            <OutputInfo
                image={magnifyingGlass}
                primary={'Мы никого не нашли'}
                secondary={'Попробуй скорректировать запрос'}
            />
        </main>
    );
}

export default OutputBlock;
