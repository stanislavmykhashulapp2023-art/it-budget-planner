import { expect, test, describe } from 'vitest';
// Імпортуємо обидві функції одразу на початку
import { calculateTotal, getBudgetStatus } from './logic.js';

describe('Тести калькулятора проєкту', () => {

    test('Перевірка розрахунку: Web проєкт 100 годин по 30$', () => {
        expect(calculateTotal(100, 30, 'web')).toBe(3000);
    });

    test('Перевірка розрахунку: Mobile проєкт (коефіцієнт 1.3)', () => {
        expect(calculateTotal(100, 10, 'mobile')).toBe(1300);
    });

    test('Перевірка розрахунку: Landing Page (коефіцієнт 0.8)', () => {
        expect(calculateTotal(100, 20, 'landing')).toBe(1600);
    });

    test('Граничні значення: повертає 0 при нульовій кількості годин', () => {
        expect(calculateTotal(0, 50, 'web')).toBe(0);
    });

    test('Валідація: повертає 0 для відʼємної ставки (Rate)', () => {
        expect(calculateTotal(100, -10, 'web')).toBe(0);
    });

    test('Невідомий тип проєкту: використовує коефіцієнт 1.0', () => {
        expect(calculateTotal(10, 10, 'unknown')).toBe(100);
    });

    test('Статус бюджету: коректно визначає перевищення ліміту', () => {
        const result = getBudgetStatus(6000, 5000); 
        expect(result.text).toBe("Бюджет перевищено!");
        expect(result.class).toBe("warning");
    });

    test('Статус бюджету: коректно визначає норму', () => {
        const result = getBudgetStatus(3000, 5000); 
        expect(result.text).toBe("В межах бюджету");
        expect(result.class).toBe("success");
    });
});