import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Views from './components/view';
import { Router } from '@reach/router';
import Edit from './components/edit';
import Form from './components/Form';
import One from './components/one';



function App() {
  return (
    <div className="App">
      <Router>
        <One path = '/api/animals/:id'/>
        <Views path='/'/>
        <Form path = '/api/animals/new'/>
        <Edit path = "/api/animals/update/:id"/> 
      </Router>
    </div>
  );
}
export default App;
