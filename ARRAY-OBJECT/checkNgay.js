function checkNgay() {
    with (frm) {
        var m = eval(month.value);
        var y = year.value;
        switch (m) {
            case 4:
            case 6:
            case 9:
            case 11:
                ketQua.value = "Tháng " + m + "  có 30 ngày ";
                break;
            case 2:
                if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
                    ketQua.value = "Tháng " + m + " năm " + y + " có 29 ngày ";
                } else {
                    ketQua.value = "Tháng " + m + " năm " + y + " có 28 ngày ";
                }
                break;
            default:
                ketQua.value = "Tháng " + m + " có 31 ngày ";

        }
    }

    return false;
}