const loanmodel = require('../models/loans')

const getindex = async (req, res) => {
    try {
        const [data] = await loanmodel.getindex();
        res.json({
            message: 'GET all loans success',
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
        await loanmodel.createnew(body);
        res.json({
            message: 'CREATE new loan',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateloans = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await loanmodel.updateloans(body, id);
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


const deleteloans = async (req, res) => {
    const { id } = req.params;

    try {
        // Panggil fungsi deleteloan dari model
        const [result] = await loanmodel.deleteloans(id);


        res.json({
            message: 'DELETE loan success',
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

        const [data] = await loanmodel.getByid(id); // Panggil model dengan nama yang sesuai

        if (data.length === 0) {
            return res.status(404).json({ message: 'loan not found' });
        }

        res.json({
            message: 'GET loan by ID success',
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
    updateloans,
    deleteloans,
    getByid,
}
