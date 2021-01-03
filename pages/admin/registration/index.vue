<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://signal52.ru/assets/templates/s52/images/logo.png" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Регистрация <br> пользователя
      </h2>
<!--      <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">-->
<!--        Or-->
<!--        <a href="#" class="font-medium text-teal-600 hover:text-teal-500 focus:outline-none focus:underline transition ease-in-out duration-150">-->
<!--          start your 14-day free trial-->
<!--        </a>-->
<!--      </p>-->
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form :model="ruleFormValidate" :rules="rules" ref="ruleForm" @submit.prevent="submitForm">
          <div>
            <label for="name" class="block text-sm font-medium leading-5 text-gray-700">
              Ваше имя
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                v-model="ruleFormValidate.name"
                @input="updateRuleForm_name"
                id="name"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6">
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
              Ваша почта
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                v-model="ruleFormValidate.email"
                @input="updateRuleForm_email"
                id="email"
                type="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
              Пароль
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                v-model="ruleFormValidate.password"
                @input="updateRuleForm_password"
                id="password"
                type="password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6">
            <label for="confirm_password" class="block text-sm font-medium leading-5 text-gray-700">
              Повторите пароль
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                v-model="ruleFormValidate.checkPassword"
                id="confirm_password"
                type="password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-teal-600 transition duration-150 ease-in-out">
              <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
                Запомнить
              </label>
            </div>

            <div class="text-sm leading-5">
              <a href="#" class="font-medium text-teal-600 hover:text-teal-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                Забыли пароль?
              </a>
            </div>
          </div>

          <div class="mt-6">
          <span class="block w-full rounded-md shadow-sm">
            <button
              @click.prevent="submitForm('ruleFormValidate')"
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-50 bg-teal-700 hover:bg-teal-600 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out">
              Зарегистрировать
            </button>


<!--                        <button @click="resetForm('ruleForm')">Очистить</button>-->

          </span>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm leading-5">
            <span class="px-2 bg-white text-gray-500">
              или
            </span>
            </div>
          </div>

          <NuxtLink
            class="mt-6 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-50 bg-teal-700 hover:bg-teal-600 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out"
            role="menuitem"
            to="/admin/login">Войти в аккаунт
          </NuxtLink>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  layout: 'empty',
  data() {
    let validatePass2 = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('Пароли не совпадают'));
      } else {
        callback();
      }
    };
    return {
      ruleFormValidate: {
        name: '',
        email: '',
        password: '',
      },
      rules: {
        name: [
          {required: true, message: 'Заполните поле', trigger: 'blur'},
        ],
        email: [
          { required: true, message: 'Заполните поле', trigger: 'blur' },
          { type: 'email',  message: 'Неверный формат почты', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Заполните поле', trigger: 'blur' },
        ],
        checkPassword: [
          { required: true, message: 'Заполните поле', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
      },
    };
  },


  methods: {
    ...mapActions({
      'updateRuleForm_name': 'myAuth/registration/updateRuleForm_name',
      'updateRuleForm_email': 'myAuth/registration/updateRuleForm_email',
      'updateRuleForm_password': 'myAuth/registration/updateRuleForm_password',
      'submitForm': 'myAuth/registration/submitForm',
    }),


    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       debugger
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    // async submitForm () {
    //   await this.$axios.post('http://127.0.0.1:8000/api/register', this.ruleForm);
    //
    //   await this.$auth.login({
    //     data: {
    //       name: this.ruleForm.name,
    //       email: this.ruleForm.email,
    //       password: this.ruleForm.password
    //     }
    //   });
    //
    //   await this.$router.push({
    //     path: this.$route.query.redirect || '/admin/office'
    //   })
    // },


    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    ...mapGetters({
      ruleForm: 'myAuth/registration/ruleForm',
    }),
  },

}
</script>

<style scoped>

</style>
