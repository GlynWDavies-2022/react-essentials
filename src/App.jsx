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

  function setIsSelected(id) {
    return id === selectedTopic;
  }

  const { title, description, code } = EXAMPLES[selectedTopic];

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
            <TabButton onSelect={() => handleSelect('components')} isSelected={setIsSelected('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} isSelected={setIsSelected('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} isSelected={setIsSelected('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} isSelected={setIsSelected('state')}>State</TabButton>
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
