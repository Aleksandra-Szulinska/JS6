let display = document.getElementById('display');
        let expression = '';

        function appendToDisplay(value) {
            if (value === '=') {
                try {
                    display.textContent = eval(expression);
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else {
                expression += value;
                display.textContent = expression;
            }
        }
        function clearDisplay() {
            display.textContent = '0';
            expression = '';
        }
        function calculateResult() {
            try {
                display.textContent = eval(expression);
            } catch (error) {
                display.textContent = 'Error';
            }
        }