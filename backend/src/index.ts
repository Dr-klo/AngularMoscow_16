import * as http from 'http';
import App  from './app';

const server = http.createServer(App);
// changes from subtreee
server.on('listening', () => {
    const address = server.address();
    const bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
    console.log(bind);
});

process.on('uncaughtException', function (err) {
   console.error(err);
});

