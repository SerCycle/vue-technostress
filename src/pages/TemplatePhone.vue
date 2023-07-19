<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="w-[360px] h-[800px] bg-gray-400">
      <div class="h-[calc(800px-92px)] bg-white overflow-y-auto scrollbar-hide">
        <div class="h-full">
          <router-view></router-view>
        </div>
      </div>
      
      <!-- navbar -->
      <div class="bg-white h-[92px] shadow">
        <div class="flex justify-around">
          <router-link to="/homepage">
            <div class="pt-[20px] pb-[13px]">
              <div class="flex justify-center">
                <svg class="h-[35px] w-[35px] fill-[#000000]" :class="{'fill-[#00903B]' : isActive('/homepage')}" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                </svg>
              </div>
              <span class="text-xs" :class="{'text-[#00903B]' : isActive('/homepage')}">Beranda</span>
            </div>
          </router-link>
          <router-link to="/historypeminjaman">
            <div class="pt-[20px] pb-[13px]">
              <div class="flex justify-center">
                <svg class="h-[35px] w-[35px] fill-[#000000]" :class="{'fill-[#00903B]' : isActive('/historypeminjaman')}" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
              </div>
              <span class="text-xs" :class="{'text-[#00903B]' : isActive('/historypeminjaman')}">Riwayat Pinjaman</span>
            </div>
          </router-link>
          <router-link to="/account">
            <div class="pt-[20px] pb-[13px]">
              <div class="flex justify-center">
                <svg class="h-[35px] w-[35px] fill-[#000000]" :class="{'fill-[#00903B]' : isActive('/account')}" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                </svg>
              </div>
              <span class="text-xs" :class="{'text-[#00903B]' : isActive('/account')}">Akun Saya</span>
            </div>
          </router-link>
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