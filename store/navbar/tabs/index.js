export const state = () => ({
  tabs : [],
  pathMap: [
    ['/', 'Главная'],
    ['/content/navigation', 'Навигация'],
  ]
});

export const actions = {

 async getTabs({ commit, state }, path) {
    const map = new Map(state.pathMap);
    let tab = await map.get(path);
    let newTabs = [
      {
        name: tab,
        path: path
      }
    ];
    let val = await state.tabs.some(item => item.path === path)
    if (!val){
      const tabs = await state.tabs.concat(newTabs)
      // console.log(tabs);
      commit('TAB', tabs);
    }
  },

  async closeTab({ commit, state }, i){

    // const tabs = state.tabs.find(item => item === i);
    // const tabs = delete state.tabs[i+1];
    // console.log(tabs);
    const newTabs = state.tabs
    // const tabs = await newTabs.splice(i,1);

    commit('CLOSE_TAB', newTabs, i);
  }
};

export const mutations = {
  TAB: (state, tabs) => state.tabs = tabs,
  CLOSE_TAB: (state, newTabs, i) => state.tabs = delete newTabs[i],
  // CLOSE_TAB: (state, newTabs, i) => state.tabs = newTabs.splice(i, 1),
};

export const getters = {
  tabs: state => state.tabs,
};
