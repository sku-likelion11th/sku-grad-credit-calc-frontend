document.addEventListener('DOMContentLoaded', function() {
    // 버튼
    const mrBtn = document.getElementById('majorRequirementsbtn');
    const msBtn = document.getElementById('majorSelectbtn');
    const gsBtn = document.getElementById('generalrequirementsbtn');

    // 테이블
    const mrTable = document.querySelectorAll('.majorReq');
    const msTable = document.querySelectorAll('.majorSel');
    const grTable = document.querySelectorAll('.generalReq');


    // 초기 상태 - 전필 테이블만 보여짐
    mrTable.forEach(row => row.style.display = 'flex');
    msTable.forEach(row => row.style.display = 'none');
    grTable.forEach(row => row.style.display = 'none');

    mrBtn.addEventListener("click", function() {
        console.log('전필')
        showTable(Array.from(mrTable), Array.from(msTable), Array.from(grTable));
    });

    msBtn.addEventListener("click", function() {
        console.log('전선')
        showTable(Array.from(msTable), Array.from(mrTable), Array.from(grTable));
    });

    gsBtn.addEventListener("click", function() {
        console.log('교필')
        showTable(Array.from(grTable), Array.from(mrTable), Array.from(msTable));
    });

    // 버튼에 따라 테이블 변경
    function showTable(tableToShow, hide1Array, hide2Array) {
        if (hide1Array) {
            hide1Array.forEach(function(row) {
                row.style.display = 'none';
            });
        }
        if (hide2Array) {
            hide2Array.forEach(function(row) {
                row.style.display = 'none';
            });
        }
        tableToShow.forEach(function(row) {
            row.style.display = 'flex';
        });
    }
})