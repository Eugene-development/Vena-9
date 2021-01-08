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
    let tab = map.get(path);




    // if (!path2.has(path)){
      let newTabs = [
        {
          name : tab,
          path : path
        }
      ];


      // const validate = new Map(state.tabs)
    // console.log(Object.entries(state.tabs))


    // const validate = await state.tabs.find(item => state.tabs.path === newTabs[0].path);

      // console.log(newTabs[0].path)
      // console.log(state.tabs)





    // const data = state.tabs.forEach((value, key, map) => {
    //     console.log(`${key}: ${value}`); // огурец: 500 и так далее
    //   });

// console.log(state.tabs.length)

    // let i = 0;
    //
    // for (; state.tabs.length; i++) {
    //   console.log(state.tabs[i])
    // }


    // const data = state.tabs.forEach((value, key, map) => {
    //   console.log(state.tabs.path); // огурец: 500 и так далее
    // });


    // let cities = [{ id: 121, name: 'г. Урюпинск' }, { id: 122, name: 'г. Париж' }, { id: 123, name: 'г. Москва' }, { id: 124, name: 'г. Штормград' }];
    // let searchTerm = 'г. Москва';
    // let cityId = cities.find(city => city.name === searchTerm).id
    // console.log(cityId);



    // console.log(state.tabs);
    // let user = state.tabs.find(item => state.tabs.path === newTabs[0].path);
    // console.log(user);

// let val = '';
//     if (state.tabs.length > 0){
//       let val = state.tabs.find(item => item.name === newTabs[0].name).name
//       console.log(val);
    // }


    //Если в стейте уже есть элемент, то не добавлять его.
    let val = state.tabs.some(item => item.name === newTabs[0].name)
    if (!val){
      const tabs = state.tabs.concat(newTabs)
      commit('TAB', tabs);
    }



    // const mapTab = new Map()
    // const tabs = mapTab.set(tab, path)
    // const data = tabs.forEach((value, key, map) => {
    //   console.log(`${key}: ${value}`); // огурец: 500 и так далее
    // });
    // let obj = Object.fromEntries(tabs.entries());
    // console.log(obj);








    // const tabs = state.tabs.concat(tab);

  },
};

export const mutations = {
  TAB: (state, tabs) => state.tabs = tabs,
};

export const getters = {
  tabs: state => state.tabs,
};
