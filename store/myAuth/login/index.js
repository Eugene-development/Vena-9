
export const state = () => ({
  ruleForm: {},
  alertDanger: false,
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

    console.log(e.target.value);
    commit('RULE_FORM', ruleForm)
  },

  async submitForm({commit, state}) {
    if (!state.ruleForm.email || !state.ruleForm.password) {
      console.log('Поля не заполнены!!!!');
      const alertDanger = true;
      // const alertDanger = true;
      const placeholder = {
        email: 'Поле пустое'
      };
      commit('ALERT_DANGER', alertDanger)
      commit('PLACEHOLDER', placeholder)
    } else {
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
