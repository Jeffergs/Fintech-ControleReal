document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const emailError = document.getElementById('emailError');
  const senhaError = document.getElementById('senhaError');


  function mostrarErro(elementoErro, mensagem) {
    elementoErro.textContent = mensagem;
    elementoErro.style.display = 'block';
  }


  function limparErros() {
    [emailError, senhaError].forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });
  }

 
  form.addEventListener('submit', e => {
    let valid = true;
    limparErros();

    const emailVal = email.value.trim();
    const senhaVal = senha.value.trim();

    if (!emailVal) {
      mostrarErro(emailError, 'Por favor, preencha o campo e-mail.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      mostrarErro(emailError, 'Digite um e-mail válido.');
      valid = false;
    }

    if (!senhaVal) {
      mostrarErro(senhaError, 'Por favor, preencha a senha.');
      valid = false;
    } 

    if (!valid) e.preventDefault();
  });
});
