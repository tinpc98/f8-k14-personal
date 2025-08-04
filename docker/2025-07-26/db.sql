create table books (
                       book_id bigserial,
                       title varchar(200),
                       author varchar(200),
                       publish_year int,
                       publisher varchar(100),
                       category varchar(50),
                       page_count int,
                       price float,
                       stock int,
                       import_date date
);
-- 2. Sử dụng ALTER TABLE để thêm các trường sau:
ALTER TABLE books
    ADD COLUMN status VARCHAR(20) CHECK (status IN ('Available', 'Borrowed', 'Removed')),
    ADD COLUMN language VARCHAR(30),
    ADD COLUMN shelf_position VARCHAR(20);

-- 3. Nhập dữ liệu cho ít nhất 15 cuốn sách khác nhau vào bảng
INSERT INTO books VALUES (1, 'The Adventures of Cricket', 'To Hoai', 2010, 'Kim Dong', 'Literature', 150, 75000.00, 10, '2020-01-15', 'Available', 'Vietnamese', 'A1');
INSERT INTO books VALUES (2, 'The Alchemist', 'Paulo Coelho', 2013, 'NXB Tre', 'Novel', 228, 85000.00, 7, '2020-02-20', 'Available', 'Vietnamese', 'A2');
INSERT INTO books VALUES (3, 'How to Win Friends', 'Dale Carnegie', 2016, 'NXB Tong Hop', 'Psychology', 320, 120000.00, 5, '2020-03-10', 'Borrowed', 'Vietnamese', 'B1');
INSERT INTO books VALUES (4, 'Mắt biếc', 'Nguyễn Nhật Ánh', 2019, 'NXB Trẻ', 'Tiểu thuyết', 195, 88000.00, 12, '2020-12-10', 'Available', 'Vietnamese', 'A4');
INSERT INTO books VALUES (5, 'Vật lý đại cương', 'David Halliday', 2014, 'NXB Đại học Quốc gia', 'Giáo trình', 850, 320000.00, 3, '2021-01-20', 'Available', 'Vietnamese', 'F1');
INSERT INTO books VALUES (6, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 1998, 'Gallimard', 'Tiểu thuyết', 120, 150000.00, 0, '2021-02-15', 'Removed', 'French', 'B3');
INSERT INTO books VALUES (7, 'Blockchain cơ bản', 'Satoshi Nakamoto', 2021, 'NXB Công nghệ', 'Công nghệ', 320, 220000.00, 5, '2021-03-10', 'Available', 'English', 'D3');
INSERT INTO books VALUES (8, '1984', 'George Orwell', 1949, 'Secker & Warburg', 'Dystopian', 328, 175000.00, 4, '2020-08-12', 'Available', 'English', 'C1');
INSERT INTO books VALUES (9, 'Clean Code', 'Robert C. Martin', 2008, 'Prentice Hall', 'Programming', 464, 330000.00, 6, '2021-06-01', 'Available', 'English', 'D1');
INSERT INTO books VALUES (10, 'Totto-chan', 'Tetsuko Kuroyanagi', 1981, 'Kodansha', 'Autobiography', 272, 180000.00, 8, '2020-11-25', 'Borrowed', 'Japanese', 'B2');
INSERT INTO books VALUES (11, 'Sapiens', 'Yuval Noah Harari', 2011, 'Harvill Secker', 'History', 498, 260000.00, 10, '2020-09-15', 'Available', 'English', 'E1');
INSERT INTO books VALUES (12, 'Tâm lý học phát triển', 'Nguyễn Văn Tuấn', 2017, 'NXB Giáo dục', 'Psychology', 300, 95000.00, 2, '2021-07-12', 'Borrowed', 'Vietnamese', 'C4');
INSERT INTO books VALUES (13, 'Harry Potter and the Philosopher''s Stone', 'J.K. Rowling', 1997, 'Bloomsbury', 'Fantasy', 223, 200000.00, 0, '2021-08-20', 'Removed', 'English', 'A3');
INSERT INTO books VALUES (14, 'Dế mèn phiêu lưu ký', 'Tô Hoài', 1941, 'NXB Kim Đồng', 'Thiếu nhi', 180, 60000.00, 9, '2021-09-10', 'Available', 'Vietnamese', 'A5');
INSERT INTO books VALUES (15, 'Thinking, Fast and Slow', 'Daniel Kahneman', 2011, 'Farrar, Straus and Giroux', 'Psychology', 499, 240000.00, 3, '2021-10-01', 'Available', 'English', 'E2');


-- 4.truy van
-- Hiển thị tất cả thông tin các cuốn sách
SELECT * FROM books;

-- Hiển thị book_id, title, author của tất cả sách
SELECT book_id, title, author FROM books;

-- Hiển thị thông tin các sách xuất bản năm 2020
SELECT * FROM books WHERE publish_year = 2020;

-- Hiển thị thông tin các sách có price > 200000
SELECT * FROM books WHERE price > 200000;

-- Hiển thị thông tin các sách có stock > 5
SELECT * FROM books WHERE stock > 5;

-- Hiển thị thông tin các sách thuộc category = 'Novel'
SELECT * FROM books WHERE category = 'Novel';

-- Hiển thị thông tin các sách có status = 'Borrowed'
SELECT * FROM books WHERE status = 'Borrowed';

-- Hiển thị thông tin các sách có language = 'English'
SELECT * FROM books WHERE language = 'English';

-- Hiển thị thông tin các sách xuất bản trước năm 2000
SELECT * FROM books WHERE publish_year < 2000;

-- Hiển thị thông tin các sách có page_count > 300
SELECT * FROM books WHERE page_count > 300;

-- Hiển thị thông tin các sách thuộc category = 'Science' và price < 150000
SELECT * FROM books WHERE category = 'Science' AND price < 150000;

-- Hiển thị thông tin các sách xuất bản từ 2015 đến 2022
SELECT * FROM books WHERE publish_year BETWEEN 2015 AND 2022;

-- Hiển thị thông tin các sách có status = 'Available' và stock < 3
SELECT * FROM books WHERE status = 'Available' AND stock < 3;

-- Hiển thị thông tin các sách của author = 'Nguyen Nhat Anh' hoặc 'To Hoai'
SELECT * FROM books WHERE author IN ('Nguyen Nhat Anh', 'To Hoai');

-- Hiển thị thông tin các sách của publisher = 'Kim Dong' hoặc 'NXB Tre'
SELECT * FROM books WHERE publisher IN ('Kim Dong', 'NXB Tre');

-- Hiển thị thông tin các sách có language = 'Vietnamese' và page_count < 200
SELECT * FROM books WHERE language = 'Vietnamese' AND page_count < 200;

-- Hiển thị thông tin các sách có category = 'Technology' hoặc 'Science' và xuất bản sau năm 2010
SELECT * FROM books WHERE category IN ('Technology', 'Science') AND publish_year > 2010;

-- Hiển thị thông tin các sách có shelf_position = 'A1', 'A2' hoặc 'A3'
SELECT * FROM books WHERE shelf_position IN ('A1', 'A2', 'A3');

-- Hiển thị thông tin các sách có price từ 100000 đến 300000 và status = 'Available'
SELECT * FROM books WHERE price BETWEEN 100000 AND 300000 AND status = 'Available';

-- Hiển thị thông tin các sách của author = 'Paulo Coelho' hoặc 'Dale Carnegie' và stock > 0
SELECT * FROM books WHERE author IN ('Paulo Coelho', 'Dale Carnegie') AND stock > 0;
-- Cập nhật status thành 'Borrowed' cho sách có book_id = 5
UPDATE books SET status = 'Borrowed' WHERE book_id = 5;

-- Cập nhật stock thành 0 cho các sách có status = 'Removed'
UPDATE books SET stock = 0 WHERE status = 'Removed';

-- Cập nhật price tăng thêm 10000 cho tất cả sách thuộc category = 'Novel'
UPDATE books SET price = price + 10000 WHERE category = 'Novel';

-- Cập nhật shelf_position thành 'B5' cho các sách của author = 'Nguyen Nhat Anh'
UPDATE books SET shelf_position = 'B5' WHERE author = 'Nguyen Nhat Anh';

-- Cập nhật status thành 'Available' cho các sách có status = 'Borrowed' và stock > 5
UPDATE books SET status = 'Available' WHERE status = 'Borrowed' AND stock > 5;

-- Cập nhật language thành 'Vietnamese' cho các sách của publisher = 'Kim Dong' có language là NULL
UPDATE books SET language = 'Vietnamese' WHERE publisher = 'Kim Dong' AND language IS NULL;

-- Cập nhật stock giảm đi 1 cho sách có book_id = 8
UPDATE books SET stock = stock - 1 WHERE book_id = 8;

-- Cập nhật category thành 'Literature' cho các sách có category = 'Novel' và xuất bản trước năm 2000
UPDATE books SET category = 'Literature' WHERE category = 'Novel' AND publish_year < 2000;

-- Cập nhật publisher thành 'NXB Giao Duc' cho các sách của publisher = 'NXB Dai hoc Quoc gia' và thuộc category = 'Textbook'
UPDATE books SET publisher = 'NXB Giao Duc'
WHERE publisher = 'NXB Dai hoc Quoc gia' AND category = 'Textbook';

-- Cập nhật page_count thành 0 cho các sách có status = 'Removed' và stock = 0
UPDATE books SET page_count = 0 WHERE status = 'Removed' AND stock = 0;
