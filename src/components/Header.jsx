function Header() {

    const keywords = ['Core', 'Crucial', 'Vital', 'Key', 'Important', 'Essential', 'Fundamental', 'Critical', 'Necessary', 'Indispensable'];

    return (
        <header>
          <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
          <h1>React Essentials</h1>
              <p>
                {getRandomKeyword()} React concepts you will need for almost any app you are
            going to build!
          </p>
      </header>
    )
}

function getRandomKeyword() {

    const keywords = ['Core', 'Crucial', 'Vital', 'Key', 'Important', 'Essential', 'Fundamental', 'Critical', 'Necessary', 'Indispensable'];

    return keywords[Math.floor(Math.random() * keywords.length)];
}

export default Header
