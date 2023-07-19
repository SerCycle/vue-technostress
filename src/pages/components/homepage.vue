<template>

    <!-- Home Header -->
    <div class="pt-[18px] ps-[20px] pe-[20px] pb-[20px] flex justify-between">
        <div class="flex">
            <div class="pe-[12px]">
                <img class="aspect-square w-[56px] h-[56px] rounded-full" src="../../components/photos/profile.jpg" alt="">
            </div>
            <div>
                <p class="text-[22px] font-bold leading-7">Welcome, <br/>Alif Yanuar</p>
            </div>
        </div>
        <div class="pt-[10px]">
            <img class="aspect-square w-[37px] h-[37px]" src="../../components/icons/group-chat.png" alt="">
        </div>
    </div>

    <!-- Card Limit -->
    <div class="ps-[20px] pe-[20px]">
        <div class="w-[320px] h-[240px] bg-[#007A3B] rounded-[14px]">
            <div class="w-[320px] h-[33px] bg-[#058C23] rounded-t-[14px] flex justify-center items-center">
                <p class="text-white text-[14px] leading-5">Limit akan diperbaharui dalam 2 hari lagi</p>
            </div>
            <div class="pt-[9px] w-[320px] flex justify-center items-center">
                <p class="text-[14px] text-white leading-5">Sisa limit anda</p>
            </div>
            <div class="pt-[7px] w-[320px] flex justify-center items-center">
                <p class="text-white text-[40px] font-bold leading-[52px]">Rp. 356,576</p>
            </div>
            <div class="pt-[7px] w-[320px] flex justify-center items-center">
                <p class="text-white text-[12px] leading-4">Bunga &lt 0.4% / hari</p>
            </div>
            <div class="pt-[6px] w-[320px] flex justify-center">
                <div class="bg-white w-[222px] h-[47px] flex justify-center items-center rounded-[100px]">
                    <p class="text-[#13593D] text-[22px] leading-[28px]">Segera Pinjam</p>
                </div>
            </div>
            <div class="pt-[10px] w-[320px] flex justify-center items-center">
                <p class="text-white text-[12px] leading-4">Syarat & Ketentuan &gt</p>
            </div>
        </div>
    </div>

    <!-- Notif Peminjaman Berjalan -->
    <div class="ps-[20px] pt-[14px]">
        <div class="w-[320px] h-[104px] bg-[#10593C] rounded-[14px]">
            <div class="h-[26px] w-[320px] bg-[#0E523B] rounded-t-[14px]">
                <div class="flex justify-between">
                    <div class="flex items-center h-[26px] w-[320px] ">
                        <p class="text-white text-[12px] ps-[14px] leading-[16px] font-[500]">Tenggat Pembayaran</p>
                        <p class="text-[#E2786A] ps-[8px] text-[12px] leading-[16px]">21/04/2023</p>
                    </div>
                    <div class="">
                        <div class="text-center h-[17px] w-[92px] bg-[#FF5055] rounded-bl-[14px] rounded-tr-[14px]">
                            <p class="text-white text-[11px]">Lewat 12 hari</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <div>
                    <div class="pt-[8px] ps-[14px]">
                        <p class="text-white text-[14px]">Jumlah Pembayaran (Rp)</p>
                    </div>
                    <div class="ps-[14px]">
                        <p class="text-white text-[28px] leading-[36px]">2,393,800</p>
                    </div>
                </div>
                <div class="pe-[16px] pt-[10px]">
                    <div class="bg-white w-[98px] h-[38px] flex justify-center items-center rounded-[100px]">
                        <p class="text-[#13593D] text-[22px] leading-[24px]">Bayar</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Go To FaQ -->
    <router-link to="/faqpage">
        <div class="ps-[20px] pt-[14px]">
            <div class="w-[320px] h-[53px] bg-[#10593C] rounded-[14px]">
                <div class="flex justify-between items-center">
                    <div class="w-[268px] h-[36px] ps-[14px]">
                        <p class="text-white text-[15px] leading-[18px]">Masih bingung dengan cara penggunaan? Yuk cari tahu di FAQ</p>
                    </div>
                    <div class="pe-[15px] h-[53px] flex items-center">
                        <svg class="h-[22px] w-[13px] fill-[#ffffff]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </router-link>

    <div class="ps-[20px] pt-[19px] flex justify-around w-[320px]">
        <div class="">
            <div class="flex justify-center">
                <div class="h-[48px] w-[48px]">
                    <img class="aspect-square w-[48px] h-[48px]" src="../../components/icons/money.png" alt="">
                </div>
            </div>
            <div class="pt-[4px] flex justify-center">
                <p>point</p>
            </div>
        </div>
        <div>
            <div class="flex justify-center">
                <div class="h-[48px] w-[48px]">
                    <img class="aspect-square w-[48px] h-[48px]" src="../../components/icons/petition.png" alt="">
                </div>
            </div>
            <div class="pt-[4px] flex justify-center">
                <p>Simulasi</p>
            </div>
        </div>
    </div>

    <!-- History Peminjaman -->
    <div class="pt-[14px] ps-[20px] w-[320px]">
        <div>
            <p class="font-[500] text-[16px]">Peminjaman Bulan Maret</p>
        </div>
        <div class="pt-[14px]">
            <div class="h-[93px] w-[320px] bg-white shadow-md rounded-[14px]">
                <div class="flex justify-between bg-[#DCF7E1] rounded-t-[14px] h-[26px]">
                    <div class="ps-[25px] pt-[5px]">
                        <p class="text-[#398B62] text-[11px]">No Pesanan: Q2W3E4R5</p>
                    </div>
                    <div class="bg-[#92B2A3] text-center w-[110px] h-[17px] rounded-bl-[14px] rounded-tr-[14px]">
                        <p class="text-[11px] text-white">Sudah Melunasi</p>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="ps-[22px]">
                        <div class="pt-[11px]">
                            <p class="text-[#C6C6C6] text-[14px] leading-[20px]">Jumlah Pinjaman</p>
                        </div>
                        <div>
                            <p class="text-[14px] leading-[20px] font-bold">Rp. 2,300,000</p>
                        </div>
                    </div>
                    <div class="pe-[22px]">
                        <div class="pt-[11px]">
                            <p class="text-[#C6C6C6] text-[14px] leading-[20px]">Tanggal Pengajuan</p>
                        </div>
                        <div>
                            <p class="text-[14px] leading-[20px] font-bold">07/03/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-[14px]">
            <div class="h-[93px] w-[320px] bg-white shadow-md rounded-[14px]">
                <div class="flex justify-between bg-[#DCF7E1] rounded-t-[14px] h-[26px]">
                    <div class="ps-[25px] pt-[5px]">
                        <p class="text-[#398B62] text-[11px]">No Pesanan: Q2W3E4R5</p>
                    </div>
                    <div class="bg-[#92B2A3] text-center w-[110px] h-[17px] rounded-bl-[14px] rounded-tr-[14px]">
                        <p class="text-[11px] text-white">Tinjauan Ditolak</p>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="ps-[22px]">
                        <div class="pt-[11px]">
                            <p class="text-[#C6C6C6] text-[14px] leading-[20px]">Jumlah Pinjaman</p>
                        </div>
                        <div>
                            <p class="text-[14px] leading-[20px] font-bold">Rp. 2,300,000</p>
                        </div>
                    </div>
                    <div class="pe-[22px]">
                        <div class="pt-[11px]">
                            <p class="text-[#C6C6C6] text-[14px] leading-[20px]">Tanggal Pengajuan</p>
                        </div>
                        <div>
                            <p class="text-[14px] leading-[20px] font-bold">04/03/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-[14px] pb-[14px]">
            <div class="h-[93px] w-[320px] bg-white shadow-md rounded-[14px]">
                <div class="flex justify-between bg-[#DCF7E1] rounded-t-[14px] h-[26px]">
                    <div class="ps-[25px] pt-[5px]">
                        <p class="text-[#398B62] text-[11px]">No Pesanan: Q2W3E4R5</p>
                    </div>
                    <div class="bg-[#92B2A3] text-center w-[110px] h-[17px] rounded-bl-[14px] rounded-tr-[14px]">
                        <p class="text-[11px] text-white">Tinjauan Ditolak</p>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="ps-[22px]">
                        <div class="pt-[11px]">
                            <p class="text-[#C6C6C6] text-[14px] leading-[20px]">Jumlah Pinjaman</p>
                        </div>
                        <div>
                            <p class="text-[14px] leading-[20px] font-bold">Rp. 2,300,000</p>
                        </div>
                    </div>
                    <div class="pe-[22px]">
                        <div class="pt-[11px]">
                            <p class="text-[#C6C6C6] text-[14px] leading-[20px]">Tanggal Pengajuan</p>
                        </div>
                        <div>
                            <p class="text-[14px] leading-[20px] font-bold">01/03/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>