<template>
    <div class="pt-[61px]">

        <!-- Narasi -->
        <div class="text-center w-[320px] h-[60px]">
            <p class="text-[14px] tracking-[0.25px]">Jika sudah melakukan simulasi, maka akan tertampil tampilan rincian peminjaman dan juga pembayaran terhadap pinjaman.</p>
        </div>

        <!-- image -->
        <div class="pt-[21px] flex justify-center">
            <div class="shadow-lg rounded-2xl">
                <img src="../../../../components/UI_faq/simulasi/Hasil Simulasi Page (Hi-Fi Done).png" alt="">
            </div>
        </div>

        <!-- button -->
        <div class="pt-[58px] flex justify-between">
            <router-link to="/faq/simulasi/2" class="bg-[#E3FFF1] w-[100px] h-[38px] flex justify-center items-center rounded-[100px] shadow-md">
                <p class="text-[#007A3B]">&lt Back</p>
            </router-link>
            <router-link to="/faq" class="bg-[#007A3B] w-[100px] h-[38px] flex justify-center items-center rounded-[100px] shadow-md">
                <p class="text-white">Done</p>
            </router-link>
        </div>
    </div>
</template>