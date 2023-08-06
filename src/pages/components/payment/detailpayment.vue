<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-[360px] h-[800px] bg-[#F8F8F8] rounded-2xl">
            
            <!-- Header -->
            <div class="h-[71px] flex justify-center items-center rounded-t-2xl bg-white shadow sticky top-0">
                <div class="w-[360px] flex">
                    <router-link to="/payment" class="h-[71px] w-[80px] flex justify-center items-center">
                        <svg class="h-[22px] w-[13px] fill-[#000000]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                        </svg>
                    </router-link> 
                    <div class="flex items-center ps-[19px]">
                        <p class="text-[22px] leading-[28px] font-bold text-black w-[163px] text-center">Detail Pinjaman</p>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="w-full flex justify-center">
                <div class="pt-[17px]">
                    <div class="bg-white w-[320px] h-[105px] rounded-[14px] shadow-sm">
                        <div class="px-[20px] py-[19px] text-[14px] leading-[20px] tracking-[.25px]">
                            <div class="flex justify-between pb-[13px]">
                                <p>Periode saat ini</p>
                                <p>1/3</p>
                            </div>
                            <div>
                                <hr>
                            </div>
                            <div class="flex justify-between pt-[14px]">
                                <p>Tanggal Pelunasan</p>
                                <p>21/04/2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full flex justify-center">
                <div class="pt-[18px]">
                    <div class="bg-white w-[320px] h-[246px] rounded-[14px] shadow-sm">
                        <div class="px-[20px] py-[19px] text-[14px] leading-[20px] tracking-[.25px]">
                            <div class="text-center pb-[8px]">
                                <p class="font-[600] leading-[24px] tracking-[.15px] text-[16px]">Rincian Tagihan</p>
                            </div>
                            <div>
                                <hr>
                            </div>
                            <div class="flex justify-between pt-[15px] pb-[10px]">
                                <p>Total Biaya Layanan</p>
                                <p>Rp. 6,500</p>
                            </div>
                            <div>
                                <hr>
                            </div>
                            <div class="flex justify-between pt-[17px] pb-[13px]">
                                <p>Total Bunga</p>
                                <p>Rp. 87,300</p>
                            </div>
                            <div>
                                <hr>
                            </div>
                            <div class="flex justify-between pt-[14px] pb-[16px]">
                                <p>Jumlah Tagihan</p>
                                <p>Rp. 2,300,000</p>
                            </div>
                            <div>
                                <hr>
                            </div>
                            <div class="flex justify-between pt-[11px]">
                                <p>Kupon</p>
                                <p>-Rp. 0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full flex justify-center">
                <div class="pt-[18px]">
                    <div class="bg-white w-[320px] h-[58px] rounded-[14px] shadow-sm">
                        <div class="px-[20px] py-[19px] text-[14px] leading-[20px] tracking-[.25px]">
                            <div class="flex justify-between">
                                <p>Pembayaran Aktual</p>
                                <p class="font-bold">Rp. 2,393,800</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full flex justify-center">
                <div class="pt-[18px]">
                    <div class="bg-white w-[320px] h-[58px] rounded-[14px] shadow-sm">
                        <div class="px-[20px] py-[19px] text-[14px] leading-[20px] tracking-[.25px]">
                            <div class="flex justify-between">
                                <p>Perjanjian Pinjaman</p>
                                <div class=" flex items-center">
                                    <svg class="h-[22px] w-[13px] fill-[#000000]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <router-link to="/simulation/input">
                <div class="ps-[20px] pt-[97px]">
                    <div class="bg-[#016F30] w-[320px] h-[38px] flex justify-center items-center rounded-[100px]">
                        <p class="text-white text-[16px] leading-[24px]">Simulasi</p>
                    </div>
                </div>
            </router-link>

        </div>
    </div>
</template>