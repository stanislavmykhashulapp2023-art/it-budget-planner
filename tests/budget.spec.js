import { test, expect } from '@playwright/test';

test('Користувач може розрахувати бюджет проєкту', async ({ page }) => {
    // 1. Відкриваємо локальний файл (або сервер)
    // Якщо просто відкривати файл, вказати повний шлях, 
    // але краще запустити через Live Server (http://localhost:5500)
    await page.goto('http://localhost:5500/index.html'); 

    // 2. Вводимо дані
    await page.fill('#hoursInput', '100');
    await page.fill('#rateInput', '30');
    await page.selectOption('#projectType', 'mobile');

    // 3. Натискаємо кнопку
    await page.click('#calcBtn');

    // 4. Перевіряємо результат
    const totalPrice = page.locator('#totalPrice');
    await expect(totalPrice).toHaveText('3900');

    const statusLabel = page.locator('#statusLabel');
    await expect(statusLabel).toContainText('В межах бюджету');
});