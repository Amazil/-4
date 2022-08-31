const wrapper = document.querySelector('.wrapper');

const items = [{
        title: 'Title 1',
        text: 'Paragraph 1',
        colorText: 'red',
    },
    {
        title: 'Title 2',
        text: 'Paragraph 2',
        colorText: 'blue',
    },
    {
        title: 'Title 3',
        text: 'Paragraph 3',
        colorText: 'green',
    }]
function create(items) {
     for (let index = 0; index < items.length; index++) {
        const p = document.createElement('p');
        const titl = document.createElement('h1');
         titl.innerHTML = items[index].title
         p.innerHTML = items[index].text;
         wrapper.appendChild(titl)
         wrapper.appendChild(p);
         p.style.color = items[index].colorText;
         titl.style.color = items[index].colorText;
     }
    }
   
create(items)



