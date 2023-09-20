const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '=') {
            try {
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                resultInput.value = 'Error';
            }
        } else if (button.innerText === 'AC') {
            resultInput.value = '';
        } else {
            resultInput.value += button.innerText;
        }
    });
});











