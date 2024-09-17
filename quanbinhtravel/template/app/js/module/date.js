export default function DateJS() {



    // const tourCt = document.querySelector(".tourCt");
    // if (tourCt) {
    //     const tourCtInfo = tourCt.querySelector(".tourCt_infos");
    //     const compareID = document.querySelector(".compareID").id; // Lấy giá trị id từ class compareID

    //     let availableDates = [];
    //     let currentMonth = moment().month() + 1;
    //     let currentYear = moment().year();
    //     let datePickerInitialized = false;
    //     let lastSelectedDate = null; // Lưu ngày đã chọn
    //     let dateEndMap = {}; // Lưu ngày kết thúc tương ứng với ngày bắt đầu
    //     let isMonthChanging = false; // Cờ để theo dõi xem có đang thay đổi tháng hay không
    //     const tourCtDateWrap = tourCtInfo.querySelector(".tourCt_infos--date-wrap");
    //     if (tourCtDateWrap) {
    //         let textDate2 = tourCtInfo.querySelector(".text-date2");
    //         textDate2.innerText = moment().format('DD-MM-YYYY');
    //     }

    //     function fetchAvailableDates(month, year) {
    //         const monthCus = month < 10 ? "0" + month : month;
    //         console.log(`Fetching dates for ${year}-${monthCus}`);
    //         fetch(`https://quangbinhtravel.monamedia.net/wp-json/mona/v1/posts/${year}/${monthCus}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 // Lọc dữ liệu dựa trên giá trị id từ compareID
    //                 const filteredData = data.filter(item => item.product_id == compareID);

    //                 availableDates = filteredData.map(item => item.date_start);
    //                 dateEndMap = filteredData.reduce((acc, item) => {
    //                     acc[item.date_start] = item.date_end;
    //                     return acc;
    //                 }, {});

    //                 if (datePickerInitialized) {
    //                     updateAvailableDates();
    //                     $('#datepicker').data('daterangepicker').show();
    //                 } else {
    //                     initializeDateRangePicker();
    //                     datePickerInitialized = true;
    //                 }
    //             })
    //             .catch(error => console.error('Error fetching dates:', error));
    //     }

    //     function initializeDateRangePicker() {
    //         $('#datepicker').daterangepicker({
    //             singleDatePicker: true,
    //             showDropdowns: true,
    //             isInvalidDate: function (date) {
    //                 return !availableDates.includes(date.format('YYYY-MM-DD'));
    //             },
    //             locale: {
    //                 format: 'DD-MM-YYYY'
    //             },
    //             startDate: lastSelectedDate ? moment(lastSelectedDate, 'DD-MM-YYYY') : moment().startOf('month'),
    //             endDate: lastSelectedDate ? moment(dateEndMap[lastSelectedDate], 'YYYY-MM-DD') : null
    //         });

    //         // Đăng ký sự kiện click cho các nút chuyển tháng
    //         $('#datepicker').on('show.daterangepicker', function (ev, picker) {
    //             picker.container.find('.drp-calendar').off('click', '.prev').on('click', '.prev', function (e) {
    //                 e.stopPropagation();
    //                 if (!isMonthChanging) {
    //                     handleMonthChange(-1);
    //                 }
    //             });

    //             picker.container.find('.drp-calendar').off('click', '.next').on('click', '.next', function (e) {
    //                 e.stopPropagation();
    //                 if (!isMonthChanging) {
    //                     handleMonthChange(1);
    //                 }
    //             });
    //         });

    //         $('#datepicker').on('apply.daterangepicker', function (ev, picker) {
    //             lastSelectedDate = picker.startDate.format('DD-MM-YYYY');
    //             const selectedStartDate = picker.startDate.format('YYYY-MM-DD');
    //             const selectedStartDateCustom = picker.startDate.format('DD-MM-YYYY');
    //             const ip = tourCtInfo.querySelector(".tourCt_infos--date-ip input");
    //             ip.setAttribute("value", selectedStartDateCustom);

    //             const selectedEndDate = dateEndMap[selectedStartDate];
    //             if (selectedEndDate) {
    //                 const selectedEndDateCustom = moment(selectedEndDate, 'YYYY-MM-DD').format('DD-MM-YYYY');
    //                 checkBtn();
    //                 const tourCtDateWrap = tourCtInfo.querySelector(".tourCt_infos--date-wrap");
    //                 if (tourCtDateWrap) {
    //                     let textDate2 = tourCtInfo.querySelector(".text-date2");
    //                     textDate2.innerText = selectedEndDateCustom;
    //                     textDate2.setAttribute("value", selectedEndDateCustom);
    //                 }
    //             } else {
    //                 $('#datepicker').data('daterangepicker').setEndDate(null); // Xóa ngày kết thúc nếu không có
    //             }
    //             isMonthChanging = false;
    //         });
    //     }

    //     function updateAvailableDates() {
    //         $('#datepicker').data('daterangepicker').remove();
    //         initializeDateRangePicker();
    //         $('#datepicker').data('daterangepicker').setStartDate(moment(`${currentYear}-${currentMonth}-01`).format('DD-MM-YYYY'));
    //     }

    //     function handleMonthChange(monthOffset) {
    //         let newMonth = currentMonth + monthOffset;
    //         let newYear = currentYear;

    //         if (newMonth < 1) {
    //             newYear--;
    //             newMonth = 12;
    //         } else if (newMonth > 12) {
    //             newYear++;
    //             newMonth = 1;
    //         }

    //         if (newMonth !== currentMonth || newYear !== currentYear) {
    //             currentMonth = newMonth;
    //             currentYear = newYear;
    //             fetchAvailableDates(currentMonth, currentYear);
    //         }
    //     }

    //     fetchAvailableDates(currentMonth, currentYear);

    //     window.addEventListener("scroll", () => {
    //         if ($('#datepicker').data('daterangepicker') && $('#datepicker').data('daterangepicker').container.is(':visible')) {
    //             $('#datepicker').data('daterangepicker').hide();
    //         }
    //     });

    //     function checkBtn() {
    //         const items = tourCtInfo.querySelectorAll(".tourCt_infos--book-item ");
    //         if (items[0]) {
    //             const btnNext = items[0].querySelector(".btn-next");
    //             const value1 = items[0].querySelector(".tourCt_infos--date-ip input").getAttribute("value");
    //             const value2 = items[0].querySelector(".tourCt_infos--date-ip .text-date2").getAttribute("value");

    //             if (value1 && value2 !== "") {
    //                 btnNext.classList.remove("disabled");
    //             } else {
    //                 btnNext.classList.add("disabled");
    //             }
    //         }
    //     }
    //     checkBtn();
    // }


    //    


    // const tourCt = document.querySelector(".tourCt");
    // if (tourCt) {
    //     const tourCtInfo = tourCt.querySelector(".tourCt_infos");
    //     const compareID = document.querySelector(".compareID").id; // Lấy giá trị id từ class compareID
    //     const id = tourCtInfo.querySelector("#mona-time-data");
    //     const datas = id.getAttribute("data-mona-time");

    //     // Phân tích cú pháp JSON
    //     const dataFormat = JSON.parse(datas);

    //     // Lấy tháng và năm hiện tại
    //     const currentMonth = new Date().getMonth() + 1;
    //     const currentYear = new Date().getFullYear();

    //     const tourCtDateWrap = tourCtInfo.querySelector(".tourCt_infos--date-wrap");
    //     if (tourCtDateWrap) {
    //         let textDate2 = tourCtInfo.querySelector(".text-date2");
    //         textDate2.innerText = moment().format('DD-MM-YYYY');
    //     }

    //     // Chuyển dataFormat sang dạng dễ sử dụng và lọc các giá trị không hợp lệ
    //     const availableDates = Object.values(dataFormat).flat().filter(dateObj => dateObj.date_start && dateObj.id_tour === parseInt(compareID));

    //     // Lưu trữ mối liên hệ giữa date_start và date_end
    //     const dateMap = availableDates.reduce((acc, { date_start, date_end }) => {
    //         acc[date_start] = date_end;
    //         return acc;
    //     }, {});

    //     // Hàm để kiểm tra và disable ngày không thuộc danh sách ngày hợp lệ
    //     function isInvalidDate(date) {
    //         // Chuyển đối tượng Date thành định dạng 'YYYY-MM-DD'
    //         const dateString = moment(date).format('YYYY-MM-DD');

    //         // Kiểm tra nếu dateString có trong danh sách date_start
    //         return !availableDates.some(({ date_start }) => date_start === dateString);
    //     }

    //     // Hàm để định dạng ngày theo dạng "DD-MM-YYYY"
    //     function formatDate(date) {
    //         return moment(date).format('DD-MM-YYYY');
    //     }

    //     // Cấu hình và hiển thị daterangepicker
    //     $('#datepicker').daterangepicker({
    //         singleDatePicker: true, // Chọn ngày đơn lẻ
    //         isInvalidDate: isInvalidDate, // Disable ngày không hợp lệ
    //         showDropdowns: true,
    //         locale: {
    //             format: 'DD-MM-YYYY',
    //             applyLabel: 'Chọn', // Thay đổi văn bản nút "Apply"
    //             cancelLabel: 'Hủy',    // Thay đổi văn bản nút "Cancel"
    //             daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    //             monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    //             firstDay: 1
    //         }
    //     }, function (start, end, label) {
    //         // Không cần cập nhật ngay, sẽ xử lý khi nhấn nút "Apply"
    //     });

    //     // Xử lý sự kiện nhấn nút "Apply"
    //     $('#datepicker').on('apply.daterangepicker', function (ev, picker) {
    //         const startDate = picker.startDate.format('YYYY-MM-DD');
    //         const endDate = dateMap[startDate];


    //         if (endDate) {
    //             // Định dạng ngày bắt đầu và ngày kết thúc
    //             const formattedStartDate = formatDate(startDate);
    //             const formattedEndDate = formatDate(endDate);

    //             const textDate1 = tourCtInfo.querySelector("#datepicker");
    //             textDate1.setAttribute("value", formattedStartDate);


    //             // Cập nhật ô input với ngày bắt đầu
    //             $('#datepicker').val(formattedStartDate);

    //             // Cập nhật phần tử text-date2 với ngày kết thúc
    //             let textDate2 = tourCtInfo.querySelector(".text-date2");
    //             if (textDate2) {
    //                 textDate2.innerText = formattedEndDate;
    //                 textDate2.setAttribute("value", formattedEndDate);
    //             }
    //         }
    //         checkBtn();

    //     });

    //     window.addEventListener("scroll", () => {
    //         if ($('#datepicker').data('daterangepicker') && $('#datepicker').data('daterangepicker').container.is(':visible')) {
    //             $('#datepicker').data('daterangepicker').hide();
    //         }
    //     });

    //     function checkBtn() {
    //         const items = tourCtInfo.querySelectorAll(".tourCt_infos--book-item ");
    //         if (items[0]) {
    //             const btnNext = items[0].querySelector(".btn-next");
    //             const value1 = items[0].querySelector(".tourCt_infos--date-ip input").getAttribute("value");
    //             const value2 = items[0].querySelector(".tourCt_infos--date-ip .text-date2").getAttribute("value");

    //             if (value1 && value2 !== "") {
    //                 btnNext.classList.remove("disabled");
    //             } else {
    //                 btnNext.classList.add("disabled");
    //             }
    //         }
    //     }
    //     checkBtn();
    // }



    const tourCt = document.querySelector(".tourCt");
    if (tourCt) {
        const tourCtInfo = tourCt.querySelector(".tourCt_infos");
        const compareID = document.querySelector(".compareID").id; // Lấy giá trị id từ class compareID
        const id = tourCtInfo.querySelector("#mona-time-data");
        const datas = id.getAttribute("data-mona-time");
        const compareIDClass = document.querySelector(".compareID");

        // Phân tích cú pháp JSON
        const dataFormat = JSON.parse(datas);

        // Lấy giá trị tháng và năm từ thuộc tính data-month
        const dataMonth = compareIDClass.getAttribute("data-month");
        const [day, month, year] = dataMonth.split("-").map((v) => parseInt(v, 10)); // Chuyển chuỗi thành các giá trị số

        const tourCtDateWrap = tourCtInfo.querySelector(".tourCt_infos--date-wrap");
        if (tourCtDateWrap) {
            let textDate2 = tourCtInfo.querySelector(".text-date2");
            textDate2.innerText = moment().format("DD-MM-YYYY");
        }

        // Chuyển dataFormat sang dạng dễ sử dụng và lọc các giá trị không hợp lệ
        const availableDates = Object.values(dataFormat)
            .flat()
            .filter(
                (dateObj) => dateObj.date_start && dateObj.id_tour === parseInt(compareID)
            );

        // Lưu trữ mối liên hệ giữa date_start và date_end
        const dateMap = availableDates.reduce((acc, { date_start, date_end }) => {
            acc[date_start] = date_end;
            return acc;
        }, {});

        // Hàm để kiểm tra và disable ngày không thuộc danh sách ngày hợp lệ
        function isInvalidDate(date) {
            // Chuyển đối tượng Date thành định dạng 'YYYY-MM-DD'
            const dateString = moment(date).format("YYYY-MM-DD");

            // Kiểm tra nếu dateString có trong danh sách date_start
            return !availableDates.some(({ date_start }) => date_start === dateString);
        }

        // Hàm để định dạng ngày theo dạng "DD-MM-YYYY"
        function formatDate(date) {
            return moment(date).format("DD-MM-YYYY");
        }

        // Cấu hình và hiển thị daterangepicker
        $("#datepicker").daterangepicker(
            {
                singleDatePicker: true, // Chọn ngày đơn lẻ
                isInvalidDate: isInvalidDate, // Disable ngày không hợp lệ
                showDropdowns: true,
                locale: {
                    format: "DD-MM-YYYY",
                    applyLabel: "Chọn", // Thay đổi văn bản nút "Apply"
                    cancelLabel: "Hủy", // Thay đổi văn bản nút "Cancel"
                    daysOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    monthNames: [
                        "Tháng 1",
                        "Tháng 2",
                        "Tháng 3",
                        "Tháng 4",
                        "Tháng 5",
                        "Tháng 6",
                        "Tháng 7",
                        "Tháng 8",
                        "Tháng 9",
                        "Tháng 10",
                        "Tháng 11",
                        "Tháng 12",
                    ],
                    firstDay: 1,
                },
                startDate: moment(`${year}-${month}`, "YYYY-MM"), // Thiết lập tháng và năm từ data-month
            },
            function (start, end, label) {
                // Không cần cập nhật ngay, sẽ xử lý khi nhấn nút "Apply"
            }
        );

        // Xử lý sự kiện nhấn nút "Apply"
        $("#datepicker").on("apply.daterangepicker", function (ev, picker) {
            const startDate = picker.startDate.format("YYYY-MM-DD");
            const endDate = dateMap[startDate];

            if (endDate) {
                // Định dạng ngày bắt đầu và ngày kết thúc
                const formattedStartDate = formatDate(startDate);
                const formattedEndDate = formatDate(endDate);

                const textDate1 = tourCtInfo.querySelector("#datepicker");
                textDate1.setAttribute("value", formattedStartDate);

                // Cập nhật ô input với ngày bắt đầu
                $("#datepicker").val(formattedStartDate);

                // Cập nhật phần tử text-date2 với ngày kết thúc
                let textDate2 = tourCtInfo.querySelector(".text-date2");
                if (textDate2) {
                    textDate2.innerText = formattedEndDate;
                    textDate2.setAttribute("value", formattedEndDate);
                }
            }
            checkBtn();
        });

        window.addEventListener("scroll", () => {
            if (
                $("#datepicker").data("daterangepicker") &&
                $("#datepicker").data("daterangepicker").container.is(":visible")
            ) {
                $("#datepicker").data("daterangepicker").hide();
            }
        });

        function checkBtn() {
            const items = tourCtInfo.querySelectorAll(".tourCt_infos--book-item ");
            if (items[0]) {
                const btnNext = items[0].querySelector(".btn-next");
                const value1 = items[0]
                    .querySelector(".tourCt_infos--date-ip input")
                    .getAttribute("value");
                const value2 = items[0]
                    .querySelector(".tourCt_infos--date-ip .text-date2")
                    .getAttribute("value");

                if (value1 && value2 !== "") {
                    btnNext.classList.remove("disabled");
                } else {
                    btnNext.classList.add("disabled");
                }
            }
        }
        checkBtn();
    }


    window.addEventListener("load", () => {
        const speed = 800;
        // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
        const hash = window.location.hash;
        if ($(hash).length) scrollToID(hash, speed);

        // HÀM SCROLL CHO MƯỢT MÀ
        function scrollToID(id, speed) {
            const offSet = $(".header").outerHeight();
            const section = $(id).offset();
            const targetOffset = section.top - offSet;
            $("html,body").animate({ scrollTop: targetOffset }, speed);
            console.log("Ádasdas")
        }
    })


}