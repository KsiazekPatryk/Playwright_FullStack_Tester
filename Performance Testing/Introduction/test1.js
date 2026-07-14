import http from 'k6/http';

export const options = {
    vus: 3,
    duration: '10s',
    
}
export default function test1() {
    http.get('https://quickpizzagrafana.com/');
}