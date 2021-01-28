# tt-mern-redux
Test task MERN stack + redux

"Книжная полка с использованием MERN стека + redux. Где можно добавлять книги с заголовком, описанием и картинкой обложки.  Редактирование опционально"
Задачка творча тому що ви можете витратити від 4 годин до 4х днів якщо над якимось моментом вирішете зациклитись чи заморочитись



Для устноавки:
1) Зайти в папку server_shelf и выполнить "npm install"
2) Зайти в папку front_bookshelf и выполнить "npm install"

После установки зависимостей и библиотек:
1) Зайти в папку server_shelf и выполнить "npm start"
2) Зайти в папку front_bookshelf и выполнить "npm start"

Требуется MongoDB     
"DBCONNECT" : "mongodb://librarian:libpassword@localhost:27017/LIBRARY?authSource=admin&readPreference=primary"

Две таблицы - books, covers
Данные импортировать из файлов 
\bookshelf\server_shelf\data\books.json
\bookshelf\server_shelf\data\covers.json

Открыть страницу http://localhost:3000/ для тестирования приложения.

Так же на фронте, я не дописал операции с файлами image - это могло занять много времени.

Проект разрабатывался от тестовыз данных.

Под проект была написана струтура Docker.