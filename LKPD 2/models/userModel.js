const dbPool = require ('../config/db')

const getindex = () => {
 const SQLQuery = 'SELECT * FROM user';

 return dbPool.execute(SQLQuery);
}

const getByid = async (id) => { // ✅ Pastikan id masuk sebagai parameter
    console.log("ID yang dikirim ke query:", id); // Debugging

    const SQLQuery = 'SELECT * FROM user WHERE id = ?';  
    return dbPool.execute(SQLQuery, [id]); // ✅ Gunakan parameterized query
};

const createnew = (body) => {
    const SQLQuery = ` INSERT INTO user (username, password, name , email , phone) 
                       VALUES ('${body.username}', '${body.password}', '${body.name}', '${body.email}', '${body.phone}')`;
   return dbPool.execute(SQLQuery);
}

const updateuser = (body, id) => {
    const SQLQuery = `UPDATE user 
                     SET username='${body.username}', 
                        password='${body.password}',
                        name='${body.name}',
                         email='${body.email}', 
                         phone='${body.phone}'
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteuser = (id) => {
    const SQLQuery= `DELETE FROM user WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getindex,
    createnew,
    updateuser,
    deleteuser,
    getByid,
}