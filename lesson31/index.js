// В Bootstrap есть компонент nav — обязательно перейдите по ссылке и покликайте по нему.
// Один из вариантов этого компонента — это табы, которые переключаются по нажатию без перезагрузки страницы:

// <nav>
//     <div class="nav nav-tabs">
//         <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">Home</button>
//         <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">Profile</button>
//     </div>
// </nav>
// <div class="tab-content">
//     <div class="tab-pane active" id="home">Home tab</div>
//     <div class="tab-pane" id="profile">Profile tab</div>
// </div>
// По клику на таб происходит следующее:

// Класс active снимается с текущего элемента меню и активного блока с данными
// Класс active добавляется табу, по которому кликнули и соответствующему блоку с данными
// Сопоставление таба и блока данных идет по идентификатору, который прописывается в атрибут табов data-bs-target. По клику на таб код должен извлечь id, найти соответствующий элемент и сделать его активным. При этом важно не забыть снять класс active с таба и с блока, которые были активными до клика.

// Реализуйте логику переключения табов. Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов nav.

// Подсказки
// В коде можно использовать глобальный объект document
// Селектор по data элементам [data-toggle], например: document.querySelectorAll('h1[data-key]');
// Получить необходимый атрибут data можно через dataset
// Постарайтесь не завязываться на конкретные идентификаторы и элементы
// Вы можете использовать другой метод извлечения списка — например, document.getElementsByClassName(). При этом обратите внимание, что он возвращает HTMLCollection, а не NodeList. HTMLCollection не поддерживает метод forEach(). Однако вы можете привести такой список к массиву — например, используя Array.from()
// Переключение должно работать на любой реализации — и с использованием button, и на div

function solution() {
  const navsBlock = document.querySelectorAll('.nav')
  
  const handler = (container) => (event) => {
    const targetTab = event.target;
    const targetContentId = targetTab.dataset.bsTarget;
    const targetContent = document.querySelector(targetContentId);
    if (targetTab.classList.contains("active")) return;
    const activeTab = container.querySelector(".active");
    const activeContentId = activeTab.dataset.bsTarget;
    const activeContent = document.querySelector(activeContentId);
    activeTab.classList.remove('active');
    activeContent.classList.remove('active');
    targetTab.classList.add('active');
    targetContent.classList.add('active')
  }

  navsBlock.forEach((navBlock) => {
   const tabs = navBlock.children;
   [...tabs].forEach((tab) => {
    tab.addEventListener('click', handler(navBlock));
      
    
   });
  });
}

solution();
