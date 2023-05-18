// Если открыть index.html в браузере, то можно увидеть страницу, на которой выведены несколько фраз в виде одной строки.
// Если открыть исходный код страницы прямо в браузере, то там эти же фразы выводятся друг под другом, а не одной строкой.
// Подобное различие связано с тем, что браузер не учитывает переводы строк в исходном HTML при формировании страницы.
// Его волнует только наличие тегов. Только теги влияют на то, что будет происходить. Сам HTML при этом может быть одной строкой.
// Задача этого упражнения — навести красоту на странице.
// Обратите внимание, что JavaScript отрабатывает после того, как страница была сформирована.
// Сначала пользователь видит одну строку, и только затем выполняется преобразование.
// Это происходит быстро, поэтому начальное состояние быстро пропадает, но сам переход заметен.

// Извлеките содержимое тега <body> и оберните каждую строку в тег <p>.
// Получившееся тело вставьте обратно.
// Чтобы получить из содержимого <body> независимые строки, нужно разбить тело по переводу строки.

// 1. Доступ к содержимому тега <body> выполняется через свойство document.body.innerHTML — из него можно читать и в него можно писать
// 2. Лишние пробелы и переводы строк удаляются с помощью метода trim()
// 3. Ваш код должен выполняться — это значит, что если вы оборачиваете решение в функцию, то ее нужно вызывать

// Ниже напишите ваше решение
// const body = document.body.innerHTML
// document.body.innerHTML = ''

// const p1 = document.createElement('p')
// p1.innerHTML = body
// const bodyP = document.body.appendChild(p1)
// const text = bodyP.textContent


const body = document.querySelector('body');
const text = body.innerHTML.trim().split('\n');

text.forEach((line) => {
  const p = document.createElement('p');
  p.textContent = line.trim();
  body.appendChild(p);
});


const bodyDel = document.innerHTML
bodyDel = ''