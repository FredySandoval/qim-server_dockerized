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
router.post('/', async (req, res) => {
    const is_valid_query = ['main_link', 'unique_name', 'field', 'new_name'].every(n => (n in req.query));
    if (!is_valid_query)
        return res.status(400).json({ data: 'invalid query' });
    await index_db.read();
    const file_edit = index_db.chain.find({ main_link: req.query.main_link }).value();
    const file_index = lodash.findIndex(file_edit.documents, { unique_name: req.query.unique_name });
    file_edit.documents[file_index].name = req.query.new_name;
    await index_db.write();
    res.json({ data: 'sucess' });
});
export default router;
//# sourceMappingURL=edit.js.map