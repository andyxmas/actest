import { createApp } from "vue/dist/vue.esm-bundler";

/**
 * create vue instance function
 */
const createVueApp = () => {
  const app = createApp({});

  /**
   * vue components
   * auto-import all vue components
   */
  const vueComponents = require.context("./components/", true, /\.(vue)$/);
  vueComponents.keys().forEach((key) => {
    const component = vueComponents(key).default;

    /* eslint-disable */
    // if a component has a name defined use the name, else use the path as the component name
    const name = component.name
      ? component.name
      : key
        .replace(/\.(\/|vue|js)/g, '')
        .replace(/(\/|-|_|\s)\w/g, match => match.slice(1).toUpperCase());

    app.component(name, component);
    console.log(name)
  });
  /* eslint-enable */

  return app;
};

/**
 * create and mount vue instance(s)
 */
const vueElements = document.querySelectorAll("[vue]");
if (vueElements) vueElements.forEach((el) => createVueApp().mount(el));
