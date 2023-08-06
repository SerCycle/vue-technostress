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
                    <div class="flex items-center ps-[51px] pe-[73px]">
                        <p class="text-[22px] leading-[28px] font-bold text-black w-[95px]">Simulasi Pinjaman</p>
                    </div>
                    <div class="pe-[30px] flex items-center">
                        <img class="aspect-square w-[31px] h-[31px] rounded-full" src="../../../components/icons/headphones.png" alt="">
                    </div>
                </div>
            </div>

            <!-- router view -->
            <div class="w-full flex justify-center">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>