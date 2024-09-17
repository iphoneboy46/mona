const chooseDate = document.querySelector(".choose-date");
if (chooseDate) {
  

    $("#datepicker").datepicker({
        firstDay: 1,
        showOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        format: 'dd/mm/yyyy',
        language: 'en',
        maxDate: new Date(), 
    });

     // Kiểm tra nếu maxDate không áp dụng đúng
     $("#datepicker").on("change", function () {
        let selectedDate = $(this).datepicker("getDate");
        let today = new Date();

        // Nếu ngày chọn lớn hơn ngày hiện tại, reset lại giá trị
        if (selectedDate > today) {
            $(this).datepicker("setDate", today);
            // alert("Bạn không thể chọn ngày lớn hơn hiện tại.");
        }
    });

}