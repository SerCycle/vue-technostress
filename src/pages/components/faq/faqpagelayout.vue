<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-[360px] h-[800px] bg-white rounded-2xl">
            
            <!-- Header -->
            <div class="h-[80px] flex justify-center items-center rounded-t-2xl bg-white shadow sticky top-0">
                <div class="w-[360px] flex justify-center">
                    <router-link to="/homepage" class="h-[80px] w-[80px] flex justify-center items-center">
                        <svg class="h-[22px] w-[13px] fill-[#000000]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                        </svg>
                    </router-link> 
                    <div class="flex items-center ps-[76px] pe-[98px]">
                        <p class="text-[22px] leading-[28px] font-bold text-black">FAQ</p>
                    </div>
                    <div class="pe-[30px] flex items-center">
                        <img class="aspect-square w-[31px] h-[31px] rounded-full" src="../../../components/icons/headphones.png" alt="">
                    </div>
                </div>
            </div>

            <!-- button -->
            <div class="p-[20px] pt-[22px] space-y-[22px]">

                <!-- Melakukan Pinjaman -->
                <router-link to="/faq/pinjaman/1" class="w-[320px] h-[58px] bg-[#007A3B] flex justify-between items-center rounded-[14px]">
                    <p class="ps-[20px] text-white">Melakukan Pinjaman</p>
                    <div class="pe-[20px] h-[53px] flex items-center">
                        <svg class="h-[22px] w-[13px] fill-[#ffffff]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                        </svg>
                    </div>
                </router-link>

                <!-- Melakukan Simulasi -->
                <router-link to="/faq/simulasi/1" class="w-[320px] h-[58px] bg-[#007A3B] flex justify-between items-center rounded-[14px]">
                    <p class="ps-[20px] text-white">Melakukan Simulasi</p>
                    <div class="pe-[20px] h-[53px] flex items-center">
                        <svg class="h-[22px] w-[13px] fill-[#ffffff]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                        </svg>
                    </div>
                </router-link>

                <!-- Melakukan Pembayaran -->
                <router-link to="/faq/pembayaran" class="w-[320px] h-[58px] bg-[#007A3B] flex justify-between items-center rounded-[14px]">
                    <p class="ps-[20px] text-white">Melakukan Pemabayaran</p>
                    <div class="pe-[20px] h-[53px] flex items-center">
                        <svg class="h-[22px] w-[13px] fill-[#ffffff]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                        </svg>
                    </div>
                </router-link>

                <!-- Perjanjian Pinjaman -->
                <div class="w-[320px] h-[58px] bg-[#007A3B] flex justify-between items-center rounded-[14px]">
                    <p class="ps-[20px] text-white">Perjanjian Pinjaman</p>
                    <div class="pe-[20px] h-[53px] flex items-center">
                        <svg class="h-[22px] w-[13px] fill-[#ffffff]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>