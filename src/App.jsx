import './App.css'
import { LeftMenu } from './Componenets/LeftMenu';
import LoginSignup from './Componenets/LoginSignup/LoginSignup';
import { MainContainer } from './Componenets/MainContainer';
import { RightMenu } from './Componenets/RightMenu';
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import Emotion from './Pages/Emotion';
import Search from './Pages/Search';
import ErrorPage from './Pages/ErrorPage';
import Footer from './Componenets/Footer';
import { Banner } from './Componenets/Banner';
import Modal from './Componenets/modal/Modal';

const Dashboard = () => {
  return(
    <div>
     <div className='tin'> 
      <LeftMenu />
      <Outlet/>
      <RightMenu/>
      </div>
      <Footer/>
      
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Dashboard/>,
    children:[{
      path:"/",
      element:<Home/>,
    },
    {
      path:"/emotion",
      element:<Emotion/>
    },
    {
      path:"/Search",
      element:<Search/>
    },
    {
      path:"/main",
      element:<MainContainer/>
    },
   
  ]
  }, 
  
  
  // {
  //   path:"/emotion",
  //   element:<Emotion/>
  // },
  // {
  //   path:"/Search",
  //   element:<Search/>
  // },
  {
    path:"*",
    element:<ErrorPage/>
  },
])

function App() {

  return(

  <>
  
  {/* <div className="background">
    <div className='App'>
      <LeftMenu />
      <MainContainer />
      <RightMenu /> */}

      <div className="background">
      
        <div className="App">
        
        <RouterProvider router={router}/>
        
        </div>
       
      </div>
      <Modal/>
    {/* </div>
    </div> */}
    </>
  );
}

export default App;
