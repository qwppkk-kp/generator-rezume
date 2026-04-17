import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';

export const exportToWord = async (formData, photo, education, experience, skills, template) => {
  
  const children = [];

  // (ФИО)
  children.push(
    new Paragraph({
      text: formData.name || 'Резюме',
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 }
    })
  );

  const contacts = [];
  if (formData.email) contacts.push(formData.email);
  if (formData.phone) contacts.push(formData.phone);
  if (formData.position) contacts.push(formData.position);
  
  children.push(
    new Paragraph({
      children: contacts.map(contact => new TextRun({ text: contact, break: 1 })),
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 }
    })
  );


  if (education.length > 0) {
    children.push(
      new Paragraph({
        text: 'Образование',
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 100 }
      })
    );
    
    education.forEach(edu => {
      children.push(
        new Paragraph({
          text: edu.institution || '',
          bold: true,
          spacing: { after: 50 }
        })
      );
      if (edu.degree) {
        children.push(
          new Paragraph({
            text: edu.degree,
            spacing: { after: 50 }
          })
        );
      }
      if (edu.year) {
        children.push(
          new Paragraph({
            text: `Год окончания: ${edu.year}`,
            spacing: { after: 150 }
          })
        );
      }
    });
  }

  if (experience.length > 0) {
    children.push(
      new Paragraph({
        text: 'Опыт работы',
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 100 }
      })
    );
    
    experience.forEach(exp => {
      const period = exp.yearStart ? `${exp.yearStart} — ${exp.yearEnd || 'настоящее время'}` : '';
      children.push(
        new Paragraph({
          text: exp.company || '',
          bold: true,
          spacing: { after: 50 }
        })
      );
      if (exp.position) {
        children.push(
          new Paragraph({
            text: exp.position,
            spacing: { after: 50 }
          })
        );
      }
      if (period) {
        children.push(
          new Paragraph({
            text: period,
            spacing: { after: 50 }
          })
        );
      }
      if (exp.description) {
        children.push(
          new Paragraph({
            text: exp.description,
            spacing: { after: 150 }
          })
        );
      }
    });
  }

  if (skills) {
    children.push(
      new Paragraph({
        text: 'Навыки',
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 100 }
      })
    );
    children.push(
      new Paragraph({
        text: skills,
        spacing: { after: 150 }
      })
    );
  }


  const doc = new Document({
    sections: [{
      properties: {},
      children: children
    }]
  });

  // генерация и скачивание
  const blob = await Packer.toBlob(doc);
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = `resume_${formData.name || 'candidate'}.docx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};