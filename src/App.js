import './App.scss';
import treno from './treno.gif'
import bug from './bug.gif'
import arvore from './assets/arvore.gif'
import poloNorte from './assets/polo-norte.gif'
import header from './assets/header.png'

function App() {
  return (
    <div class="wrapper">
      <div class='border-div'>
        <img
            src={header} 
            alt='Bug andando'
            class='header'
        />
      </div>
      <div class='row'>
        <div class='collunm'>
          <img
              src={bug} 
              alt='Bug andando'
              class='bug'
          />

          <img
              src={bug} 
              alt='Bug andando'
              class='bug'
          />


          <img
              src={bug} 
              alt='Bug andando'
              class='bug'
          />

        </div>
        

<div class='treno'>
      <h1 class='texto'> Feliz Natal</h1>

        <div class='row'> 
        <img
            src={arvore} 
            alt='treno de papai noel'
          />
          <img
            src={treno} 
            alt='treno de papai noel'
          />
          <img
            class='tribos'
            src={poloNorte} 
            alt='treno de papai noel'
          />
        </div>


      </div>
      <div class="snow layer1 a"></div>
      <div class="snow layer1"></div> 
      <div class="snow layer2 a"></div>
      <div class="snow layer2"></div>
      <div class="snow layer3 a"></div>
      <div class="snow layer3"></div>

      <div class='collunm'>
          <img
              src={bug} 
              alt='Bug andando'
              class='bug'
          />

          <img
              src={bug} 
              alt='Bug andando'
              class='bug'
          />

          <img
              src={bug} 
              alt='Bug andando'
              class='bug'
          />
        </div>



      </div>


    </div>
  );
}

export default App;
