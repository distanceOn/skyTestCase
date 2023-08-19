# skyTestCase

Тестовое задание карьерного центра SkyPro. Поиск пользователей github.

## Запуск проекта локально

Следуйте этим шагам, чтобы запустить проект локально:

### 1. Клонирование репозитория

Сначала склонируйте репозиторий с GitHub на свой компьютер:

**git clone [https://github.com/distanceOn/skyTestCase.git](https://github.com/distanceOn/skyTestCase.git)**

### 2. Установка зависимостей

Перейдите в папку проекта и установите все зависимости с помощью npm:

**npm install**

### 3. Получение GitHub Access Token

Перейдите на сайт GitHub и получите Access Token для доступа к GitHub API:

Перейдите в настройки профиля -> Developer settings -> Personal access tokens -> Tokens(classic) -> Generate new token(classic).

Создайте новый токен с правами на доступ к репозиториям:

Введите название токена, а также настройки repo->public_repo, user->read:user
Нажмите кнопку generate token и скопируйте ваш токен доступа.

4. Создание файла .env

Создайте файл .env по примеру файла **.env.example** в корне проекта и добавьте туда свой GitHub Access Token:

**VITE_GITHUB_ACCESS_TOKEN=ваш-токен**

сохраните файл

5. Запуск проекта

Запустите проект с помощью команды:

**npm run dev**

Проект будет доступен по адресу http://localhost:3000.
