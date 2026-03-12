export function calculateTotal(hours, rate, type) {
    if (hours < 0 || rate < 0) return 0;
    
    let basePrice = hours * rate;
    
    // Коефіцієнти складності
    const multipliers = {
        web: 1.0,
        mobile: 2.5,
        landing: 0.8
    };

    const finalPrice = basePrice * (multipliers[type] || 1.0);
    return Math.round(finalPrice);
}

export function getBudgetStatus(total, limit = 5000) {
    if (total > limit) return { text: "Бюджет перевищено!", class: "warning" };
    return { text: "В межах бюджету", class: "success" };
}