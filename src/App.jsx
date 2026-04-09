import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <CoreConcepts />
        </section>
      </main>
    </div>
  );
}

export default App;
