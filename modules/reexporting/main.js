// en este archivo centralizamos todos los exports y los volvemos a exportar para que puedan ser importados todos juntos en index.html

export * as Calculate from './module3.js';
export {tellMeYourName as name} from './module4.js';