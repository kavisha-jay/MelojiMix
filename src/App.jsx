import './App.css'
import { LeftMenu } from './Componenets/LeftMenu';
import { MainContainer } from './Componenets/MainContainer';
import { RightMenu } from './Componenets/RightMenu';

function App() {
  return(
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background">

      </div>
    </div>
  );
}

export default App
