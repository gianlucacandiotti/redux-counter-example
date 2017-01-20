import fs from 'fs-extra';
const routesFolder = './routes';

const loadRoutes = (app) => {
  const files = fs.readdirSync(routesFolder);

  files.filter(file => file !== 'index.js').forEach((file) => {
    const router = require('./' + file).default;
    app.use(router.basePath, router.router);
  });
};

export default loadRoutes;
