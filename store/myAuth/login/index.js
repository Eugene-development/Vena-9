
export const state = () => ({
  ruleForm: {},
  alertDanger: {},
  placeholder: {}
});

export const actions = {

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
    // console.log(e.target.value);
    commit('RULE_FORM', ruleForm)
  },

  async submitForm({commit, state}) {
    if (!state.ruleForm.email || !state.ruleForm.password) {

      if (!state.ruleForm.email) {
        const alertDanger = {
          email: true,
        };
        commit('ALERT_DANGER', alertDanger)
      }
      if (!state.ruleForm.password) {
        const alertDanger = {
          password: true,
        };
        commit('ALERT_DANGER', alertDanger)
      }
      if (!state.ruleForm.email && !state.ruleForm.password) {
        const alertDanger = {
          email: true,
          password: true,
        };
        commit('ALERT_DANGER', alertDanger)
      }

      const placeholder = {
        email: 'Введите логин',
        password: 'Введите пароль'
      };
      commit('PLACEHOLDER', placeholder)

    }
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
