const dbPool = require ('../config/db')

const getindex = () => {
 const SQLQuery = 'SELECT * FROM book';

 return dbPool.execute(SQLQuery);
}

const getByid = async (id) => { // ✅ Pastikan id masuk sebagai parameter
    console.log("ID yang dikirim ke query:", id); // Debugging

    const SQLQuery = 'SELECT * FROM book WHERE id = ?';  
    return dbPool.execute(SQLQuery, [id]); // ✅ Gunakan parameterized query
};

const createnew = (body) => {
    const SQLQuery = ` INSERT INTO book (title, writer, publisher, year, user_id, category_id) 
                       VALUES ('${body.title}', '${body.writer}', '${body.publisher}', '${body.year}', '${body.user_id}', '${body.category_id}')`;
   return dbPool.execute(SQLQuery);
}

const updateBook = (body, id) => {
    const SQLQuery = `UPDATE book 
                     SET title='${body.title}', 
                        writer='${body.writer}',
                        publisher='${body.publisher}',
                         year='${body.year}', 
                         user_id='${body.user_id}', 
                         category_id='${body.category_id}'
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteBook = (id) => {
    const SQLQuery= `DELETE FROM book WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getindex,
    createnew,
    updateBook,
    deleteBook,
    getByid,
}