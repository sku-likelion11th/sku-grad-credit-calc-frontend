document.addEventListener('DOMContentLoaded', function() {
    // 버튼
    const mrBtn = document.getElementById('majorRequirementsbtn');
    const msBtn = document.getElementById('majorSelectbtn');
    const grBtn = document.getElementById('generalrequirementsbtn');

    // 테이블
    const mrTable = document.querySelectorAll('.majorReq');
    const msTable = document.querySelectorAll('.majorSel');
    const grTable = document.querySelectorAll('.generalReq');

    // btn style
    const clickbtn = document.querySelectorAll('.clickbtn');


    // 초기 상태 - 전필 테이블만 보여짐
    mrTable.forEach(row => row.style.display = 'flex');
    msTable.forEach(row => row.style.display = 'none');
    grTable.forEach(row => row.style.display = 'none');

    mrBtn.addEventListener("click", function() {
        console.log('전필')
        showTable(Array.from(mrTable), Array.from(msTable), Array.from(grTable), mrBtn, msBtn, grBtn);
    });

    msBtn.addEventListener("click", function() {
        console.log('전선')
        showTable(Array.from(msTable), Array.from(mrTable), Array.from(grTable), msBtn, mrBtn, grBtn);
    });

    grBtn.addEventListener("click", function() {
        console.log('교필')
        showTable(Array.from(grTable), Array.from(mrTable), Array.from(msTable), grBtn, mrBtn, msBtn);
    });

    // 버튼에 따라 테이블 변경
    function showTable(tableToShow, hide1Array, hide2Array, btnToShow, hidebtn1, hidebtn2) {
        hide1Array.forEach(function(row) {
            row.style.display = 'none';
            hidebtn1.classList.remove("clickbtn");
        });
        hide2Array.forEach(function(row) {
            row.style.display = 'none';
            hidebtn2.classList.remove("clickbtn");

        })
        tableToShow.forEach(function(row) {
            row.style.display = 'flex';
            btnToShow.classList.add("clickbtn");
        });
    }
})