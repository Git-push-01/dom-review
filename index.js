document.addEventListener("DOMContentLoaded", () => {
  let buttonArea = document.getElementById('buttons')
  let multTable = document.getElementById('mult-table')
  createButtons()
  createMultiplicationTable(1)
  let allButtons = document.querySelectorAll('.multiplier')

  allButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      let number = event.target.innerText
      console.log(number)
      multTable.innerHTML = ''
      createMultiplicationTable(number)
    })
  })

  function createButtons(){
    for (let i = 1; i <=10; i++){
      // buttonArea.innerHTML += `<button class="multiplier">${i}</button>`
      let newButton = document.createElement('button')
      newButton.innerText = `${i}`
      newButton.className = "multiplier"
      buttonArea.append(newButton)
    }
  }

  function createMultiplicationTable(number){
    for (let i = 1; i <= 10; i++){
      let newRow = `<tr><td>${i} X ${number} = ${i*number}`
      multTable.innerHTML += newRow
    }
  }





})

















