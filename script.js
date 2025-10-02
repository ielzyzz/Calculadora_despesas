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
  // Valor total 
  document.getElementById('saldo').textContent = saldo.toFixed(2);


  const saldoDisponivelInput = document.getElementById('saldoDisponivel');
  const saldoDisponivel = parseFloat(saldoDisponivelInput.value);

  // saldo disponivel - total produtos
  let restante = 0;
  if (!isNaN(saldoDisponivel)) {
    restante = saldoDisponivel - saldo;
  }

  // saldo restante
  document.getElementById('saldoRestante').textContent = restante.toFixed(2);
}

    // mostrar a secao oculta
function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');

  secoes.forEach(secao => {
    if (secao.id === id) {
      secao.classList.remove('escondido');
    } else {
      secao.classList.add('escondido');
    }
  });
}
