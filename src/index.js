import ReactDOM from 'react-dom';
import './index.scss';
import App from '@blocks/App/App';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);