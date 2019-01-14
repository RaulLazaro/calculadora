const screen = document.getElementById('calculator__screen');
const current = document.getElementById('screen__current');
const result = document.getElementById('screen__result')
const keys = document.getElementById('calculator__keys')

current.textContent = '0'

const calculator = () => {
  if (!keys) return
  keys.addEventListener('click', e => {
    const t = e.target,
      d = t.dataset
    if (d.number) writeScreen(d.number)
    if (d.math) getMath(t, d.math)
    if (d.operation) getOperation(d.operation)
    screen.scrollTop = screen.scrollHeight
  })
}

const writeScreen = number => {
  current.textContent === '0' ?
    current.textContent = number :
    current.textContent += number
}

const getMath = (symbol, math) => {
  if (Number(current.textContent[current.textContent.length - 1]))
    current.textContent += '\n' + symbol.textContent + ' '
  else
    current.textContent = current.textContent.substring(0, current.textContent.length - 2) + symbol.textContent + ' '
}

const getOperation = operation => {
  switch (operation) {
    case 'clear':
      current.textContent = '0'
      break;
    case 'erase':
      current.textContent[current.textContent.length - 1] === ' ' ?
        current.textContent = current.textContent.substring(0, current.textContent.length - 3) :
        current.textContent = current.textContent.substring(0, current.textContent.length - 1)
      break;
    case 'percentaje':

      break;
    case 'equal':

      break;
    default:

  }
}

calculator()
