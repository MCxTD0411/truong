document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
        if (username === 'TruongVu' && password === 'Truongvu') {
            window.location.href = 'web.html';
        } else {
            document.getElementById('Saithongtin').textContent = 'Sai thông tin đăng nhập. Vui lòng thử lại!';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    });

document.getElementById('dnh').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' || password === ''){
        alert('Vui lòng nhập thông tin đầy đủ!');
    }
});

document.getElementById('huy').addEventListener('click', function() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('Saithongtin').textContent = '';
});

document.getElementById('quenmk').addEventListener('click', function() {
    const email = prompt('Vui lòng nhập Email của bạn: ');
    if (email) {
        alert('Yêu cầu khôi phục mật khẩu đã được gửi đến ' + email);
    }
});
document.getElementById('dang_ky').addEventListener('click',function() {
    window.location.href = 'Dangki.html';
});