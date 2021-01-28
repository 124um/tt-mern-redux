const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const booksRouter = require('./routes/BooksRouter');

const cors = require('cors'),
      router = express.Router()

const app = express();


  
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors({credentials: true, origin: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/static', express.static('public'));
app.use('/api', router);

router.use((req, res, next) => {
    return next()
}) 

router.get('/books', booksRouter.getBooks);
router.get('/books/:id', booksRouter.getBook);
router.post('/books', booksRouter.postBook)
router.patch('/books', booksRouter.patchBook)
router.delete('/books', booksRouter.deleteBook)

router.get('/covers', booksRouter.getCovers);
router.get('/covers/:id', booksRouter.getCover);
router.post('/covers', booksRouter.postCover);
router.patch('/covers', booksRouter.patchCover);
router.delete('/covers', booksRouter.deleteCovers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
