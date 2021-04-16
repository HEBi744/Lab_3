import 'regenerator-runtime/runtime';
import React from 'react'; // https://ru.reactjs.org
import ReactDOM from 'react-dom'; // https://ru.reactjs.org/docs/react-dom.html

import App from './app';

// TODO, YELLOW TEAM 
async function getData () {
    try {
        // https://learn.javascript.ru/fetch
        // https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
        const response  = await fetch('http://localhost:3000/courses');
        const courses = await response.json();
        console.log(courses);
        return { 
            something: "Строчка из пропсов",
            courses   
        }
    } catch(error) { 
        return { 
            something: "Строчка из пропсов",
            courses: { error, entries: [] }   
        }
    }
};

const data = getData();



// React-Router, may be

// data.then((value) => {
//     const el = document.getElementById('app');
//     const reactApp = React.createElement(App, value);
//     ReactDOM.render(
//         reactApp,
//         el
//     );
// })



//pink

let myButton =  document.getElementById("my_button");

myButton.addEventListener("click", 
    async (event) => {
        let radios = document.getElementsByName('answer[1]');

        for (let i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            // do whatever you want with the checked radio
            alert(radios[i].value);
        
            // only one radio can be logically checked, don't check the rest
            break;
          }
        }
        let radios1 = document.getElementsByName('answer[2]');

        for (let i = 0, length = radios1.length; i < length; i++) {
          if (radios1[i].checked) {
            // do whatever you want with the checked radio
            alert(radios1[i].value);
        
            // only one radio can be logically checked, don't check the rest
            break;
          }
        }
        let radios2 = document.getElementsByName('answer[]');

        for (let i = 0, length = radios2.length; i < length; i++) {
          if (radios2[i].checked) {
            // do whatever you want with the checked radio
            alert(radios2[i].value);
        
            // only one radio can be logically checked, don't check the rest
            break;
          }
        }
        let data = { testMsg: "ну тут я данные какие-то отправил"}; //данные сюда

        const response  = await fetch('http://localhost:3000/results/', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify([]) // body data type must match "Content-Type" header
          });
        const json = await response.json();

        console.log(json);
    }
);