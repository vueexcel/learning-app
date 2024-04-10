import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface User {
  name: string,
  email: string,
  token: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  function setUser(newUser: User) {
    user.value = newUser
  }

  return {
    user,
    setUser
  }
})
