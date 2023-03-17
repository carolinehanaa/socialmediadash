import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Followers from './components/Followers';
import Overview from './components/Overview';

function App() {
  return (
    <div className="p-8  dark:bg-slate-900  h-full  lg:h-full">
    < Header />
    < Followers />
    < Overview />
    </div>
  );
}

export default App;
