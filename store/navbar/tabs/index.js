export const state = () => ({
  tabs: [],
  pathMap: [
    ['/', 'Главная'],
    ['/content/navigation', 'Навигация'],
  ],
  bg:'',
  color: [
    'bg-red-100',
    'bg-blue-100',
    'bg-amber-100',
    'bg-yellow-100',
    'bg-lime-100',
    'bg-green-100',
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
   if (!val) {
     const tabs = await state.tabs.concat(newTabs)
     commit('TAB', tabs);
   }


   // console.log(state.bg.length)

   const bg = state.color[Math.floor(Math.random() * state.color.length)]

   commit('BG', bg)
 },

  async closeTab({ commit, state }, path){
    const tabs = await state.tabs.filter(item => item.path !== path);
    commit('TAB', tabs);
  }
};

export const mutations = {
  TAB: (state, tabs) => state.tabs = tabs,
  BG: (state, bg) => state.bg = bg,
};

export const getters = {
  tabs: state => state.tabs,
  bg: state => state.bg,
};
