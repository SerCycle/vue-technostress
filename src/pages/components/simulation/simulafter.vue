<template>
    <div>
        <div class="pt-[17px] leading-[20px] tracking-[.1px] text-[14px]">
            <div class="w-[320px] flex justify-between">
                <div class="">
                    <div>
                        <p>Tanggal peminjaman</p>
                        <p class="font-bold">02/01/2023</p>
                    </div>
                    <div class="pt-[12px]">
                        <p>Durasi peminjaman</p>
                        <p class="font-bold">6 Bulan</p>
                    </div>
                    <div class="pt-[12px]">
                        <p>Biaya Layanan</p>
                        <p class="font-bold">0</p>
                    </div>
                </div>
                <div class="">
                    <div>
                        <p>Nominal peminjaman</p>
                        <p class="font-bold">6,000,000</p>
                    </div>
                    <div class="pt-[12px]">
                        <p>Suku Bunga</p>
                        <p class="font-bold">6,000,000</p>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="text-center pt-[12px] text-[22px]">
            Rincian Pembayaran
        </div>

        <div class="pt-[8px]">
            <div class="h-[400px] bg-[#007A3B] px-[10px] rounded-[14px] leading-[24px] tracking-[.15px] shadow-sm text-white">
                <div class="pt-[12px]">
                    <div class="text-[16px] flex justify-between">
                        <p>Bulan</p>
                        <p>Tanggal Pelunasan</p>
                        <p>Jumlah</p>
                    </div>
                </div>
                <div>
                    <hr>
                </div>
                <div class="pt-[4px] pb-[3px]">
                    <div class="text-[16px] flex">
                        <p class="pe-[50px]">1/6</p>
                        <p class="pe-[60px]">02/02/2023</p>
                        <p>1,190,000</p>
                    </div>
                    <div class="text-[14px] flex">
                        <p class="pe-[15px]">Biaya Layanan: 0</p>
                        <p>Bunga: 190,000</p>
                    </div>
                </div>
                <div>
                    <hr>
                </div>
                <div class="pt-[4px] pb-[3px]">
                    <div class="text-[16px] flex">
                        <p class="pe-[50px]">2/6</p>
                        <p class="pe-[60px]">02/03/2023</p>
                        <p>1,190,000</p>
                    </div>
                    <div class="text-[14px] flex">
                        <p class="pe-[15px]">Biaya Layanan: 0</p>
                        <p>Bunga: 190,000</p>
                    </div>
                </div>
                <div>
                    <hr>
                </div>
                <div class="pt-[4px] pb-[3px]">
                    <div class="text-[16px] flex">
                        <p class="pe-[50px]">3/6</p>
                        <p class="pe-[60px]">02/04/2023</p>
                        <p>1,190,000</p>
                    </div>
                    <div class="text-[14px] flex">
                        <p class="pe-[15px]">Biaya Layanan: 0</p>
                        <p>Bunga: 190,000</p>
                    </div>
                </div>
                <div>
                    <hr>
                </div>
                <div class="pt-[4px] pb-[3px]">
                    <div class="text-[16px] flex">
                        <p class="pe-[50px]">4/6</p>
                        <p class="pe-[60px]">02/05/2023</p>
                        <p>1,190,000</p>
                    </div>
                    <div class="text-[14px] flex">
                        <p class="pe-[15px]">Biaya Layanan: 0</p>
                        <p>Bunga: 190,000</p>
                    </div>
                </div>
                <div>
                    <hr>
                </div>
                <div class="pt-[4px] pb-[3px]">
                    <div class="text-[16px] flex">
                        <p class="pe-[50px]">5/6</p>
                        <p class="pe-[60px]">02/06/2023</p>
                        <p>1,190,000</p>
                    </div>
                    <div class="text-[14px] flex">
                        <p class="pe-[15px]">Biaya Layanan: 0</p>
                        <p>Bunga: 190,000</p>
                    </div>
                </div>
                <div>
                    <hr>
                </div>
                <div class="pt-[4px] pb-[3px]">
                    <div class="text-[16px] flex">
                        <p class="pe-[50px]">6/6</p>
                        <p class="pe-[60px]">02/07/2023</p>
                        <p>1,190,000</p>
                    </div>
                    <div class="text-[14px] flex">
                        <p class="pe-[15px]">Biaya Layanan: 0</p>
                        <p>Bunga: 190,000</p>
                    </div>
                </div>
                <div>
                    <hr>
                </div>
            </div>
        </div>

        <router-link to="/simulation/input">
            <div class="pt-[20px]">
                <button class="bg-[#016F30] w-[320px] h-[38px] flex justify-center items-center rounded-[100px]">
                    <p class="text-white text-[16px] leading-[24px]">Simulasi Ulang</p>
                </button>
            </div>
        </router-link>
    </div>
</template>