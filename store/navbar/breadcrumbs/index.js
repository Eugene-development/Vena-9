export const state = () => ({
  breadcrumbsEndPoint: '',
  breadMap: [
    ['/', 'Главная'],
    ['/content/navigation', 'Навигация'],
  ]
//  массив пустой
});

export const actions = {

  getBread({ commit, state }, path) {

    const map = new Map(state.breadMap);

    const breadcrumbsEndPoint = map.get(path);
    commit('BREAD_ENDPOINT', breadcrumbsEndPoint);
  },
};

export const mutations = {
  BREAD_ENDPOINT: (state, breadcrumbsEndPoint) => state.breadcrumbsEndPoint = breadcrumbsEndPoint,
};


export const getters = {
  breadcrumbsEndPoint: state => state.breadcrumbsEndPoint,
};
