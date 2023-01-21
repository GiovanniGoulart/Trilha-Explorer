const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleString("pt-br").slice(0, -14)
  //const today = " 10/01"
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso🔴")
    return
  }

  alert("Adicionado com sucesso🟢")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("nlwSetup@habits", JSON.stringify(nlwSetup.data))
}
//const data = {
//run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
// water: ["01-04", "01-05"],
// food: ["01-01", "01-03"],}

const data = JSON.parse(localStorage.getItem("nlwSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
