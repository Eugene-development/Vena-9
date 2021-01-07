export const state = () => ({
  tabs : [
    {
      tab: '',
      path: ''
    }
  ],
  pathMap: [
    ['/', 'Главная'],
    ['/content/navigation', 'Навигация'],
  ]
//  массив пустой
});

export const actions = {

  getTabs({ commit, state }, path) {
// console.log(path)
    const map = new Map(state.pathMap);
    const tab = map.get(path);
    console.log(tab);
    console.log(path);


    const mapTab = new Map()
    const tabs = mapTab.set(tab, path)
    // const data = tabs.forEach((value, key, map) => {
    //   console.log(`${key}: ${value}`); // огурец: 500 и так далее
    // });
    let obj = Object.fromEntries(tabs.entries());

    console.log(obj);







    // const tabs = state.tabs.concat(tab);

    commit('TAB', tabs);
  },
};

export const mutations = {
  TAB: (state, tabs) => state.tabs = tabs,
};

export const getters = {
  tabs: state => state.tabs,
};
