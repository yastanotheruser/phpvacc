;(() => {
  const form = document.getElementById('vacc-form')
  const ident = document.getElementById('ident')
  const submit = document.getElementById('vacc-submit')

  const doRegister = async () => {
    const res = await fetch('registrar.php', {
      method: 'POST',
      body: new URLSearchParams(new FormData(form)),
      redirect: 'follow',
    })

    if (res.ok) {
      return res.json()
    }

    const err = new Error(res.statusText)
    err.response = res
    throw err
  }

  ident.addEventListener('invalid', function () {
    const v = this.validity
    if (v.patternMismatch) {
      this.setCustomValidity('La identificación debe contener solo números')
    } else {
      this.setCustomValidity('')
    }
  })

  submit.addEventListener('click', function (e) {
    e.preventDefault()
    if (!form.reportValidity()) {
      return
    }

    submit.disabled = true
    const timeout = setTimeout(() => {
      Swal.fire({
        title: 'Espere',
        html: 'Se está procesando su solicitud',
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
    }, 250)

    doRegister()
      .then(() => {
        Swal.fire('Correcto', 'Se ha guardado el registro', 'success')
      })
      .catch(() => {
        Swal.fire('Oops', 'No se pudo guardar el registro', 'error')
      })
      .finally(() => {
        submit.disabled = false
        clearTimeout(timeout)
      })
  })
})()
