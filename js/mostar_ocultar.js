document.addEventListener('DOMContentLoaded', function () {
      const toggleBtn = document.querySelector('.toggle-password');
      const senhaInput = document.getElementById('senha');
      const olhoIcone = toggleBtn.querySelector('i');

      toggleBtn.addEventListener('click', function () {
        const isVisible = senhaInput.type === 'text';

        senhaInput.type = isVisible ? 'password' : 'text';
        olhoIcone.classList.toggle('bi-eye', !isVisible);
        olhoIcone.classList.toggle('bi-eye-slash', isVisible);

        toggleBtn.setAttribute('aria-label', isVisible ? 'Mostrar senha' : 'Ocultar senha');
        toggleBtn.setAttribute('aria-pressed', String(!isVisible));
      });
    });


