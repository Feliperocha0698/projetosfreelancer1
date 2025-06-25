document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.querySelector('.dados');
    const resultDiv = document.createElement("div");
    resultDiv.id = "resultado";
    document.querySelector('.principal').appendChild(resultDiv);    
 
    formulario.addEventListener('submit', function(e){
       e.preventDefault();
       limparErros();
 
       const nome = document.getElementById("nome");
       const sobrenome = document.getElementById("sobrenome");
       const email = document.getElementById("email");
       const telefone = document.getElementById("telefone");
       const cidade = document.getElementById("cidade");
       const estado = document.getElementById("estado");
       const sobre = document.getElementById("sobre");
       const curriculo = document.getElementById("curriculo");
 
       let isValid = true;
 
       // ✅ Validação de campos obrigatórios
       [nome, sobrenome, cidade, estado, sobre].forEach(input => {
          if (input.value.trim() === "") {
             mostrarErro(input, "Campo obrigatório");
             isValid = false;
          }
       });
 
       // ✅ Validação de email
       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){
          mostrarErro(email, "Email inválido");
          isValid = false;
       }
 
       // ✅ Validação de telefone
       if (!/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/.test(telefone.value.trim())) {
          mostrarErro(telefone, "Telefone inválido (Ex: (11) 91234-5678)");
          isValid = false;
       }
 
       // ✅ Validação da área (radio)
       const areaSelecionada = document.querySelector('input[name="area"]:checked');
       if (!areaSelecionada) {
          alert("Selecione sua área de atuação.");
          isValid = false;
       }
 
       // ✅ Validação de tecnologias (checkbox)
       const tecnologias = [];
       document.querySelectorAll('input[name="tecnologia[]"]:checked').forEach(el => {
          tecnologias.push(el.value);
       });
       if (tecnologias.length === 0) {
          alert("Selecione pelo menos uma tecnologia.");
          isValid = false;
       }
 
       // ✅ Validação do currículo (PDF)
       const arquivo = curriculo.files[0];
       if (arquivo && !arquivo.name.toLowerCase().endsWith(".pdf")) {
          alert("Envie apenas arquivos .pdf");
          isValid = false;
       }
 
       // ✅ Se tiver erro, para tudo
       if (!isValid) {
         alert("Preencha o formulário corretamente.");
         return;
       }
 
       // ✅ Mostrar dados na tela
       resultDiv.innerHTML = `
          <h2>Dados enviados:</h2>
          <p><strong>Nome:</strong> ${nome.value}</p>
          <p><strong>Sobrenome:</strong> ${sobrenome.value}</p>
          <p><strong>Email:</strong> ${email.value}</p>
          <p><strong>Telefone:</strong> ${telefone.value}</p>
          <p><strong>Cidade:</strong> ${cidade.value}</p>
          <p><strong>Estado:</strong> ${estado.value}</p>
          <p><strong>Área:</strong> ${areaSelecionada.value}</p>
          <p><strong>Tecnologias:</strong> ${tecnologias.join(", ")}</p>
          <p><strong>Sobre:</strong> ${sobre.value}</p>
          <p><strong>Currículo:</strong> ${arquivo ? arquivo.name : "Nenhum arquivo"}</p>
       `;
 
       alert("Formulário enviado com sucesso!");
       formulario.reset();
    });
 
    // Funções auxiliares
    function mostrarErro(input, mensagem) {
       const erro = document.createElement("span");
       erro.className = "erro";
       erro.style.color = "red";
       erro.textContent = mensagem;
       input.style.border = "2px solid red";
       input.parentNode.insertBefore(erro, input.nextSibling);
    }
 
    function limparErros() {
       document.querySelectorAll(".erro").forEach(el => el.remove());
       document.querySelectorAll("input, textarea").forEach(el => el.style.border = "");
    }
 });
 