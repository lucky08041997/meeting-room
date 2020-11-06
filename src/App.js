import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Pengajuan from './pages/Pengajuan';
import SewaDiterima from './pages/SewaDiterima';

function App() {
  return (
    <div>
      <SewaDiterima />
      <Pengajuan />
    </div>
  );
}

export default App;
