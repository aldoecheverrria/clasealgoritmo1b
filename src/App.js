import './App.css';
import Reto1 from './Challenges/Reto1'
import Reto2 from './Challenges/Reto2';
import Reto3 from './Challenges/Reto3';
import Reto4 from './Challenges/Reto4';
import Reto5 from './Challenges/Reto5';
import Reto6 from './Challenges/Reto6';
import Reto7 from './Challenges/Reto7';
import Reto8 from './Challenges/Reto8';
import Reto9 from './Challenges/Reto9';

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <header className="index__module--header">
          <hgroup >
          <h2>Test Your Skills</h2>
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
                <h2>Here is a list of all the challenges</h2>
                <p>Instructions: read the instructions carefully and try to type the code that solves the challenge in the TextArea</p>
              </header>
              
              <div className="index__module--solution">
                <br/>
                <h1>Challenge 1</h1>
                <Reto1/>
                <h1>Challenge 2</h1>
                <Reto2/>
                <h1>Challenge 3</h1>
                <Reto3/>
                <h1>Challenge 4</h1>
                <Reto4/>
                <h1>Challenge 5</h1>
                <Reto5/>
                <h1>Challenge 6</h1>
                <Reto6/>
                <h1>Challenge 7</h1>
                <Reto7/>
                <h1>Challenge 8</h1>
                <Reto8/>
                <h1>Challenge 9</h1>
                <Reto9/>
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
