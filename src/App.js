import './css/generic/reset.css'
import './css/settings/colors.css';
import Header from './components/header';
import Card from './objects/card';
import Player from './objects/player';

function App() {
  return (
    <>
      <Header />
      <Card>
        <Player player="o"/>
        <Player player="o"/>
        <Player player="x"/>
        <Player player="o"/>
      </Card>
      
    </>
  )
}

export default App;
