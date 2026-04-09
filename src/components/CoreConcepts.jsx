import CoreConcept from './CoreConcept';

import { CORE_CONCEPTS } from '../data/data';

function CoreConcepts() {
    return (
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
    )
}

export default CoreConcepts
