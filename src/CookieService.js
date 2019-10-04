class CookieService {
  constructor() {
    if (!window || !window.document || !window.document.cookie) {
      throw new Error('Cookies are not supported');
    }
  }

  setItem(name, value = '', days = 31) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    window.document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  getItem(name) {
    const getCookie = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return getCookie ? getCookie[2] : null;
  }

  getAllItems() {
    return window.document.cookie.split(';')
      .map(item => item.trim().split('='))
      .reduce((acc, [itemName, itemValue]) => ({
        ...acc,
        [itemName]: itemValue
      }), {});
  }

  removeItem(name) {
    window.document.cookie = `${name}=; Max-Age=-99999999;`;
  }

  removeAllItems() {
    Object.keys(this.getAllItems())
      .forEach(itemName => {
        this.removeItem(itemName);
      });
  }
}

export default CookieService;
