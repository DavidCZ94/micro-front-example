import { RouteObject, useRoutes, Navigate} from "react-router-dom";
// @ts-ignore
import MfReactA from 'mfReactA/UiComponent';
// @ts-ignore
import MfReactB from 'mfReactB/UiComponent';

const AppRoutes: React.FC = () => {
  const routesObject: RouteObject[] = [
    {path: '/home/mfReact/a', element: <MfReactA/>},
    {path: '/home/mfReact/b', element: <MfReactB/>},
    {path: '/*', element: <Navigate to="/home/mfReact/a" />}
  ];

  const routes: React.ReactElement | null = useRoutes(routesObject);
  
  return routes;
}

export default AppRoutes;