import React from 'react';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Contact avatar="https://i.pinimg.com/originals/47/da/56/47da56e41f6a2984d102877c580b315d.jpg" name="Walter White" online />
      <Contact avatar="https://cdna.artstation.com/p/assets/images/images/013/585/110/large/abdelrahman-kubisi-main-final.jpg?1540281037" name="Mike"  />
      <Contact avatar="https://cdn-biiinge.konbini.com/files/2017/04/gusrfring.jpg" name="Gus"  />
    </div> 
  );
}

export default App;
