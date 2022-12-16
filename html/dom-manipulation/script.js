const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}


/* New code added for TOp exercise */

/* red p element properties*/
const redP = document.createElement('p');
redP.textContent = "Hey, I'm red!";
redP.style.color = 'red';

/* blue h3 element properties*/
const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = 'blue';

/* Add p and h3 elements to document, will show up below list entry box*/
document.body.appendChild(redP);
document.body.appendChild(blueH3);

/* new div with children and properties, then append in right order */

const newDiv = document.createElement('div');
newDiv.style.cssText = "background-color:pink; padding: 10px;border: 10px solid black;"

const anotherH1 = document.createElement('h1');
anotherH1.textContent = "I'm in a div!";

const anotherP = document.createElement('p');
anotherP.textContent = "ME TOO";

newDiv.appendChild(anotherH1);
newDiv.appendChild(anotherP);
document.body.appendChild(newDiv);



