// @flow strict

const formatDate = (date) => {
    let lang = typeof window === 'undefined' ? 'en' : navigator.language;
    if (typeof date === 'string')
        date = new Date(date);

    return date.toLocaleDateString(lang, {dateStyle: 'medium'});
};

export default formatDate;

