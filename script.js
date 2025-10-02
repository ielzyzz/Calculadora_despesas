let saldo = 0;

document.getElementById("btn").addEventListener('click', function () {
  const nome = document.getElementById('text').value;
  const valor = parseFloat(document.getElementById('value').value);

  if (nome && !isNaN(valor) && valor > 0) {
    const lista = document.getElementById('lista-produtos');
    const item = document.createElement('li');


    const textoItem = document.createElement('span');
    textoItem.textContent = `${nome} - R$ ${valor.toFixed(2)}`;

    const btnRemover = document.createElement('button');
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("remove-btn");

   
    btnRemover.addEventListener('click', function () {
      lista.removeChild(item);
      saldo -= valor;
      atualizarSaldo();
    });

    item.appendChild(textoItem);
    item.appendChild(btnRemover);
    lista.appendChild(item);

    saldo += valor;
    atualizarSaldo();

    document.getElementById('text').value = '';
    document.getElementById('value').value = '';
  } else {
    alert("Preencha corretamente os campos.");
  }
});

function atualizarSaldo() {
  document.getElementById('saldo').textContent = saldo.toFixed(2);
}
