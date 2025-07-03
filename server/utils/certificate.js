// PDF generation for certificates utility

const PDFDocument = require('pdfkit');
const fs = require('fs');

/**
 * Generates a certificate PDF.
 * @param {Object} options - Certificate details.
 * @param {string} options.name - Recipient's name.
 * @param {string} options.course - Course or achievement.
 * @param {string} options.date - Date of issuance.
 * @param {string} outputPath - Path to save the PDF.
 */
function generateCertificate({ name, course, date }, outputPath) {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(outputPath));

  doc.fontSize(26).text('Certificate of Completion', { align: 'center' });
  doc.moveDown();
  doc.fontSize(20).text(`This certifies that`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(24).text(name, { align: 'center', underline: true });
  doc.moveDown();
  doc.fontSize(18).text(`has successfully completed the`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(20).text(course, { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text(`Date: ${date}`, { align: 'center' });

  doc.end();
}

module.exports = { generateCertificate };// PDF generation for certificates utility 