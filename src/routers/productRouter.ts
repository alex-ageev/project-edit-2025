import { Router } from "express";

const router = Router();

router.get('/products', (req, res) => {
  res.json({ test: true });
})

export default router;