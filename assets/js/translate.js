// translator.js

const translations = {
    'en': {
        'title': 'Pavansut Minerals',
        'navbarBrand': 'Pavansut Minerals',
        'home': 'Home',
        'aboutUs': 'About Us',
        'products': 'Products',
        'contact': 'Contact',
        'blogs': 'Blogs',
        'aboutUs': 'About Us',
        'ourProducts': 'Our Products',
        'industriesWeServe': 'Industries We Serve'
        // Add more translations as needed
    },
    'ar': {
        'title': 'Pavansut Minerals (Arabic)',
        'navbarBrand': 'Pavansut Minerals (Arabic)',
        'home': 'الرئيسية',
        'aboutUs': 'معلومات عنا',
        'products': 'المنتجات',
        'contact': 'اتصل بنا',
        'blogs': 'المقالات',
        'aboutUs': 'معلومات عنا',
        'ourProducts': 'منتجاتنا',
        'industriesWeServe': 'الصناعات التي نخدمها'
        // Add more translations as needed
    }
    // Add more languages as needed
};

document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language.substring(0, 2); // Get user's language preference

    translatePage(userLang);

    // Language switcher (optional)
    document.querySelectorAll('.lang-switch').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});

function translatePage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-translate]').forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}
