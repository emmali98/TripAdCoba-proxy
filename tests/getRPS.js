import http from 'k6/http';

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 1500,
      maxVUs: 5000,
    }
  }
};
export default function () {
  http.get('http://localhost:4004/hotel10000000');
}
