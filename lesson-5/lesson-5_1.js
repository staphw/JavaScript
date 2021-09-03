// Задание 1
// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)

"use strict";

const settings = {
	rowCount: 9,
	colCount: 9,
	rowName: '87654321',
	colName: 'ABCDEFGH',
};

const board = {
	settings,
	containerElement: null,
	cellElements: [],
	
	run () {
		this.init();
	},
	
	init() {
		this.containerElement = document.getElementById('board');
		this.initCells();
	},
	
	initCells() {
		this.containerElement.innerHTML = '';
		this.cellElements = [];
		
		for (let row = 0; row < this.settings.rowCount; row++) {
			const trElem = document.createElement('tr');
			this.containerElement.appendChild(trElem);
			
			for (let col = 0; col < this.settings.colCount; col++) {
				const cell = document.createElement('td');
				
				if (col === 0 && row < this.settings.rowCount - 1) {
					cell.textContent = this.settings.rowName[row];
				}
				
				else if (col > 0 && row === this.settings.colCount - 1) {
					cell.textContent = this.settings.colName[col - 1];
				}
				
				else if (col !== 0) {
					cell.style.backgroundColor = ((row + col) % 2 !== 0) ? 'white' : 'black';
					cell.style.border = '1px solid black';
				}
				
				trElem.appendChild(cell);
				
				this.cellElements.push(cell);
			}
		}
	},
};

board.run();
