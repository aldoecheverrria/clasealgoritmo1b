import './App.css';
import Reto1 from './Reto1'
import Reto2 from './Reto2';

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <header className="index__module--header">
          <hgroup >
          <h2><span>Test</span> <span>Your</span> <span>Skills</span></h2>
          </hgroup>
          <hr/>
          <div className="index__module--interior">
          <p>Test your skills with an increasing levels of challenge with this website (with academic goals only)</p>
          <hr/>
          <p>This page is a collection of ReactJS challenge's. At is core, 
            we see JavaScript lying at the bottom, and thats good. Leave
            a thumbs up if you like it. Inspired on Hackernoon and the book "Let Us C"
          </p>
          <hr/>
          <nav className="index__module--navigation">
            <a>See more solutions on YouTube</a>
            <a>Suggest a challenge</a>
            <a>Get updates</a>
            <a>Contact me</a>
          </nav>
        </div>

          
        </header>
      <div className="index__module--body">
        
        <main className="index__module--content">
          <section>
            <article className="index__module--article">
              <header>
                <h2>Print numbers increasingly</h2>
                <p>We need to print numbers from one to twenty</p>
              </header>
              
              <div className="index__module--solution">
                <h1>Reto 1</h1>
                <Reto1/>
                <h1>Reto 2</h1>
                <Reto2/>
              </div>
            </article>
          </section>
        </main>
        

      </div>
      </div>
      
   
    </div>
  );
}

export default App;
