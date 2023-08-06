<template>
    <div class="pt-[17px]">
        <div class="w-[320px]">
            <p class="text-[12px] leading-[16px] text-center">Fitur ini akan memberikan sebuah gambaran  terbaik mengenai pinjaman yang akan anda ajukan. Gunakanlah sesuai jumlah yang anda inginkan.</p>
        </div>

        <form action="">
            <div class="ps-[20px] pt-[17px]">
                <div class="pb-[12px]">
                    <label for="tanggal_peminjaman" class="text-[14px] leading-[20px] font-medium">Tanggal Peminjaman</label>
                    <input id="tanggal_peminjaman" name="tanggal_peminjaman" type="date" placeholder="05/04/2023" class="h-[34px] w-[320px] shadow appearance-none border py-2 px-7 leading-tight focus:outline-none focus:shadow-outline rounded-[14px]">
                </div>
                <div class="pb-[12px]">
                    <label for="nominal_peminjaman" class="text-[14px] leading-[20px] font-medium">Nominal Peminjaman</label>
                    <input id="nominal_peminjaman" name="nominal_peminjaman" type="number" placeholder="Masukkan Jumlah Nominal" class="h-[34px] w-[320px] placeholder:text-[#C9C9C9] shadow appearance-none border py-2 px-7 leading-tight focus:outline-none focus:shadow-outline rounded-[14px]">
                </div>
                <div class="pb-[12px]">
                    <label for="durasi_peminjaman" class="text-[14px] leading-[20px] font-medium">Durasi Peminjaman</label>
                    <select id="durasi_peminjaman" name="durasi_peminjaman" class="h-[34px] w-[320px] shadow appearance-none border py-2 px-7 leading-tight focus:outline-none focus:shadow-outline rounded-[14px] text-[#B9B9B9] focus:text-black">
                        <option value="volvo">Pilih Durasi</option>
                        <option value="saab">3 Bulan</option>
                        <option value="mercedes">6 Bulan</option>
                        <option value="audi">12 Bulan</option>
                    </select>
                </div>
                <div class="pb-[12px]">
                    <p class="text-[14px] leading-[20px] font-medium">Suku Bunga (Max)</p>
                    <p class="text-[14px] leading-[20px] font-bold">19 %</p>
                </div>
                <div class="">
                    <label for="biaya_layanan" class="text-[14px] leading-[20px] font-medium">Biaya Layanan</label>
                    <p class="text-[14px] leading-[20px] font-bold">0</p>
                </div>
            </div>

            <div class="ps-[20px] pt-[238px]">
                <button class="bg-[#016F30] w-[320px] h-[38px] flex justify-center items-center rounded-[100px]">
                    <p class="text-white text-[16px] leading-[24px]">Simulasi</p>
                </button>
            </div>
        </form>
    </div>
</template>