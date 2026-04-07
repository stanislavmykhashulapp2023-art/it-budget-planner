import { calculateTotal, getBudgetStatus } from './logic.js';

const btn = document.getElementById('calcBtn');
const resultArea = document.getElementById('resultArea');

btn.addEventListener('click', () => {
    const hours = parseFloat(document.getElementById('hoursInput').value);
    const rate = parseFloat(document.getElementById('rateInput').value);
    const type = document.getElementById('projectType').value;

    if (isNaN(hours) || isNaN(rate)) {
        alert("Будь ласка, введіть коректні числа");
        return;
    }

    const total = calculateTotal(hours, rate, type);
    const status = getBudgetStatus(total);

    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.innerText = total;
    }

    const statusLabel = document.getElementById('statusLabel');
    if (statusLabel) {
        statusLabel.innerText = status.text;
        statusLabel.className = `status ${status.class}`;
    }
    
    if (resultArea) {
        resultArea.style.display = 'block';
    }
});

// Виводимо статус середовища (Development або Production)
// Додано оператор ?. для безпечного доступу під час тестів у CI
const statusContainer = document.getElementById('status');
if (statusContainer) {
    statusContainer.innerText = import.meta.env?.VITE_APP_STATUS || 'Development';
}