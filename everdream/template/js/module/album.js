export default function album() {
    const album = document.querySelector(".album_wrap");
    if (album) {
        const btnAlbum = album.querySelector(".album_btn");
        btnAlbum.addEventListener("click", () => {

            const albumImgs = album.querySelectorAll(".gItem");
            albumImgs.forEach((albumImg) => {
                albumImgs[0].click();
            })
        });
    }
}