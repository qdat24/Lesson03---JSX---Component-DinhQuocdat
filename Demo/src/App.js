import logo from './logo.svg';
import './App.css';
import Func_JSX_DinhQuocDat from './components/Func_JSX_DinhQuocDat'
import Class_DinhQuocDat from './components/Class_DinhQuocDat';
function App(){
  return(
    <section ClassName="App" style={{ textAlign: "center" }}>
      <h1>Demo JSX</h1>
      {/*function componenet demo*/}
      <Func_JSX_DinhQuocDat/>
      <Func_JSX_DinhQuocDat fullname="Dinh Quoc Dat" age="20"/>

      <Class_DinhQuocDat/>
      <hr/>
      <Class_DinhQuocDat info="Học ReactJS" time="11"/>

    </section>
  )
}
export default App;
