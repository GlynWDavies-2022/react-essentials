import CoreConcept from './components/CoreConcept';
import Header from './components/Header';

import componentsImage from './assets/components.png';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title="Components" description="Building blocks of a React application" img={componentsImage} />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
