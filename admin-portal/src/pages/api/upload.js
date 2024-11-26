// pages/api/upload.js

import ImageKit from 'imagekit';
import multer from 'multer';
import nextConnect from 'next-connect';

const imagekit = new ImageKit({
    publicKey: 'public_/oQSqM8DasrMnsACVuVHd7+jReI=',
    privateKey: 'private_Lbr5ncJi2N13dAsazIn9NcQ5mP8=',
    urlEndpoint: 'https://ik.imagekit.io/lohith114',
});

const upload = multer({
    storage: multer.memoryStorage(),
});

const apiRoute = nextConnect();

apiRoute.use(upload.single('file'));

apiRoute.post(async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            console.error('No file uploaded');
            return res.status(400).json({ error: 'No file uploaded.' });
        }

        const result = await imagekit.upload({
            file: file.buffer, // the file buffer
            fileName: file.originalname,
        });

        res.status(200).json(result);
    } catch (error) {
        console.error('Upload error:', error); // Log detailed error
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false,
    },
};
