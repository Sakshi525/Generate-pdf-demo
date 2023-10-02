const fs = require('fs');
const { jsPDF } = require('jspdf');

async function generatePDF() {
  const doc = new jsPDF();

  doc.text('Hello, PDF!', 10, 10);
  doc.save('output.pdf');
  console.log('PDF generated successfully!');
}

generatePDF().catch((err) => console.error('Error generating PDF:', err));
