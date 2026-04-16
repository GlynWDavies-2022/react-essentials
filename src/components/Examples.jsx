import { useState } from 'react';

import TabButton from './TabButton';

import { EXAMPLES } from '../data/data';

function Examples() {

    const [ selectedTopic, setSelectedTopic ] = useState('components');
    
    const { title, description, code } = EXAMPLES[selectedTopic];

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    function setIsSelected(id) {
        return id === selectedTopic;
    }

    return (
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
    )
}

export default Examples
