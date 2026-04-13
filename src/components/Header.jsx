// [N] If you are 'pushing' styles, you only have to import the CSS file itself
// [N] If you are pulling styles, you have to do a named import of the CSS module object and then use that object to access the styles:
// [E] import styles from './Header.module.css'; and then use styles.header, styles.title, etc. in the JSX

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
