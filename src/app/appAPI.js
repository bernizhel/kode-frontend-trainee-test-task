import axios from 'axios';

export function fetchUsers() {
    return axios.get(process.env.REACT_APP_API_URI, { responseType: 'json' });
}
