const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const login = document.querySelector('#login');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
const loginContent = document.querySelector('#login-content');
const aboutCursor = document.querySelector('#aboutCursor');
const contactCursor = document.querySelector('#contactCursor');
const mainCursor = document.querySelector('#mainCursor');
const loginCursor = document.querySelector('#loginCursor');

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        width: '400px',
        height: '400px',
        top: 25,
        right: 25,
        bottom: 25,
        left: 25,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#00AA00');
            aboutCursor.style.display = 'inline';
            mainCursor.style.display = 'none';
            contactCursor.style.display = 'none';
            //loginCursor.style.display = 'none';
        },
        onblur: function () {
            this.setBackground('#777');
            aboutCursor.style.display = 'none';
            mainCursor.style.display = 'none';
            contactCursor.style.display = 'none';
            //loginCursor.style.display = 'none';
        },
        onclose: function () {
            mainCursor.style.display = 'inline';
        }
    });
});

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        width: '400px',
        height: '400px',
        top: 25,
        right: 25,
        bottom: 25,
        left: 25,
        mount: contactContent,
        onfocus: function () {
            this.setBackground('#00AA00');
            aboutCursor.style.display = 'none';
            mainCursor.style.display = 'none';
            //loginCursor.style.display = 'none';
            contactCursor.style.display = 'inline';
        },
        onblur: function () {
            this.setBackground('#777');
            aboutCursor.style.display = 'none';
            mainCursor.style.display = 'none';
            contactCursor.style.display = 'none';
            //loginCursor.style.display = 'none';
        },
        onclose: function () {
            mainCursor.style.display = 'inline';
        }
    });
});

login.addEventListener('click', () => {
    const loginBox = new WinBox({
        title: 'Login',
        width: '400px',
        height: '400px',
        top: 25,
        right: 25,
        bottom: 25,
        left: 25,
        mount: loginContent,
        onfocus: function () {
            this.setBackground('#00AA00');
            aboutCursor.style.display = 'none';
            mainCursor.style.display = 'none';
            contactCursor.style.display = 'none';
            loginCursor.style.display = 'inline';
        },
        onblur: function () {
            this.setBackground('#777');
            aboutCursor.style.display = 'none';
            mainCursor.style.display = 'none';
            contactCursor.style.display = 'none';
            loginCursor.style.display = 'none';
        },
        onclose: function () {
            mainCursor.style.display = 'inline';
        }
    });
});
