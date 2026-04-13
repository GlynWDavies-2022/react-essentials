import { useState } from 'react';

import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header';
import TabButton from './components/TabButton';

import { EXAMPLES } from './data/data';

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const { title, description, code } = EXAMPLES[selectedTopic] || {};

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <CoreConcepts />
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton id="components" onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton id="jsx" onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton id="props" onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton id="state" onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}


export default App;
