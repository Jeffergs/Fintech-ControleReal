document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.toggle-password').addEventListener('click', togglePassword);
});

function togglePassword() {
  const senhaInput = document.getElementById('senha');
  const toggleBtn = document.querySelector('.toggle-password');
  const olhoIcone = toggleBtn.querySelector('i');

  const senhaVisivel = senhaInput.type === 'text';

  if (senhaVisivel) {
    senhaInput.type = 'password';
    olhoIcone.classList.remove('bi-eye');
    olhoIcone.classList.add('bi-eye-slash');
    toggleBtn.setAttribute('aria-label', 'Mostrar senha');
    toggleBtn.setAttribute('aria-pressed', 'false');
  } else {
    senhaInput.type = 'text';
    olhoIcone.classList.remove('bi-eye-slash');
    olhoIcone.classList.add('bi-eye');
    toggleBtn.setAttribute('aria-label', 'Ocultar senha');
    toggleBtn.setAttribute('aria-pressed', 'true');
  }
}
