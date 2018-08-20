
const umlautsMap = {
  'ü': 'ue',
  'ä': 'ae',
  'ö': 'oe',
  'ß': 'ss',
  'ò': 'o',
  'ñ': 'n',
  'ì': 'i',
};
const simplifyDashes = s => s.replace(/-{1,}/g, '-').replace(/^-*/, '').replace(/-*$/, '');
const replaceNonAsciis = s => s.replace(/[^a-zA-Z0-9]/g, '-')
const replaceWith = (s, replacements) => s.split('').map(char => char in replacements ? replacements[char] : char).join(''); 
const handleSpecialChars = s =>
  simplifyDashes(replaceNonAsciis(replaceWith(s, umlautsMap)));

export const headlineToHash = headline => {
  const lowerCase = s => s.toLowerCase();
  const spaceToDash = s => s.replace(/\s/g, '-');
  const hash = () => (+(headline.toString().split('').map(s => s.charCodeAt(0)).join(''))).toString(32).substr(0, 7);  
  return handleSpecialChars(spaceToDash(lowerCase(headline))) + `---${hash()}`;
};

