export default function DateJS() {







    const findRoom = document.querySelector(".find_room");
    if (findRoom) {


        const chooseDate1 = findRoom.querySelector(".chooseDate1");
        if (chooseDate1) {
            chooseDate1.addEventListener("click", (e) => {
                $('.first').datepicker('show')

            })

            $('.first').datepicker({
                dateFormat: 'dd/mm/yy',
                minDate: 0,
                onSelect: function (dateText) {
                    const textChange1 = findRoom.querySelector(".text-date1");
                    let selectedDate = $(".first").val();
                    textChange1.innerText = selectedDate;
                    if(selectedDate.length > 0) {
                        const chooseDate2 = findRoom.querySelector(".chooseDate2");
                        chooseDate2.classList.add("unlock")
                    }else{
                        const chooseDate2 = findRoom.querySelector(".chooseDate2");
                        chooseDate2.classList.remove("unlock")
                    }
                },
                onClose: function () {
                    // Đặt focus lại cho datepicker sau khi đóng
                    $(".first").focus();
                }
            })
        }



        const chooseDate2 = findRoom.querySelector(".chooseDate2");
        if (chooseDate2) {
            chooseDate2.addEventListener("click", (e) => {
                $('.second').datepicker('show')

            })

            $('.second').datepicker({
                minDate: 0,
                dateFormat: 'dd/mm/yy',
                onSelect: function (dateText) {
                    const textChange2 = findRoom.querySelector(".text-date2");
                    let selectedDate = $(".second").val();
                    textChange2.innerText = selectedDate;
                },
                onClose: function () {
                    // Đặt focus lại cho datepicker sau khi đóng
                    $(".second").focus();
                }
            })

        }

        
        const textChange1 = findRoom.querySelector(".text-date1");
        if (textChange1) {
            const d = new Date();
            let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
            let month = d.getMonth() + 1;
            let monthCus = month < 10 ? "0" + month : month;

            let year = d.getFullYear();

            let totalFull = day + "/" + monthCus + "/" + year;
            textChange1.innerText = totalFull;

        }

        const textChange2 = findRoom.querySelector(".text-date2");
        if (textChange2) {
            const d = new Date();
            let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
            let month = d.getMonth() + 1;
            let monthCus = month < 10 ? "0" + month : month;
            let year = d.getFullYear();

            

            let totalFull = day + "/" + monthCus + "/" + year;

            textChange2.innerText = totalFull;


        }

        
        $('.first').datepicker('option', 'onClose', function (date) {
            $('.second').datepicker('option', 'minDate', date);
        });


    }

    const popupMain = document.querySelector(".popup_main");
    if (popupMain) {

    
        const chooseDate1 = popupMain.querySelector(".chooseDate3");
        if (chooseDate1) {
            chooseDate1.addEventListener("click", (e) => {
                $('.third').datepicker('show')

            })

            $('.third').datepicker({
                dateFormat: 'dd/mm/yy',
                minDate: 0,
                onSelect: function (dateText) {
                    const textChange1 = popupMain.querySelector(".text-date3");
                    let selectedDate = $(".third").val();
                    textChange1.innerText = selectedDate;
                    if(selectedDate.length > 0) {
                        const chooseDate2 = popupMain.querySelector(".chooseDate4");
                        chooseDate2.classList.add("unlock")
                    }else{
                        const chooseDate2 = popupMain.querySelector(".chooseDate4");
                        chooseDate2.classList.remove("unlock")
                    }
                },
                onClose: function () {
                    // Đặt focus lại cho datepicker sau khi đóng
                    $(".third").focus();
                }
            })
        }



        const chooseDate2 = popupMain.querySelector(".chooseDate4");
        if (chooseDate2) {
            chooseDate2.addEventListener("click", (e) => {
                $('.four').datepicker('show')

            })

            $('.four').datepicker({
                minDate: 0,
                dateFormat: 'dd/mm/yy',
                onSelect: function (dateText) {
                    const textChange2 = popupMain.querySelector(".text-date4");
                    let selectedDate = $(".four").val();
                    textChange2.innerText = selectedDate;
                },
                onClose: function () {
                    // Đặt focus lại cho datepicker sau khi đóng
                    $(".four").focus();
                }
            })

        }


       

        const textChange1 = popupMain.querySelector(".text-date3");
        if (textChange1) {
            const d = new Date();
            let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
            let month = d.getMonth() + 1;
            let monthCus = month < 10 ? "0" + month : month;

            let year = d.getFullYear();

            let totalFull = day + "/" + monthCus + "/" + year;
            textChange1.innerText = totalFull;

        }

        const textChange2 = popupMain.querySelector(".text-date4");
        if (textChange2) {
            const d = new Date();
            let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
            let month = d.getMonth() + 1;
            let monthCus = month < 10 ? "0" + month : month;
            let year = d.getFullYear();

            

            let totalFull = day + "/" + monthCus + "/" + year;

            textChange2.innerText = totalFull;


        }


        $('.third').datepicker('option', 'onClose', function (date) {
            $('.four').datepicker('option', 'minDate', date);
        });





    }











}