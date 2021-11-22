import ReactDOM from 'react-dom';
import './index.scss';
import App from '@blocks/App/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename={'kode-frontend-trainee-test-task'}>
        <Provider store={store}>
            <Routes>
                <Route path={'/*'} element={<App />} />
            </Routes>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);
