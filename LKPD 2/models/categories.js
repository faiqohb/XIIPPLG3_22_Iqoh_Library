const dbPool = require ('../config/db')

const getindex = () => {
    const SQLQuery = 'SELECT * FROM category';
   
    return dbPool.execute(SQLQuery);
   }
   
   const getByid = async (id) => { // ✅ Pastikan id masuk sebagai parameter
       console.log("ID yang dikirim ke query:", id); // Debugging
   
       const SQLQuery = 'SELECT * FROM category WHERE id = ?';  
       return dbPool.execute(SQLQuery, [id]); // ✅ Gunakan parameterized query
   };
   
   const createnew = (body) => {
    const SQLQuery = `INSERT INTO category (name) VALUES ('${body.name}')`;
    return dbPool.execute(SQLQuery);
}

   
const updateCategory = (body, id) => {
    const SQLQuery = 'UPDATE category SET name = ? WHERE id = ?';
    return dbPool.execute(SQLQuery, [body.name, id]);
    }

    const deleteCategory = (id) => {
        const SQLQuery = 'DELETE FROM category WHERE id = ?';
        return dbPool.execute(SQLQuery, [id]);
    }
   
   module.exports = {
       getindex,
       createnew,
       updateCategory,
       deleteCategory,
       getByid,
   }