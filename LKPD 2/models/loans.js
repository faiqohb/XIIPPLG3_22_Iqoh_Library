const dbPool = require ('../config/db')

const getindex = () => {
 const SQLQuery = 'SELECT * FROM loans';

 return dbPool.execute(SQLQuery);
}

const getByid = async (id) => { // ✅ Pastikan id masuk sebagai parameter
    console.log("ID yang dikirim ke query:", id); // Debugging

    const SQLQuery = 'SELECT * FROM loans WHERE id = ?';  
    return dbPool.execute(SQLQuery, [id]); // ✅ Gunakan parameterized query
};

const createnew = (body) => {
    const SQLQuery = ` INSERT INTO loans (book_id, user_id, loan_date, return_date) 
                       VALUES ('${body.book_id}', '${body.user_id}', '${body.loan_date}', '${body.return_date}')`;
   return dbPool.execute(SQLQuery);
}

const updateloans = (body, id) => {
    const SQLQuery = `UPDATE loans 
                     SET book_id='${body.book_id}', 
                        user_id='${body.user_id}',
                        loan_date='${body.loan_date}',
                         return_date='${body.return_date}'
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteloans = (id) => {
    const SQLQuery= `DELETE FROM loans WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getindex,
    createnew,
    updateloans,
    deleteloans,
    getByid,
}