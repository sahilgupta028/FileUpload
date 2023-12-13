const File = require('../models/File');

exports.localFileUpload = async (req, res) =>{
    try{
        const file = req.files.file;
        console.log(file);

        const path = __dirname + "_" + "./file/" + Date.now();

        // const path = "./files/" + Date.now() + "_" + __dirname;

        file.mv(path, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error uploading file' });
            }

            res.json({
                success: true,
                message: 'Local file uploaded successfully',
            });
        });
    }
    catch(error){
        console.log(error);
    }
};

// module.exports = localfileUpload;