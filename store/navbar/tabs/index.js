export const state = () => ({
  tabs : [],
  pathMap: [
    ['/', 'Главная'],
    ['/content/navigation', 'Навигация'],
  ]
});

export const actions = {

  getTabs({ commit, state }, path) {
    const map = new Map(state.pathMap);
    let tab = map.get(path);
    let newTabs = [
      {
        name: tab,
        path: path
      }
    ];
    let val = state.tabs.some(item => item.path === path)
    if (!val){
      const tabs = state.tabs.concat(newTabs)
      commit('TAB', tabs);
    }
  },

  closeTab(){
console.log('123')
  }
};

export const mutations = {
  TAB: (state, tabs) => state.tabs = tabs,
};

export const getters = {
  tabs: state => state.tabs,
};
