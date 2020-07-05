// @flow strict

const formatDate = (date) => {
  if (!date) {
    return '';
  }

  const lang = typeof window === 'undefined' ? 'en' : navigator.language;
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return date ? date.toLocaleDateString(lang, {dateStyle: 'medium'}) : '';
};

export default formatDate;
