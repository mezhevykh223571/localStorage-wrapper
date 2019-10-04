class LocalStorageService {
  constructor() {
    if (!window || !window.localStorage || !window.localStorage) {
      throw new Error('Local Storage is not supported');
    }
  }

  setItem(name, value = '') {
    window.localStorage.setItem(name, value);
  }

  getItem(name) {
    return window.localStorage.getItem(name);
  }

  getAllItems() {
    return {
      ...window.localStorage
    };
  }

  removeItem(name) {
    window.localStorage.removeItem(name);
  }

  removeAllItems() {
    Object.keys(window.localStorage)
      .forEach(itemName => {
        this.removeItem(itemName);
      });
  }
}

export default LocalStorageService;
