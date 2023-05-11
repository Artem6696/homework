const div1 = document.createElement('div')
const div2 = document.createElement('div')
const body = document.querySelector('body')
const heading = document.createElement('h1')
const heading1 = document.createElement('h2')
const div3 = document.createElement('div')



const ul = `
        <ul>
        <li>Текст</li>
        <li>Текст</li>
        <li>Текст</li>
        </ul>
`;
div3.innerHTML = ul;
console.log(div3);

body.appendChild(div1)
div1.classList.add('Text_Content_1')
div2.classList.add('Text_Content_2')
body.appendChild(div2)
body.appendChild(div3)
div1.appendChild(heading)
div2.appendChild(heading1)
heading.textContent = 'Первый текстовый узел'
heading1.textContent = 'Второй текстовый узел'