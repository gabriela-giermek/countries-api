const switchModeText = document.querySelector('.switch-mode__text');
const colors = {
  light: {
    class: 'light-mode',
    text: 'Light mode'
  },
  dark: {
    class: 'dark-mode',
    text: 'Dark mode'
  }
}
let currentColorMode = localStorage.getItem('color-mode');

const setColorMode = (color) => {
  switch (color) {
    case colors.light.class:
      currentColorMode = colors.light.class;
      document.querySelector('body').classList.remove(colors.dark.class);
      document.querySelector('body').classList.add(currentColorMode);
      switchModeText.innerText = colors.dark.text;
      break;
      
    case colors.dark.class:
      currentColorMode = colors.dark.class;
      document.querySelector('body').classList.remove(colors.light.class);
      document.querySelector('body').classList.add(currentColorMode);
      switchModeText.innerText = colors.light.text;
      break;
  
    default:
      currentColorMode = colors.light.class;
      document.querySelector('body').classList.remove(colors.dark.class);
      document.querySelector('body').classList.add(currentColorMode);
      switchModeText.innerText = colors.dark.text;
      break;
  }

  localStorage.setItem('color-mode', currentColorMode);
};

export const setDeafultColorMode = () => {
  setColorMode(currentColorMode);
};

export const toggleColorMode = () => {
   if(currentColorMode === colors.dark.class) {
    setColorMode(colors.light.class);
   } else if(currentColorMode === colors.light.class) {
    setColorMode(colors.dark.class);
   }
};