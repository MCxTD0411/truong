document.getElementById('DangkiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;
    const errorMessage = document.getElementById('errorMessage');


    errorMessage.textContent = '';

    if (!username || !email || !password || !repassword) {
        errorMessage.textContent = 'Không được để trống các ô';
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Mật khẩu phải từ 8 ký tự trở lên';
        return;
    }

    if (password !== repassword) {
        errorMessage.textContent = 'Mật khẩu và Nhập lại mật khẩu phải giống nhau';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Nhập đúng định dạng Email';
        return;
    }


    console.log('Tên người dùng:', username);
    console.log('Email:', email);
    console.log('Mật khẩu:', password);

    alert('Đăng ký thành công! Chuyển hướng về trang Đăng nhập.');
    window.location.href = 'DangNhap.html';
});

document.getElementById('huy').addEventListener('click', function() {
    window.location.href = 'DangNhap.html';
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}