import './App.css';
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <h1>Slack clone</h1>
      {/* <Header /> */}
      <Header />
      <div className="app_body">
        {/* <Sidebar /> */}
        <Sidebar />
        {/* Routing chat-app */}
      </div>
    </div>
  );
}

export default App;
