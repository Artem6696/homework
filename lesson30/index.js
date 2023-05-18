// В этом задании нужно реализовать логику добавления алертов по клику на кнопку.

// Изначально на странице есть одна кнопка. Верстка выглядит так:

// <button id="alert-generator" class="btn btn-primary">Generate Alert</button>
// <div class="alerts m-5"></div>

// После клика на кнопку в контейнер с классом alerts добавляется алерт Alert 1:

// <div class="alerts m-5">
//   <div class="alert alert-primary">Alert 1</div>
// </div>

// Последующий клик добавляет новый алерт сверху:

// <div class="alerts m-5">
//   <div class="alert alert-primary">Alert 2</div>
//   <div class="alert alert-primary">Alert 1</div>
// </div>

// Каждый клик добавляет новый алерт, меняя число в его имени.

// Реализуйте и установите обработчик события click на кнопке по логике выше.

// Подсказки
// Саму кнопку можно получить в коде через ее id

// После выполнения задания подумайте, как добавить возможность скрывать алерты
const btn = document.getElementById('alert-generator')

const container = document.querySelector('.alerts');

btn.addEventListener('click', () => {
    const newAlert = document.createElement('div');
    newAlert.classList.add('alert', 'alert-primary')
    const childContainer = container.children.length + 1
    newAlert.textContent = 'Alert ' + childContainer
    container.prepend(newAlert)
})