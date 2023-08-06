<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-[360px] h-[800px] bg-[#F8F8F8] rounded-2xl">

            <!-- Header -->
            <div class="h-[80px] flex justify-center items-center rounded-t-2xl bg-white shadow sticky top-0">
                <div class="w-[360px] flex justify-center">
                    <router-link to="/historypeminjaman" class="h-[80px] w-[80px] flex justify-center items-center">
                        <svg class="h-[22px] w-[13px] fill-[#000000]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                        </svg>
                    </router-link> 
                    <div class="flex items-center ps-[48px] pe-[70px]">
                        <p class="text-[22px] leading-[28px] font-bold text-black w-[95px] text-center">Langsung Bayar</p>
                    </div>
                    <div class="pe-[30px] flex items-center">
                        <img class="aspect-square w-[31px] h-[31px] rounded-full" src="../../../components/icons/headphones.png" alt="">
                    </div>
                </div>
            </div>

            <!-- content -->
            <div class="w-full flex justify-center">
                <div class="pt-[17px]">
                    <div class="bg-white w-[320px] h-[200px] rounded-[14px] shadow-sm">
                        <div class="px-[15px]">
                            <div class="pt-[12px] flex justify-between">
                                <div>
                                    <p class="text-[16px] leading-[24px]">Jumlah yang harus dibayar</p>
                                </div>
                                <router-link to="/detailpayment">
                                    <div>
                                        <p class="text-[#007A3B] font-[550]">Detail ></p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="pt-[8px] pb-[9px]">
                                <p class="font-bold text-[22px]">Rp. 2,393,800</p>
                            </div>
                            <div>
                                <hr class="">
                            </div>
                            <div class="flex justify-between pb-[10px] pt-[10px]">
                                <div>
                                    <p class="text-[16px] leading-[24px]">Kupon</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="text-[11px] text-[#A4A4A4] font-[500]">Kupon belum tersedia</p>
                                </div>
                            </div>
                            <div>
                                <hr class="">
                            </div>
                            <div class="pt-[15px] flex justify-center">
                                <div class="border border-[#007A3B] w-[222px] h-[41px] rounded-[100px] flex items-center justify-center">
                                    <p class="font-[600] text-[#007A3B] text-[16px] tracking-[.15px]">saya sudah melunasi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full flex justify-center">
                <div class="pt-[28px]">
                    <div class="bg-white w-[320px] h-[340px] rounded-[14px] shadow-sm">
                        <div class="px-[15px]">
                            <div class="pt-[12px]">
                                <p>
                                    Pilih Metode Pembayaran
                                </p>
                            </div>
                            <div class="pt-[17px]">
                                <div class="w-[281px] rounded-[14px] h-[93px] ps-[15px] border border-[#CDCDCD]">
                                    <div class="flex mt-[8px]">
                                        <img src="https://companieslogo.com/img/orig/BBNI.JK-69fac82a.png?t=1604763178" alt="" class=" w-[20px] h-[20px]">
                                        <div class="ps-[7px]">
                                            <p class="w-[61px] text-[14px] leading-[20px] tracking-[.25px]">Bank BNI</p>
                                        </div>
                                    </div>
                                    <div class="pt-[9px] flex items-center">
                                        <p class="leading-[28px] font-[600]">7815 0385 5421 4826</p>
                                        <font-awesome-icon :icon="['fas', 'copy']" class="ps-[7px]"/>
                                    </div>
                                    <div class="pt-[3px]">
                                        <p class="text-[11px]">Bagaimana cara membayar pinjaman ></p>
                                    </div>
                                </div>
                                <div class="w-[281px] rounded-[14px] h-[93px] mt-[14px] ps-[15px] border border-[#CDCDCD]">
                                    <div class="flex mt-[8px]">
                                        <img src="https://images.bisnis.com/posts/2021/10/01/1449190/logo-alfamart-alfamidi.jpg" alt="" class=" w-[20px] h-[20px]">
                                        <div class="ps-[7px]">
                                            <p class="w-[61px] text-[14px] leading-[20px] tracking-[.25px]">ALFA</p>
                                        </div>
                                    </div>
                                    <div class="pt-[9px] flex items-center">
                                        <p class="leading-[28px] font-[600]">1312 2184 5922 2345</p>
                                        <font-awesome-icon :icon="['fas', 'copy']" class="ps-[7px]"/>
                                    </div>
                                    <div class="pt-[3px]">
                                        <p class="text-[11px]">Bagaimana cara membayar pinjaman ></p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[281px] mt-[14px] h-[53px] border border-[#CDCDCD] rounded-[14px]">
                                <div class="flex justify-between items-center">
                                    <div class="w-[268px] h-[36px] ps-[15px] flex items-center">
                                        <p class="text-black text-[14px] leading-[18px]">Tidak punya akun bank diatas</p>
                                    </div>
                                    <div class="pe-[15px] h-[53px] flex items-center">
                                        <svg class="h-[22px] w-[10px] fill-[#000000]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="pt-[22px]">
                    <p class="text-[14px]">Masih bingung dengan alur peminjaman?</p>
                    <router-link to="faq" class="flex justify-center">
                        <div class="flex justify-center items-center mt-[10px] rounded-[100px] bg-[#016F30] w-[60px] h-[30px]">
                            <p class="text-white text-[14px]">FAQ</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>