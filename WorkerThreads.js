const os = require('os');
const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  const nmcpus = os.cpus().length;
  for (let i = 0; i < nmcpus; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} exited`);
    console.log('Spawning a new worker...');
    cluster.fork(); // Restart worker
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Hello from Worker ${process.pid}`);
    })
    .listen(3000);
  console.log(`Worker ${process.pid} started`);
}
