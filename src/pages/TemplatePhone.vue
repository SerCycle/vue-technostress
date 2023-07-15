<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="w-[360px] h-[800px] bg-gray-400">
      <div class="h-[calc(800px-92px)] bg-[#F6F854]">
        <div class="h-full">
          <router-view></router-view>
        </div>
      </div>
      
      <!-- navbar -->
      <div class="bg-white h-[92px] shadow">
        <div class="flex justify-around">
          <router-link to="/">
            <div class="pt-[21px] pb-[14px]">
              <div class="flex justify-center">
                <font-awesome-icon class="h-[35px] w-[35px]" :style="{ color: isActive('/') ? 'black' : 'gray' }" icon="fa-solid fa-house" />
              </div>
              <span class="font-[12px]">Beranda</span>
            </div>
          </router-link>
          <div>
            test
          </div>
          <div>
            test
          </div>
          <!-- <router-link to="/">1</router-link>
          <router-link to="/">1</router-link>
          <router-link to="/">1</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
};
</script>