const express = require('express');
const {spawn} = require('child_process');
const path = require('path');

const backendRoutes = require('./backend');

const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;
const BACKEND_PORT = process.env.BACKEND_PORT || 3001;
const ENV = process.env.ENV;

const frontend = express();
const backend = express();

if (ENV === 'dev') {
   const child = spawn('npm', ['run', 'dev', '--', '--host', '0.0.0.0', '--port', FRONTEND_PORT], {
      cwd: path.join(__dirname, 'frontend')
   });

   child.stdout.on('data', data => {
      console.log(`Frontend: ${data}`);
   });

   child.stderr.on('data', data => {
      console.error(`Frontend ERROR: ${data}`);
   });
} else if (ENV === 'prod') {
   frontend.use(express.static(path.join(__dirname, 'frontend', 'dist')));
   frontend.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
   });

   frontend.listen(FRONTEND_PORT, () => {
      console.log(`Frontend server started on http://localhost:${FRONTEND_PORT}`);
   });
}

backend.use(backendRoutes);

backend.listen(BACKEND_PORT, () => {
   console.log(`API server started on http://localhost:${BACKEND_PORT}`);
});
