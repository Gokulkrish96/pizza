import './App.css';
import { AppBar } from './Components/AppBar';
import { Banner } from './Components/Banner';
import { Comments } from './Components/Comments';
import { Menu } from './Components/Menu';
import { PickWeek } from './Components/PickWeek';

function App() {
  return (
    <>
    <AppBar/>
    <Banner/>
    <Menu/>
    <PickWeek/>
    <Comments/>
    <div className='my-3 text-center text-primary small'>
         Copyright 2023-2024
    </div>
    </>
    
  );
}

export default App;
