const questions = [
    {
        id: 1,
        questions: '1 + 1 bằng bao nhiêu?',
        a: 1, b: 2, c: 3, d: 4,
        correctAns: 'b', userAns: null, isCorrect: null, level: 1, status: true
    },
    {
        id: 2,
        questions: 'Thủ đô của Việt Nam là gì?',
        a: 'TP.HCM', b: 'Huế', c: 'Hà Nội', d: 'Đà Nẵng',
        correctAns: 'c', userAns: null, isCorrect: null, level: 1, status: true
    },
    {
        id: 3,
        questions: 'Con vật nào kêu "gâu gâu"?',
        a: 'Mèo', b: 'Chó', c: 'Gà', d: 'Vịt',
        correctAns: 'b', userAns: null, isCorrect: null, level: 2, status: true
    },
    {
        id: 4,
        questions: '3 x 4 bằng bao nhiêu?',
        a: 7, b: 12, c: 10, d: 14,
        correctAns: 'b', userAns: null, isCorrect: null, level: 2, status: true
    },
    {
        id: 5,
        questions: 'Quốc kỳ Việt Nam có màu gì?',
        a: 'Xanh', b: 'Vàng', c: 'Đỏ và vàng', d: 'Đen và trắng',
        correctAns: 'c', userAns: null, isCorrect: null, level: 2, status: true
    },
    {
        id: 6,
        questions: 'Hành tinh nào gần Mặt Trời nhất?',
        a: 'Trái Đất', b: 'Sao Kim', c: 'Sao Thủy', d: 'Sao Hỏa',
        correctAns: 'c', userAns: null, isCorrect: null, level: 3, status: true
    },
    {
        id: 7,
        questions: 'Nguyên tố hóa học nào có ký hiệu là O?',
        a: 'Oxy', b: 'Vàng', c: 'Hydro', d: 'Bạc',
        correctAns: 'a', userAns: null, isCorrect: null, level: 3, status: true
    },
    {
        id: 8,
        questions: 'Tác giả của "Truyện Kiều" là ai?',
        a: 'Nguyễn Trãi', b: 'Nguyễn Du', c: 'Hồ Xuân Hương', d: 'Lê Quý Đôn',
        correctAns: 'b', userAns: null, isCorrect: null, level: 4, status: true
    },
    {
        id: 9,
        questions: 'Châu lục nào lớn nhất thế giới?',
        a: 'Châu Âu', b: 'Châu Á', c: 'Châu Phi', d: 'Châu Mỹ',
        correctAns: 'b', userAns: null, isCorrect: null, level: 4, status: true
    },
    {
        id: 10,
        questions: 'Pi xấp xỉ bằng bao nhiêu?',
        a: 2.14, b: 3.14, c: 4.13, d: 3.41,
        correctAns: 'b', userAns: null, isCorrect: null, level: 5, status: true
    },
    {
        id: 11,
        questions: 'Máy tính đầu tiên trên thế giới tên là gì?',
        a: 'IBM', b: 'Apple I', c: 'ENIAC', d: 'Windows 1.0',
        correctAns: 'c', userAns: null, isCorrect: null, level: 6, status: true
    },
    {
        id: 12,
        questions: 'Nhà bác học nào phát minh ra bóng đèn?',
        a: 'Newton', b: 'Tesla', c: 'Einstein', d: 'Edison',
        correctAns: 'd', userAns: null, isCorrect: null, level: 6, status: true
    },
    {
        id: 13,
        questions: 'Ngôn ngữ lập trình phổ biến nhất hiện nay là?',
        a: 'Python', b: 'C++', c: 'Java', d: 'Ruby',
        correctAns: 'a', userAns: null, isCorrect: null, level: 7, status: true
    },
    {
        id: 14,
        questions: 'Năm nào Việt Nam gia nhập Liên Hợp Quốc?',
        a: 1945, b: 1954, c: 1977, d: 1986,
        correctAns: 'c', userAns: null, isCorrect: null, level: 8, status: true
    },
    {
        id: 15,
        questions: 'Dãy núi nào dài nhất thế giới?',
        a: 'Himalaya', b: 'Andes', c: 'Alps', d: 'Rocky',
        correctAns: 'b', userAns: null, isCorrect: null, level: 9, status: true
    },
    {
        id: 16,
        questions: 'Ai là người đầu tiên đặt chân lên Mặt Trăng?',
        a: 'Buzz Aldrin', b: 'Neil Armstrong', c: 'Yuri Gagarin', d: 'Michael Collins',
        correctAns: 'b', userAns: null, isCorrect: null, level: 10, status: true
    },
    {
        id: 17,
        questions: 'Tổ chức nào trao giải Nobel?',
        a: 'LHQ', b: 'Thụy Điển', c: 'Hội đồng Nobel', d: 'UNESCO',
        correctAns: 'c', userAns: null, isCorrect: null, level: 11, status: true
    },
    {
        id: 18,
        questions: 'Nguyên lý bất định Heisenberg thuộc lĩnh vực nào?',
        a: 'Hóa học', b: 'Toán học', c: 'Vật lý lượng tử', d: 'Thiên văn học',
        correctAns: 'c', userAns: null, isCorrect: null, level: 12, status: true
    },
    {
        id: 19,
        questions: 'Giải thưởng toán học danh giá nhất thế giới là?',
        a: 'Nobel Toán', b: 'Abel', c: 'Turing', d: 'Fields',
        correctAns: 'd', userAns: null, isCorrect: null, level: 13, status: true
    },
    {
        id: 20,
        questions: 'Tính chất của số nguyên tố lớn nhất từng tìm thấy là gì?',
        a: 'Lẻ và chia hết cho 3', b: 'Dạng 2^p - 1', c: 'Chia hết cho 5', d: 'Luôn là số chẵn',
        correctAns: 'b', userAns: null, isCorrect: null, level: 14, status: true
    }
];
