import styles from './OutputBlock.module.scss';
import UserPlaceholder from '@blocks/UserPlaceholder/UserPlaceholder';

function OutputBlock() {
    function getBlankItems() {
        const blankContents = [];
        for (let i = 0; i < 10; i++) {
            blankContents.push(<UserPlaceholder key={i} />);
        }
        return blankContents;
    }

    return <main className={styles.Output}>{getBlankItems()}</main>;
}

export default OutputBlock;
