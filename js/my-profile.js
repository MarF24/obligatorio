document.addEventListener("DOMContentLoaded", function(e){
    showPerfil()




})
let container = document.getElementById("mainContainer")

function showPerfil(){

    htmlToAppend = `<br>
    <h3>Perfil</h5>
    <hr>
    <form class="row g-3 m-3 needs-validation" novalidate>
      <div class="col-6">
        <label for="nameId" class="form-label">Nombre*</label>
        <input type="text" class="form-control" id="nameId" value= "" required>
        <div class="valid-feedback">
          Es correcto
        </div>
        <div class="invalid-feedback">
          Campo obligatorio
        </div>
      </div>
      <div class="col-6">
        <label for="nameId2" class="form-label">Segundo Nombre</label>
        <input type="text" class="form-control" id="nameId2" value= "">
        <div class="valid-feedback">
          Es correcto
        </div>
        <div class="invalid-feedback">
          Campo obligatorio
        </div>
      </div>
      <div class="col-6">
        <label for="lastName" class="form-label">Apellido*</label>
        <input type="text" class="form-control" id="lastName" value= "" required >
        <div class="valid-feedback">
          Es correcto
        </div>
        <div class="invalid-feedback">
          Campo obligatorio
        </div>
      </div>
      <div class="col-6">
        <label for="lastName2" class="form-label">Segundo Apellido</label>
        <input type="text" class="form-control" id="lastName2" value= "">
        <div class="valid-feedback">
          Es correcto
        </div>
        <div class="invalid-feedback">
          Campo obligatorio
        </div>
      </div>
      <div class="col-6">
        <label for="email" class="form-label">Email*</label>
        <input type="text" class="form-control" id="email" value= "" required >
        <div class="valid-feedback">
          Es correcto
        </div>
        <div class="invalid-feedback">
          Campo obligatorio
        </div>
      </div>
      <div class="col-6">
        <label for="phone" class="form-label">Telefono</label>
        <input type="text" class="form-control" id="phone" value= "">
        <div class="valid-feedback">
          Es correcto
        </div>
        <div class="invalid-feedback">
          Campo obligatorio
        </div>
      </div>
      <button class="btn btn-primary">Enviar</button>

    </form>
    <br>
    <hr>`
    
    container.innerHTML = htmlToAppend
    
    
    /////////////////
    BSCheck()
    let name1 = document.getElementById("nameId")
    let name2 = document.getElementById("nameid2")
    let lastName = document.getElementById("lastName")
    let lastName2 = document.getElementById("lastName2")
    let email = document.getElementById("email")
    let phone = document. getElementById("phone")
}

function BSCheck() {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
            event.preventDefault()
            
            
            }, false)
        })
    })()
}





