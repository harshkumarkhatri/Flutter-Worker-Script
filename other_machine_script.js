const express = require("express");
const { exec } = require("child_process");
const app = express();
app.use(express.json());

app.post("/run-build", (req, res) => {
  console.log("In side the script");
  const { script } = req.body; // The script to run
  exec(script, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: error.message });
    }
    res.json({ stdout, stderr });
  });
});

app.listen(3000, () => console.log("Worker listening on port 3000"));
