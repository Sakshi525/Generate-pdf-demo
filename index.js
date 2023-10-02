const express = require('express');
const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/generate-pdf', (req, res) => {
  const doc = new jsPDF();

  doc.text('Hello, PDF!', 10, 10);
  const pdfDataUri = doc.output('datauristring');
  res.send(pdfDataUri);
  console.log(pdfDataUri);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
