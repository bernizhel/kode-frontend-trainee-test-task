import styles from './OutputBlock.module.scss';
import UserPlaceholder from '@blocks/UserPlaceholder/UserPlaceholder';
import OutputInfoMonitor from '@blocks/OutputInfoMonitor/OutputInfoMonitor';
import flyingSaucer from '@images/flying-saucer.png';
import magnifyingGlass from '@images/magnifying-glass.png';
import AgainButton from '@blocks/AgainButton/AgainButton';

function OutputBlock() {
    function getBlankItems() {
        const blankContents = [];
        for (let i = 0; i < 10; i++) {
            blankContents.push(<UserPlaceholder key={i} />);
        }
        return blankContents;
    }

    return (
        <main className={styles.OutputBlock}>
            {getBlankItems()}
            <OutputInfoMonitor
                image={flyingSaucer}
                primary={'Какой-то сверхразум все сломал'}
                secondary={'Постараемся быстро починить'}
                action={<AgainButton />}
            />
            <OutputInfoMonitor
                image={magnifyingGlass}
                primary={'Мы никого не нашли'}
                secondary={'Попробуй скорректировать запрос'}
            />
        </main>
    );
}

export default OutputBlock;
