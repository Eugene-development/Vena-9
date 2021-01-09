export const state = () => ({
  tabs: [],
  pathMap: [
    ['/', 'Главная'],
    ['/content/navigation', 'Навигация'],
  ],
  bg:'',
  color: [
    'bg-red-50',
    'bg-blue-50',
    'bg-amber-50',
    'bg-yellow-50',
    'bg-lime-50',
    'bg-emerald-50',
    'bg-teal-50',
    'bg-cyan-50',
    'bg-lightBlue-50',
    'bg-blue-50',
    'bg-indigo-50',
    'bg-violet-50',
    'bg-purple-50',
    'bg-fuchsia-50',
    'bg-pink-50',
    'bg-rose-50',
  ]
});

export const actions = {

 async getTabs({ commit, state }, path) {
    const map = new Map(state.pathMap);
    let tab = await map.get(path);
   const bg = state.color[Math.floor(Math.random() * state.color.length)]

   let newTabs = [
      {
        name: tab,
        path: path,
        bg: bg
      }
    ];
   let val = await state.tabs.some(item => item.path === path)
   if (!val) {
     const tabs = await state.tabs.concat(newTabs)
     commit('TAB', tabs);
   }
 },

  async closeTab({ commit, state }, path){
    const tabs = await state.tabs.filter(item => item.path !== path);
    commit('TAB', tabs);
  }
};

export const mutations = {
  TAB: (state, tabs) => state.tabs = tabs,
};

export const getters = {
  tabs: state => state.tabs,
};
