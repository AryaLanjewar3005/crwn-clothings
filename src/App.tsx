import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () =>{
  return <h1>Hi I am a shop component</h1>
};
const App = () => {

  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
