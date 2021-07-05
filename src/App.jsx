import React from 'react';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  var logo = `
   _          _               
  (_)        | |              
   ___      _| |__   __ _ ___ 
  | \\ \\ /\\ / / '_ \\ / _' / __|
  | |\\ V  V /| |_) | (_| \\__ \\
  |_| \\_/\\_/ |_.__/ \\__,_|___/`;

  var fullname = `  
   ___  _ _     _                ______      _                          
  / _ \\| (_)   | |               |  _  \\    | |                         
 / /_\\ \\ |_ ___| |__   ___ _ __  | | | |__ _| |__  _   _ ___  _____   __
 |  _  | | / __| '_ \\ / _ \\ '__| | | | / _' | '_ \\| | | / __|/ _ \\ \\ / /
 | | | | | \\__ \\ | | |  __/ |    | |/ / (_| | |_) | |_| \\__ \\ (_) \\ V / 
 \\_| |_/_|_|___/_| |_|\\___|_|    |___/ \\__,_|_.__/ \\__, |___/\\___/ \\_/  
                                                    __/ |               
                                                   |___/                `;

  return (
    <>
      <Terminal command="whoami">
        <pre>{logo}</pre>
        <pre className="Fullname">{fullname}</pre>
      </Terminal>
      <Terminal command="info">
        <h3 className="ListHeader">Information:</h3>
        <ul className="List">
          <li>degree: BE;</li>
          <li>language: ru-ru, en-us;</li>
          <li>programming languages: JS, C++, Python, Dart;</li>
          <li>HTML, CSS;</li>
          <li>
            have experience in: ReactJS, ExpressJS, DjangoRestFramework,
            Flutter, PostgreSQL;
          </li>
        </ul>
      </Terminal>
      <Terminal command="apps"></Terminal>
      <Terminal command="contacts">
        <h3 className="ListHeader">Contacts:</h3>
        <ul className="List">
          <li>email: brexceed@gmail.com</li>
          <li>phone: +79673390852</li>
        </ul>
      </Terminal>
    </>
  );
}

export default App;
