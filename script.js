// Hàm tính chu vi hình chữ nhật
function chuViHinhChuNhat(chieuDai, chieuRong) {
    return (chieuDai + chieuRong) * 2;
}

// Hàm tính diện tích hình chữ nhật
function dienTichHinhChuNhat(chieuDai, chieuRong) {
    return chieuDai * chieuRong;
}

// Hàm tính chu vi hình vuông
function chuViHinhVuong(canh) {
    return canh * 4;
}

// Hàm tính diện tích hình vuông
function dienTichHinhVuong(canh) {
    return canh * canh;
}

// Hàm chính để tính toán
function tinhToan() {
    // Lấy dữ liệu từ form bằng CLASS
    var luaChon = document.getElementsByClassName("lua-chon")[0].value;
    var soA = document.getElementsByClassName("so-a")[0].value;
    var soB = document.getElementsByClassName("so-b")[0].value;
    
    var ketQua = "";

    // Kiểm tra lựa chọn bằng if-else
    if (luaChon == 1) {
        // Chu vi hình chữ nhật
        var chuVi = chuViHinhChuNhat(Number(soA), Number(soB));
        ketQua = "Chu vi hình chữ nhật = " + chuVi;
    }
    else if (luaChon == 2) {
        // Diện tích hình chữ nhật
        var dienTich = dienTichHinhChuNhat(Number(soA), Number(soB));
        ketQua = "Diện tích hình chữ nhật = " + dienTich;
    }
    else if (luaChon == 3) {
        // Chu vi hình vuông
        var chuVi = chuViHinhVuong(Number(soA));
        ketQua = "Chu vi hình vuông = " + chuVi;
    }
    else if (luaChon == 4) {
        // Diện tích hình vuông
        var dienTich = dienTichHinhVuong(Number(soA));
        ketQua = "Diện tích hình vuông = " + dienTich;
    }
    else {
        ketQua = "Vui lòng nhập số từ 1 đến 4!";
    }

    // Hiển thị kết quả bằng CLASS
    document.getElementsByClassName("ket-qua")[0].innerHTML = "<strong>Kết quả:</strong> " + ketQua;
}
