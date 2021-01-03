
export const state = () => ({
  ruleForm: []
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

  async submitForm ({state}) {
    if (!state.ruleForm.email || !state.ruleForm.password) {
      console.log('Поля не заполнены!!!!')
      // Message.error({
      //   message: 'Пустое поле',
      //   center: true
      // });
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
  RULE_FORM: (state, ruleForm) => state.ruleForm = ruleForm
};

export const getters = {
  ruleForm: state => state.ruleForm
};
