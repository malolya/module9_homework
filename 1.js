const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString (xmlString, 'text/xml');
const studentNode = xmlDOM.querySelectorAll ('student');

let list = [];
studentNode.forEach(item => {
     list.push({
     name: item.querySelector('first').textContent,
     age: item.querySelector('age').textContent,
     prof: item.querySelector('prof').textContent,
     lang: item.querySelector('name').getAttribute('lang')
     })
  });
console.log (list);


















const resultNode = document.querySelector('.j-result');
   
   const btn = document.querySelector('.j-btn-request');

   
   btn.addEventListener('click', () => {
       const value1 = document.getElementById('page').value;
       const value2 = document.getElementById('limit').value;
       let s = document.getElementById('result');
       s.textContent = '';
       if (!(value >= 1 && value <= 10)) {
           s.textContent = 'число вне диапазона от 1 до 10';
           return;
       }
       else {
           fetch(`https://picsum.photos/v2/list?page=${value}`)
               .then((response) => {
                   document.getElementById('result').src = response.url;
               });
           console.log(result);
       }
   });
</script>

</html>
   