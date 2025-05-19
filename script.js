// PDF Export
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const element = document.querySelector('.dashboard');
    
    html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 size
        pdf.save('RPH_Matematik.pdf');
    });
}

// Word Export
function exportToWord() {
    const html = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word'>
        <head>
            <meta charset='utf-8'>
            <title>RPH Matematik Tahun 6</title>
        </head>
        <body>
            ${document.querySelector('.dashboard').outerHTML}
        </body>
        </html>
    `;
    
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'RPH_Matematik.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}