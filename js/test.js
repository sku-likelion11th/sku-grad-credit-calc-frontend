document.addEventListener('DOMContentLoaded', function() {
    // 버튼
    const mrBtn = document.getElementById('majorRequirementsbtn');
    const msBtn = document.getElementById('majorSelectbtn');
    const grBtn = document.getElementById('generalrequirementsbtn');

    // 테이블
    const mrTable = document.querySelectorAll('.majorReq');
    const msTable = document.querySelectorAll('.majorSel');
    const grTable = document.querySelectorAll('.generalReq');

    // css
    const clickbtn = document.querySelectorAll('.clickbtn');
    const page = document.querySelectorAll('.page');
    const active = document.querySelectorAll('.page.active');

    // tbody
    const mrbody = mrTable[0].querySelector('tbody');
    const msbody = msTable[0].querySelector('tbody');
    const grbody = grTable[0].querySelector('tbody');

    // tr
    const mrList = mrbody.querySelectorAll('tr');
    const msList = msbody.querySelectorAll('tr');
    const grList = grbody.querySelectorAll('tr');

    // 버튼에 따라 table, btn style 변경
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


    } // 페이지네이션
    const itemsPerPage = 4;
    const paginationContainer = document.querySelector('.pagination');

    // 총 페이지 수 계산
    const mrtotalPages = Math.ceil(mrList.length / itemsPerPage);
    const mstotalPages = Math.ceil(msList.length / itemsPerPage);
    const grtotalPages = Math.ceil(grList.length / itemsPerPage);

    // 현재 페이지를 추적하는 변수
    let currentPage = 1;

    function createPagination(tbody, trList, totalPages) {
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const page = document.createElement('span');
            page.textContent = i;
            page.classList.add('page');
            if (i === currentPage) {
                page.classList.add('active');
            }

            // 페이지 번호를 클릭하면 해당 페이지로 이동
            page.addEventListener('click', function() {
                currentPage = i;
                console.log(tbody, page)
                showItems(tbody, trList, totalPages);
            });

            paginationContainer.appendChild(page);
        }
    }

    // 정보 아이템 보여주는 함수
    function showItems(tbody, trList, totalPages) {
        tbody.innerHTML = '';

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        for (let i = startIndex; i < endIndex && i < trList.length; i++) {
            const tr = trList[i];
            tbody.appendChild(tr);
        }
        createPagination(tbody, trList, totalPages);
    }

    function initialize() {
        // 버튼 클릭에 따라 보여줄 테이블과 데이터를 설정하는 로직 작성

        // 전필 테이블을 초기 데이터로 보여줍니다.
        mrTable.forEach(row => row.style.display = 'flex');
        msTable.forEach(row => row.style.display = 'none');
        grTable.forEach(row => row.style.display = 'none');

        // 초기 페이지를 1로 설정하고 전필 테이블 데이터를 보여줍니다.
        currentPage = 1;
        showItems(mrbody, mrList, currentPage, itemsPerPage);

        // 페이지네이션을 설정합니다.
        createPagination(mrbody, mrList, mrtotalPages);
    }
    // 초기화 함수 호출
    initialize();

    // 각 버튼 클릭 시~
    mrBtn.addEventListener("click", function() {
        console.log('전필')
        currentPage = 1;
        showItems(mrbody, mrList, mrtotalPages);
        showTable(Array.from(mrTable), Array.from(msTable), Array.from(grTable), mrBtn, msBtn, grBtn);
    });

    msBtn.addEventListener("click", function() {
        console.log('전선')
        currentPage = 1;
        showItems(msbody, msList, mstotalPages);
        showTable(Array.from(msTable), Array.from(mrTable), Array.from(grTable), msBtn, mrBtn, grBtn);
    });

    grBtn.addEventListener("click", function() {
        console.log('교필')
        currentPage = 1;
        showItems(grbody, grList, grtotalPages);
        showTable(Array.from(grTable), Array.from(mrTable), Array.from(msTable), grBtn, mrBtn, msBtn);
    });
})