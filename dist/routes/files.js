import express from "express";
const router = express.Router();
import lodash from 'lodash';
import { __dirname } from '../helper.js';
import path from 'path';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
class LowWithLodash extends Low {
    constructor() {
        super(...arguments);
        this.chain = lodash.chain(this).get('data');
    }
}
const index_file = path.join(__dirname, 'collections_index', 'index.json');
const index_adapter = new JSONFile(index_file);
const index_db = new LowWithLodash(index_adapter);
router.get('/', async (req, res) => {
    await index_db.read();
    const file_post = index_db.chain.find({ main_link: req.query.main_link }).value();
    if (!file_post)
        return res.status(404).json({ data: 'not found' });
    res.json({
        data: file_post
    });
});
export default router;
//# sourceMappingURL=files.js.map