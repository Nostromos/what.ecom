import express from 'express';
import { getCategoryList } from '../data/utils/queryText';

const CategoryRouter = express.Router();

CategoryRouter.get('/', async (req, res, next) => {
  const text = getCategoryList;
  const values = [];

  try {
    const { rows } = await query(text, values);
    if (rows) { console.log(rows) };
    res.json(rows);
  } catch (err) {
    console.log(err)
  }

});

export default CategoryRouter;