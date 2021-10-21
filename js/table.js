const consultList = async () => {
  const res = await fetch('consultar.php', {
    method: 'POST',
    referrerPolicy: 'no-referrer',
  })
  if (res.ok) {
    return res.json()
  }
  const err = new Error(res.statusText)
  err.response = res
  throw err
}

$(document).ready(async function () {
  $('#listado').DataTable({
    data: await consultList(),
    columns: [
      { title: 'Identificación' },
      { title: 'Nombres' },
      { title: 'Apellidos' },
      { title: 'Tipo de biológico' },
      { title: 'Fecha de primera dosis' },
      { title: 'Fecha de segunda dosis' },
    ],
    "language": {
        "url": "https://cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json"
    }
  })
})
