export const buttonClick = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const header = document.getElementById('header1');
  if (header.textContent == '') {
    header.textContent = 'Webpack is Working!';
  } else {
    header.textContent = '';
  }
};
