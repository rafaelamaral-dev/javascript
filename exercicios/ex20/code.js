function clique() {
  const mes = prompt('Digite o mês por extenso (ex: Setembro)');
  if (mes === null) return; // usuário cancelou

  const tex = mes.trim().toLowerCase(); // remove espaços e fica tudo minusculo

  // selecione o elemento de resultado (ajuste o id se necessário)
  const res = document.getElementById('res');
  if (!res) {
    console.error('Elemento #res não encontrado no HTML');
    return; // sai da função se o elemento não existir. Veirifcação de segurança necessária para evitar erros.
  }

  let estacao = '';

  if (tex === 'janeiro' || tex === 'dezembro' || tex === 'fevereiro') {
    estacao = 'VERÃO';
  } else if (tex === 'março' || tex === 'abril' || tex === 'maio') {
    estacao = 'OUTONO';
  } else if (tex=== 'junho' || tex === 'julho' || tex === 'agosto') {
    estacao = 'INVERNO'
  } else if (tex=== 'setembro' || tex=== 'outubro' || tex=== 'novembro') {
    estacao = 'PRIMAVERA'
  } else {
    res.innerHTML = `<mark>${mes.trim()}</mark> não é um mês válido! Tente novamente.`;
    return; // sai da função se o mês for inválido
  }

  res.innerHTML = `No mês de <mark>${mes.trim()}</mark>, estamos na estação
    <strong>
      <mark>${estacao}</mark>
    </strong>
  !`;
}