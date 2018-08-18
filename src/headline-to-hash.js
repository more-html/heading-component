
const umlautsMap = {
  'ü': 'ue',
  'ä': 'ae',
  'ö': 'oe',
  'ß': 'ss',
  'ò': 'o',
  'ñ': 'n',
  'ì': 'i',
};
const replaceWith = (s, replacements) => s.split('').map(char => char in replacements ? replacements[char] : char).join(''); 
const handleSpecialChars = s =>
  replaceWith(s, umlautsMap);

export const headlineToHash = headline => {
  const lowerCase = s => s.toLowerCase();
  const spaceToDash = s => s.replace(/\s/, '-');
  const hash = () => (+(headline.toString().split('').map(s => s.charCodeAt(0)).join(''))).toString(32).substr(0, 7);  
  return handleSpecialChars(spaceToDash(lowerCase(headline))) + `---${hash()}`;
};

