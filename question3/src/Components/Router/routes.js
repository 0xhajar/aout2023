import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import CreateQueryPage from '../Pages/CreateQueryPage';
import GestionPage from '../Pages/GestionPage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/queries/create': CreateQueryPage,
  '/queries': GestionPage,
};

export default routes;
