export default function splitText() {
    // if(window.screen.width > 1200){
        const textAnis = document.querySelectorAll(".text-ani");
    

        function wrapTextWithSpans(element) {
            // Lấy nội dung văn bản từ phần tử
            const text = element.innerText;
    
            // Tách văn bản thành các cụm từ
        const phrases = text.split(' ');
    
            // Tách văn bản thành các từ
            const words = text.split(" ");
    
             // Tạo ra chuỗi HTML mới với các cụm từ được bao bởi thẻ span
            const wrappedText = phrases.map((phrase, phraseIndex) => {
                // Tách cụm từ thành các ký tự
                const chars = phrase.split('');
    
                // Tạo chuỗi HTML với các ký tự được bao bởi thẻ span
                const wrappedChars = chars.map((char, charIndex) => {
                    return `<span class="word">${char}</span>`;
                }).join('');
    
                // Bao toàn bộ cụm từ bởi thẻ span
                return `<span class="phrase">${wrappedChars}</span>`;
            }).join(' ');
    
            // Gán chuỗi HTML mới vào phần tử ban đầu
            element.innerHTML = wrappedText;
    
            const spans = element.querySelectorAll('.word');
    
            // Thêm delay cho từng thẻ span
            spans.forEach((span, index) => {
                span.style.animationDelay = `${index * 0.05}s`;
            });
        }
    
    
        // Áp dụng hàm cho từng phần tử
        textAnis.forEach(wrapTextWithSpans);
    
    // }

    
}