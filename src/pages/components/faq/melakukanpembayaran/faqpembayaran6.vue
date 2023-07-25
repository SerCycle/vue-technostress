<template>
    <div class="pt-[21px]">

        <!-- Narasi -->
        <div class="text-center w-[320px] h-[100px]">
            <p class="text-[14px] tracking-[0.25px]">Anda dapat melakukan pembayaran sesuai prosedur masing masing metode. Apabila sudah melakukan pembayaran namun belum lunas, maka dapat melakukan pengajuan dengan klik “Saya sudah melunasi”</p>
        </div>

        <!-- image -->
        <div class="pt-[21px] flex justify-center">
            <div class="shadow-lg rounded-2xl">
                <img src="../../../../components/UI_faq/pembayaran/Bayar Page (1).png" alt="">
            </div>
        </div>

        <!-- button -->
        <div class="pt-[58px] flex justify-between">
            <router-link to="/faq/pembayaran/5" class="bg-[#E3FFF1] w-[100px] h-[38px] flex justify-center items-center rounded-[100px] shadow-md">
                <p class="text-[#007A3B]">&lt Back</p>
            </router-link>
            <router-link to="/faq/pembayaran/7" class="bg-[#007A3B] w-[100px] h-[38px] flex justify-center items-center rounded-[100px] shadow-md">
                <p class="text-white">Next ></p>
            </router-link>
        </div>
    </div>
</template>