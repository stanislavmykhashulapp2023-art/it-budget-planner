[![CI/CD Pipeline](https://github.com/stanislavmykhashulapp2023-art/it-budget-planner/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/stanislavmykhashulapp2023-art/it-budget-planner/actions/workflows/ci-cd.yml)

🏗️ IT Budget Planner
Простий та ефективний вебдодаток для розрахунку бюджету IT-проєктів. Проєкт реалізовано з використанням сучасного інструментарію розробки та повноцінного CI/CD конвеєра.

🚀 Статус проєкту
🛠️ Технологічний стек
Frontend: HTML5, CSS3, JavaScript (Vite)

Testing: Vitest, JSDom

Linting: ESLint

CI/CD: GitHub Actions

Deployment: Vercel

⚙️ Автоматизація (CI/CD)
У цьому проєкті налаштовано автоматичний життєвий цикл розробки:

Code Quality: При кожному push запускається ESLint для перевірки чистоти коду.

Automated Testing: Unit-тести перевіряють логіку калькулятора в ізольованому середовищі.

Branch Protection: Заборонено злиття коду в гілку main, якщо тести не пройшли.

Automatic Deployment: Після успішних перевірок сайт автоматично розгортається на Vercel.

📦 Встановлення та запуск
Bash
# Клонувати репозиторій
git clone https://github.com/stanislavmykhashulapp2023-art/it-budget-planner.git

# Встановити залежності
npm install

# Запустити локально
npm run dev

# Запустити тести
npm test
Посилання на Live Demo:
https://it-budget-plannerpm.vercel.app/