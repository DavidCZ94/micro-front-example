import './App.css'
// @ts-ignore
import MfReactA from 'mfReactA/UiComponent';
import NavBarComponent from './components/NavBar/NavBarComponent';
import LayoutComponent from './components/Layout/LayoutComponent';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const  App: React.FC = () => {

  return (
    <div>
      <div>
        <BrowserRouter>
          <NavBarComponent/>
          <LayoutComponent>
            <AppRoutes/>
          </LayoutComponent>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
