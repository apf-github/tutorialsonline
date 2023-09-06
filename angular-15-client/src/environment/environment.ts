declare global {
    interface Window {
      env: {
        apiUrl: string;
        debug:boolean;
          }
    }
  }
export const environment = {
    production: false,
    //apiKey: 'http://mytest.com'
    apiUrl: window["env"]["apiUrl"] || "default",
    debug: window["env"]["debug"] || false
};

