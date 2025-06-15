export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }
};

export const downloadResume = () => {
  // Create a link to the resume PDF
  const link = document.createElement('a');
  link.href = '/attached_assets/Resume_1750000481729.pdf';
  link.download = 'Muhammad_Mudassir_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
