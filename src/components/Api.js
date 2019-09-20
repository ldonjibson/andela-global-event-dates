import axios from 'axios';

export default axios.create({
    // fetch('https://calendarific.com/api/v2/holidays?&api_key=9febfcb1fac22ad7e53dfb126f7d99889aa9d605&country=US&year=2019&type=national&day=2&month=12')
  baseURL: `https://calendarific.com/api/v2/holidays?&api_key=9febfcb1fac22ad7e53dfb126f7d99889aa9d605`
});