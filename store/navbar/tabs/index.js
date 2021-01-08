export const state = () => ({
  tabs : [],
  pathMap: [
    ['/', 'Главная'],
    ['/content/navigation', 'Навигация'],
  ]
});

export const actions = {

  async getTabs({ commit, state }, path) {
    //Создаём объект Map
    const map = new Map(state.pathMap);
    //Мапим
    let tab = map.get(path);
    //Создаём объект
    let newTabs = [
      {
        name: tab,
        path: path
      }
    ];

    //Если в стейте уже есть элемент, то не добавлять его.
    let val = state.tabs.some(item => item.name === newTabs[0].name)
    if (!val){
      const tabs = state.tabs.concat(newTabs)
      commit('TAB', tabs);
    }
  },
};

export const mutations = {
  TAB: (state, tabs) => state.tabs = tabs,
};

export const getters = {
  tabs: state => state.tabs,
};
