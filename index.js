
const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');
 
select.addEventListener('change', () => {
  let choice = select.value;
  let days;
  
  switch (choice) {
    case 'Abril':
    case 'Junio':
    case 'Septiembre':
    case 'Noviembre':
      days = 30;
      break;
    case 'Febrero':
      days = 28;
      break;
    default:
      days = 31;
  }
    createCalendar(days, choice);
   });
  function createCalendar(days, choice) {
    list.innerHTML =  '' ;//remplasando con una cadena vasia el list
    h1.textContent = choice;////asigna el nombre del mes al h1
    for (let i = 1; i <= days; i++) {
      const listItem = document.createElement('li');//creamos un elemento li
      listItem.textContent = i;
      list.appendChild(listItem);// le asignamos el valor al elemento li , en este 
    }
  }
  
 
 



