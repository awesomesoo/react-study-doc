import './App.css';
import './assets/api/css/reset.css';
import Gallery from './sample1Gallery/Gallery';
import Friend from './sample2Friend/Friend';
// import Test from './test/Test6';
import Customer from './sample3useEffect/Customer';

function App() {
  return (
    <>
      <Gallery />
      <Friend />
      {/* <Test /> */}
      <Customer />
    </>
  );
}

export default App;
