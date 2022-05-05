import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import store from "../redux/store";
import Task from './Task';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<LoginPage store={store} />} />
        <Route path={`/userPage/${store.getState().mail}`} element={<UserPage store={store} />} />
      </Routes> */}
      <Task />
    </div>
  );
}

export default App;
