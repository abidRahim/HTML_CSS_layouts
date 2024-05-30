

    const cal = document.querySelector('.cal')
    const display = cal.querySelector('.display');
    const buttons = cal.querySelector('.btn');

    let num = '';
    let operator = '';
    let num1 = '';
   
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            //console.log(e)
            const btntxt = button.textContent;
            
            if (button.classList.contains('number')) {
                num += btntxt; 
                display.textContent = num;
            }
            if (button.classList.contains('operator')) {
                operator = btntxt;
                num1 = num;
                num = '';
            }
            if (button.classList.contains('clear')) {
                num = '';
                num1 = '';
                operator = '';
                display.textContent = '0';
            }
            
            if (button.classList.contains('equal')) {
                let result;
                
                switch (operator) {
                    case '+':
                        result = parseFloat(num1) + parseFloat(num);
                        
                        break;
                    case '-':
                        result = num1 - num;
                        break;
                    case '*':
                        result = num1 * num;
                        break;
                    case '/':
                        result = num1 / num;
                }
                display.textContent = result;
               num = result;
               num1 = '';
               operator = '';
            }
        });
    });