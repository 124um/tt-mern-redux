import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { Switch, Route } from "react-router-dom"
import BookShelfContainer from "./containers/BookShelfContainer";

function App() {
  return (
    <Switch>
        <Route path="/" component={BookShelfContainer}/>
    </Switch>
  );
}

export default App;
