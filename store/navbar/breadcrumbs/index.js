export const state = () => ({
  breadcrumbs: 'Главная страница',
  breadcrumbsEndPoint: '',
//  массив пустой
});

export const actions = {

  getBread({ commit, state }, pathName) {

    let map = new Map([
      ['content-navigation', 'Навигация'],
      [1,    'num1'],
      [true, 'bool1']
    ]);

    const breadcrumbsEndPoint = map.get(pathName);
    commit('BREAD_ENDPOINT', breadcrumbsEndPoint);
  },
};

export const mutations = {
  BREAD: (state, breadcrumbs) => state.breadcrumbs = breadcrumbs,
  BREAD_ENDPOINT: (state, breadcrumbsEndPoint) => state.breadcrumbsEndPoint = breadcrumbsEndPoint,
};


export const getters = {
  breadcrumbs: state => state.breadcrumbs,
  breadcrumbsEndPoint: state => state.breadcrumbsEndPoint,
};
