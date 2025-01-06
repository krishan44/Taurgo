const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Example Routes
app.post('/api/register', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (full_name, email, password) VALUES($1, $2, $3) RETURNING *",
      [fullName, email, password]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post('/api/expertise', async (req, res) => {
  try {
    const { userId, expertise } = req.body;
    const result = await pool.query(
      "INSERT INTO partner_expertise (user_id, expertise_type) VALUES($1, $2) RETURNING *",
      [userId, expertise]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
