import './css/reset.css';
import Gallery from './component/gallery//Gallery';
import Friend from './component/friend/Friend';
import SimpleApp from './component/menu/menu';

function App() {
  return (
    <>
      <SimpleApp />
      <Gallery />
      <Friend />
    </>
  );
}

export default App;
