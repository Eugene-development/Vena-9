export const state = () => ({
  ruleForm: {},
  alertDanger: {},
  placeholder: {}
});

export const actions = {

  // Заполнение полей формы при строгом режиме
  updateRuleForm_email ({commit, state}, e) {
    const ruleForm = {
      name: state.ruleForm.name,
      email: e.target.value,
      password: state.ruleForm.password
    };
    commit('RULE_FORM', ruleForm)
  },
  updateRuleForm_password ({commit, state}, e) {
    const ruleForm = {
      name: state.ruleForm.name,
      email: state.ruleForm.email,
      password: e.target.value
    };
    commit('RULE_FORM', ruleForm)
  },

  //Отправка формы на сервер
  async submitForm({commit, state}) {

      //Валидация полей формы. bg-red
      if (!state.ruleForm.email) {
        const alertDanger = {
          email: true,
          password: state.alertDanger.password
        };
        commit('ALERT_DANGER', alertDanger)
      }
      if (!state.ruleForm.password) {
        const alertDanger = {
          email: state.alertDanger.email,
          password: true,
        };
        commit('ALERT_DANGER', alertDanger)
      }
      //Валидация полей формы placeholder
      const placeholder = {
        email: 'Введите логин',
        password: 'Введите пароль'
      };
      commit('PLACEHOLDER', placeholder)

    //Выполнение метода при успешной валидации
    if (state.ruleForm.email && state.ruleForm.password) {
      await this.$auth.login({
        data: {
          email: state.ruleForm.email,
          password: state.ruleForm.password
        }
      });
      await this.$router.push(
        '/'
      )
    }
  },
};

export const mutations = {
  RULE_FORM: (state, ruleForm) => state.ruleForm = ruleForm,
  ALERT_DANGER: (state, alertDanger) => state.alertDanger = alertDanger,
  PLACEHOLDER: (state, placeholder) => state.placeholder = placeholder
};

export const getters = {
  ruleForm: state => state.ruleForm,
  alertDanger: state => state.alertDanger,
  placeholder: state => state.placeholder
};
