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

    document.getElementById('totalPrice').innerText = total;
    const statusLabel = document.getElementById('statusLabel');
    statusLabel.innerText = status.text;
    statusLabel.className = `status ${status.class}`;
    
    resultArea.style.display = 'block';
});
// Виводимо статус середовища (Development або Production)
if (document.getElementById('status')) {
    document.getElementById('status').innerText = import.meta.env.VITE_APP_STATUS;
}