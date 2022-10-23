import './App.css';
import './composants/Commentaire.js';
import './composants/Pictogramme.js';


class App extends React.Component {
  render() {
  return (
    <div class="col-6 offset-3">
      <div class="card">
        <div class="card-block">
          <div class="row">
            <div class="col-2">
              <img src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"  class="rounded float-left img-thumbnail" width="80" height="70" />
            </div>
            <div class="col-10 profile-row">
              <div class="row">
                <a href="#"><h1> Débuter avec React </h1></a>
              </div>
            </div>
          </div>
          <p>Bonne découverte des composants React "Components!!!"</p>
      
          <div>
            <Pictogramme />
          </div>
        </div>
  
        <div class="card-footer text-muted">
         <Commentaire />
        </div>
  
      </div>
    </div>
      )
  }
  }

export default App;
