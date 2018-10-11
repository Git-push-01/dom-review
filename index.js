document.addEventListener("DOMContentLoaded", () => {
	const buttonArea = document.querySelector('#buttons')
	const tableArea = document.querySelector('#mult-table')
	createButtons()
	createTable()


	function createButtons() {
		for (let i = 1; i <= 10; i++) {
			const newButton = document.createElement('button')
			newButton.innerText = i
			newButton.className = "multiplier"
			newButton.addEventListener("click", (event) => {
				let number = parseInt(event.target.innerText)
				createTable(number)
			})
			buttonArea.append(newButton)
		}
	}

	function createTable(number = 1) {
		tableArea.innerHTML = ''
		for (let i = 1; i <= 10; i++) {
			// const newRow = document.createElement('tr')
			tableArea.innerHTML += `<tr><td>
      ${number} X ${i} = ${i*number}
    </td></tr>`
		}
	}
})
