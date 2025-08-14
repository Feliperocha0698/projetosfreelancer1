//DEIXA O MENU LATERAL CLICAVEL
const menuLateral = document.querySelector('.menu-lateral');
const iconeMenu = menuLateral.querySelector('.material-symbols-outlined');

iconeMenu.addEventListener('click', () => {
  menuLateral.classList.toggle('ativo');
});

document.addEventListener("DOMContentLoaded", function () {
  const iconeSearch = document.getElementById('icone-search');
  const barraPesquisa = document.getElementById('barra-pesquisa');

  iconeSearch.addEventListener('click', function () {
    barraPesquisa.classList.toggle('ativo');
  });
});

//JS CARRINHO DE COMPRAS INTERATIVOS
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".item-checkbox");
  const carrinho = document.querySelector(".carrinho");
  const contador = document.getElementById("contador-carrinho");

  function atualizarContador() {
    const total = [...checkboxes].filter(cb => cb.checked).length;
    contador.textContent = total;
    carrinho.classList.toggle("ativo", total > 0);
  }

  checkboxes.forEach(cb => cb.addEventListener("change", atualizarContador));
});
//DAR O ALERTA DO BOTÃO USUARIO
document.querySelector(".btn-usuario").addEventListener("click", () => {
  alert("👤 Área do usuário ainda não disponível.");
});

//DAR O ALERTA DO BOTÃO DE PEDIDOS FAVORITOS
document.querySelector(".btn-favoritos").addEventListener("click", () => {
  alert("❤️ Você ainda não tem pedidos favoritos.");
});

//DAR O ALERTA DO BOTÃO DAS CONFIGURAÇÕES
document.querySelector(".btn-config").addEventListener("click", () => {
  alert("⚙️ Configurações em construção. Em breve disponível!");
});

//DAR O ALERTA DO BOTÃO PARA SAIR
document.querySelector(".btn-sair").addEventListener("click", () => {
    alert("Você saiu com sucesso.");
}); 