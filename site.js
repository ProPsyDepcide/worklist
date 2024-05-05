const inputINFO = document.createElement('input')
const keep = document.createElement('button')
const block = document.createElement('ul')
const deletethis = document.querySelector('.delete')
const editthis = document.querySelector('.edit')
const ul = document.querySelector('ul')
// --------------------------------------------------------------------------------------
inputINFO.setAttribute('type', 'text');
keep.setAttribute('type', 'button');
block.setAttribute('type', 'ul');
// --------------------------------------------------------------------------------------
document.body.append(inputINFO)
document.body.append(keep)
document.body.append(block)
// --------------------------------------------------------------------------------------
keep.innerHTML = 'добавить'
// --------------------------------------------------------------------------------------

const savedWorklist = JSON.parse(localStorage.getItem('worklist'));
const worklist = savedWorklist || [];

function addText() {
  block.innerHTML = "";

  worklist.forEach((c, index) => {
    block.innerHTML +=
     `<ul>${c}
     <button class="delete" data-index="${index}">Удалить</button>
     <button class="edit" data-index="${index}">Редактировать</button>
     </ul>`;
  });

  localStorage.setItem('worklist', JSON.stringify(worklist));
}

keep.addEventListener('click', (e) => {
  e.preventDefault();
  let zametka = inputINFO.value;

  if (zametka) {
    worklist.push(zametka);
    addText();
    inputINFO.value = '';
  }
});

block.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const index = e.target.dataset.index;
    worklist.splice(index, 1);
    addText();
  }
});

 block.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
          const index = e.target.dataset.index;
          const textContent = e.target.textContent;
          const newinput = document.createElement('input');
          newinput.setAttribute('type', 'text');
          newinput.value = textContent;
          const yesedit = document.createElement('button');
          yesedit.textContent = "Изменить";
          document.body.append(newinput);
          document.body.appendChild(yesedit);
    
          yesedit.addEventListener('click', (r) => {
              r.preventDefault();
              const newText = newinput.value;
              worklist[index] = newText; 
              addText(); 
              yesedit.parentNode.removeChild(yesedit);
              newinput.parentNode.removeChild(newinput);
          });
        }
    });
    
    addText()
    

addText();