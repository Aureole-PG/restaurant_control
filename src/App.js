import Routers from './routers'
import image from './images/background.jpg'
function App() {
  return (
    <div style={{
      backgroundImage: "url(" + image + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      overflowY: 'scroll' 
    }}>
        <Routers/>
    </div>
  );
}

export default App;
