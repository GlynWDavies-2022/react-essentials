import CoreConcept from './CoreConcept';

import { CORE_CONCEPTS } from '../data/data';

function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                img={concept.image}
              />
            ))}
        </ul>
        </section>
    )
}

export default CoreConcepts
