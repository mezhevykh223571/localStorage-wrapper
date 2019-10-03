window.store = {
  detectLocalStorage: function () {
    try {
      return 'localStorage' in window && window.localStorage !== null;
    }
    catch (err) {
      return false;
    }
  },
  set: function(name, value = '', days = 31) {
    if (name) {
      setCookie(this);
    } else {
      console.error('Cookie name is not defined.');
    }

    function setCookie (self) {
      if (self.detectLocalStorage()) {
        localStorage.setItem(name, value);
      } else {
        let date = new Date();

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        let expires = `expires=${date.toUTCString()}`;

        document.cookie = `${name}=${value || ''}; ${expires}; path=/`;
      }
    }
  },
  get: function (name) {
    if (this.detectLocalStorage()) {
      return localStorage.getItem(name);
    } else {
      const getCookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');

      return getCookie ? getCookie[2] : null;
    }
  },
  getAll: function () {
    let index;
    let counter = 0;
    let values = {};

    if (this.detectLocalStorage()) {
      const keys = Object.keys(localStorage);
      index = keys.length;

      while (counter < index) {
        values[keys[counter]] = localStorage.getItem(keys[counter]);

        counter++;
      }
    } else {
      const cookies = document.cookie.split(";");
      index = cookies.length;

      while (counter < index) {
        const cookie = cookies[counter].split("=");

        values[(cookie[0] + '').trim()] = unescape(cookie.slice(1).join('='));

        counter++;
      }
    }

    return values;
  },
  remove: function (name) {
    if (this.detectLocalStorage()) {
      localStorage.removeItem(name);
    } else {
      document.cookie = `${name}=; Max-Age=-99999999;`;
    }
  },
  removeAll: function () {
    let index;
    let counter = 0;

    if (this.detectLocalStorage()) {
      localStorage.clear();
    } else {
      const cookies = document.cookie.split(";");
      index = cookies.length;

      while (counter < index) {
        const cookie = cookies[counter].split("=");

        document.cookie = `${cookie[0]}=; Max-Age=-99999999;`;

        counter++;
      }
    }
  }
}
