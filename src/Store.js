import CookieService from './CookieService';
import LocalStorageService from './LocalStorageService';

class Store {
  constructor() {
    try {
      this.localStorage = new LocalStorageService();
    } catch(error) {
      console.error(error);
    }

    try {
      this.cookieService = new CookieService();
    } catch(error) {
      console.error(error);
    }
  }

  setItem(name, value = '', days = 31) {
    if (!name) {
      throw new Error('Name was not specified');
    }

    if (this.localStorage) {
      this.localStorage.setItem(name, value);
    } else if (this.cookieService) {
      this.cookieService.setItem(name, value, days);
    }
  }

  getItem(name) {
    if (!name) {
      return;
    }

    if (this.localStorage) {
      this.localStorage.getItem(name);
    } else if (this.cookieService) {
      this.cookieService.getItem(name);
    }
  }

  getAllItems() {
    if (this.localStorage) {
      this.localStorage.getAllItems();
    } else if (this.cookieService) {
      this.cookieService.getAllItems();
    }
  }

  removeItem(name) {
    if (!name) {
      return;
    }

    if (this.localStorage) {
      this.localStorage.removeItem(name);
    } else if (this.cookieService) {
      this.cookieService.removeItem(name);
    }
  }

  removeAllItems() {
    if (this.localStorage) {
      this.localStorage.removeAllItems();
    } else if (this.cookieService) {
      this.cookieService.removeAllItems();
    }
  }
}

if (window) {
  window.store = new Store();
}
