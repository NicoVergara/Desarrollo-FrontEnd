let lista = document.getElementsByTagName('li');
Array.from(lista).find(function(node) {
  if (node.className == 'active') {
    console.log(node.innerHTML);
    node.style.color = 'red';
  }
});
