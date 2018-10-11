document.addEventListener("DOMContentLoaded", () => {
  const buttonArea = document.getElementById('buttons')
  const multTable = document.getElementById('mult-table')
  createButtons()
  generateMultiplicationTable(1)

  let buttons = document.querySelectorAll('.multiplier')
  buttons.forEach(button => {
    console.log(button)
    button.addEventListener("click", (event) => {
      console.log("Clicked")
      let number = parseInt(event.target.innerText)
      generateMultiplicationTable(number)
    })
  })

  // debugger;

  function createButtons(){
    for (let i = 0; i <= 10; i++){
      buttonArea.innerHTML += `<button class="multiplier">${i}</button>`
      // let newButton = document.createElement('button');
      // newButton.className = "multiplier"
      // newButton.innerText = `${i}`
      // buttonArea.append(newButton)
    }
  }

    function generateMultiplicationTable(num){
      multTable.innerHTML = '';
      for (let i = 1; i <= 10; i++){
        let newRow = `<tr>
        <td>
          ${num} X ${i} = ${num*i}
        </td>
        </tr>`
        multTable.innerHTML += newRow;
      }
    }
















})
