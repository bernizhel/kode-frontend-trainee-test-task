import axios from 'axios';

export function fetchUsers() {
    return axios.get(
        'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users',
        { responseType: 'json' },
    );
}
