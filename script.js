import posthog from 'posthog-js'; 
import { calculateTotal, getBudgetStatus } from './logic.js';

// Ініціалізація PostHog
posthog.init('phc_mQ4jjbg3BbRSp29S3gSymjBbVyXRWeEkTbsr6cpfRw5z', {
    api_host: 'https://us.posthog.com',
    person_profiles: 'always' 
});

const btn = document.getElementById('calcBtn');
const resultArea = document.getElementById('resultArea');

// --- НОВИЙ БЛОК: FEATURE FLAGS ---
posthog.onFeatureFlags(() => {
    // Перевіряємо, чи увімкнено прапорець 'show-status-badge' у PostHog
    if (posthog.isFeatureEnabled('show-status-badge')) {
        console.log("Feature Flag активний: змінюємо дизайн кнопки");
        // Наприклад, робимо кнопку зеленою, якщо прапорець увімкнено
        if (btn) btn.style.backgroundColor = '#2ecc71'; 
    } else {
        console.log("Feature Flag вимкнено: стандартний дизайн");
        if (btn) btn.style.backgroundColor = ''; // повертаємо стандартний колір
    }
});
// ---------------------------------

btn.addEventListener('click', () => {
    const hours = parseFloat(document.getElementById('hoursInput').value);
    const rate = parseFloat(document.getElementById('rateInput').value);
    const type = document.getElementById('projectType').value;

    if (isNaN(hours) || isNaN(rate)) {
        alert("Будь ласка, введіть коректні числа");
        posthog.capture('calculation_error', { reason: 'invalid_input' });
        return;
    }

    const total = calculateTotal(hours, rate, type);
    const status = getBudgetStatus(total);

    posthog.capture('budget_calculated', {
        amount: total,
        project_type: type,
        hours_count: hours
    });

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

const statusContainer = document.getElementById('status');
if (statusContainer) {
    statusContainer.innerText = import.meta.env?.VITE_APP_STATUS || 'Development';
}