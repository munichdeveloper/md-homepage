/** @type {import('next-i18next').UserConfig} */
const path = require('path');
module.exports = {
    i18n: {
        defaultLocale: 'de',
        locales: ['en', 'de'],
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    localePath: path.resolve('./public/locales'),
}