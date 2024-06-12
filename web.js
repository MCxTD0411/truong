const favoriteIcons = document.querySelectorAll('.favorite');
favoriteIcons.forEach((icon) => {
    icon.addEventListener('click', function() {
        this.classList.toggle('active');
        const starIcon = this.querySelector('.star-icon');
        if (this.classList.contains('active')) {
            starIcon.style.color = '#ff3f6c';
            alert('Đã thêm vào danh sách yêu thích!');
        } else {
            starIcon.style.color = '#ccc';
            alert('Đã xóa khỏi danh sách yêu thích!');
        }
    });
});
var img = document.getElementById("img");
var imgs = [ 
"aoDTVN.jpg","aoARG.jpg","aoCLBMC.webp","aoTQN.webp",];
var i = 0;
function anhh(){
img.setAttribute("src",imgs[i]);
i++;
if(i == imgs.length) 
i = 0;
}
setInterval(anhh,3000);
$('MC').hover(function(){
    $(this).show();
    $(this).html('img src="aoMC.jpg"')
})
$('MC').mouseleave(function(){
    $(this).show();
    $(this).html('img src="aoMC2.jpg"')
})