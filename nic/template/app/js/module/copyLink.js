export default function copyLink() {
    const copys = document.querySelectorAll(".copylink");
    if (copys) {
        copys.forEach((copy) => {
            copy.addEventListener("click", (e) => {

                e.preventDefault();
                const urlToCopy = window.location.href;

                navigator.clipboard.writeText(urlToCopy).then(function () {
                    // Thông báo thành công
                    alert('Link copied to clipboard: ' + urlToCopy);
                }).catch(function (error) {
                    // Thông báo lỗi nếu không thành công
                    console.error('Failed to copy the link: ', error);
                });

            })
        })
    }
}
// copyLink();