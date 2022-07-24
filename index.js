const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8c1058ed1emshbb2226e92f3be3dp158afejsn09acff59f8db",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
}

const fetchData = (ip) => {
  return fetch(
    `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
    OPTIONS
  )
    .then((response) => response.json())
    .catch((err) => console.error(err))
}

const $form = document.querySelector("#form")
const $input = document.querySelector("#input")
const $submit = document.querySelector("#submit")
const $results = document.querySelector("#results")

$form.addEventListener("submit", async (e) => {
  e.preventDefault()
  const { value } = $input
  if (!value) return

  $submit.setAttribute("disabled", "")
  $submit.setAttribute("aria-busy", "true")

  const ipInfo = await fetchData(value)

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute("disabled")
  $submit.removeAttribute("aria-busy")
})
