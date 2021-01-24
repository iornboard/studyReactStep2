
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Page1 from './page/page1';
import Page2 from './page/page2';

function App() {
  return (
      <div>
      <Router exact path="/" component={Page1}/>
      </div>
  );
}

export default App;
