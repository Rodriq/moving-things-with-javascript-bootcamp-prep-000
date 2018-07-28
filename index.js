const app = "I don't do much."

describe('index', () => {
  
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })
  

  it('runs', () => {
    expect(true).to.be.true
  })
})

var dodger = document.getElementById('dodger')
function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
 
  if (right > 0) {
    dodger.style.right = `${right + 1}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which === 38) {
    moveDodgerRight()
  }
})