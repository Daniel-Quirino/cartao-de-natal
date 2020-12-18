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
            alt='Header da página com a junção das fotos de varias tribos e eventos da dti'
            class='header'
        />
      </div>
      <div class='row'>
        <div class='bug-alig'>
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

        <div class='noel'> 
          <img
              src={arvore} 
              alt='arvore de natal'
              class='imagem'
            />
            <img
              src={treno} 
              alt='treno de papai noel'
              class='imagem'
            />
            <img
              class='tribos'
              src={poloNorte} 
              alt='treno de papai noel'
              class='imagem'
            />
        </div>


      </div>
      <div class="snow layer1 a"></div>
      <div class="snow layer1"></div> 
      <div class="snow layer2 a"></div>
      <div class="snow layer2"></div>
      <div class="snow layer3 a"></div>
      <div class="snow layer3"></div>

      <div class='bug-alig'>
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
