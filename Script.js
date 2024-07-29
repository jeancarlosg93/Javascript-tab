const tabButtons = document.querySelectorAll('.tablink');
for (var i = 0; i<tabButtons.length; i++){
    tabButtons[i].addEventListener('click', function(){
        var tabName= this.dataset.tab;
        console.log(tabName);
        var TabContent =  document.getElementById(tabName);
        console.log(TabContent);
        var allTabcontent = document.querySelectorAll('.tabcontent');
        var allTabButtons =  document.querySelectorAll('.tablink');

        for (var j = 0; j<allTabcontent.length; j++){
            console.log(allTabcontent[j]);
            allTabcontent[j].style.display = 'none';
        }

        for (var k = 0 ; k<allTabcontent.length; k++){
            allTabButtons[k].classList.remove('active');
        }

        TabContent.style.display = "block";
        this.classList.add('active');
    });
}
        document.querySelector('.tablink').click();