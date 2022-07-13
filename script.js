function adicionarIngrediente(){
    ingrediente = document.getElementsByTagName('input')[0].value;
    lista = document.getElementById('lista').innerHTML;
    lista = lista + "<li>" + ingrediente + "</li>";
    document.getElementById('lista').innerHTML = lista;
    document.getElementsByTagName('input')[0].value = "";
}