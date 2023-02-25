import { BrowserRouter } from 'react-router-dom';
import Particle from './components/BgEffect';
import { ProjectContextProvider } from './context/ProjectContext';
import { LayoutPage } from './layout/LayoutPage';
import Rotas from './Rotas';

function App() {
  return (
    <ProjectContextProvider>
      <BrowserRouter>
        <LayoutPage>
          <Rotas />
        </LayoutPage>
      </BrowserRouter>
    </ProjectContextProvider>
  );
}

export default App;
