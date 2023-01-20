function validar(){
    var nome_login=form.nome_login.value;
    var email_login=form.email_login.value;

    if(nome_login == ""){
      alert("Preencha o campo Email.");
      form.nome_login.focus();
      return
    }
}

/*------------------------------------------------*/
// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");
const youtubeLink = document.querySelector(".youtubeLink");

WebCifarIcon.addEventListener("click", () => {
  WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
  WebCifarEl.classList.remove("active");
});

