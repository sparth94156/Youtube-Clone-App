import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { appStore } from './utils/appStore';
import { Outlet, RouterProvider, createBrowserRouter, } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import Error from './components/Error';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      errorElement: <Error />
    },
    {
      path: "watch",
      element: <WatchPage />
    }
  ])
  return (
    <div className="App">
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter}>
          <Outlet />
        </RouterProvider>
      </Provider>
    </div>

  );
}

export default App;
