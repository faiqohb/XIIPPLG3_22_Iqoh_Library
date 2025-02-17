const Categories = require('../models/categories')

const getindex = async (req, res) => {
    try {
        const [data] = await Categories.getindex();
        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createnew = async (req, res) => {
    const { body } = req;
    try {
        await Categories.createnew(body);
        res.json({
            message: 'CREATE new book',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await Categories.updateKategori(body, id);
        res.json({
            message: 'UPDATE berhasil',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}


const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        // Panggil fungsi deleteUser dari model
        const [result] = await Categories.deleteKategori(id);


        res.json({
            message: 'DELETE user success',
            data: null
        });

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message, // Menampilkan pesan error lebih jelas
        });
    }
  
  }

 
const getByid = async (req, res) => {
    const { id } = req.params; // Ambil ID dari URL parameter

    // Debugging untuk cek apakah ID terbaca
    console.log("ID dari req.params:", id);

    try {
        if (!id) {
            return res.status(400).json({ message: "ID tidak ditemukan dalam request" });
        }

        const [data] = await Categories.getByid(id); // Panggil model dengan nama yang sesuai

        if (data.length === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.json({
            message: 'GET book by ID success',
            data: data[0]
        });

    } catch (error) {
        console.error("Error saat getByid:", error);
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        });
    }
}



module.exports = {
    getindex,
    createnew,
    updateCategory,
    deleteCategory,
    getByid,
}