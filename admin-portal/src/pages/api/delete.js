// pages/api/delete.js

import ImageKit from 'imagekit';

const imagekit = new ImageKit({
    publicKey: 'public_/oQSqM8DasrMnsACVuVHd7+jReI=',
    privateKey: 'private_Lbr5ncJi2N13dAsazIn9NcQ5mP8=',
    urlEndpoint: 'https://ik.imagekit.io/lohith114',
});

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { fileId } = req.body;

        try {
            await imagekit.deleteFile(fileId);
            res.status(200).json({ message: 'File deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
