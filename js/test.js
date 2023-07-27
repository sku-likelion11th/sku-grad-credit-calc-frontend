import { mrBtn, msBtn, grBtn, mrTable, msTable, grTable, clickbtn, page, active, mrbody, msbody, grbody, mrList, msList, grList } from './variables.js';

document.addEventListener('DOMContentLoaded', function() {
    // 페이지네이션
    const itemsPerPage = 4;
    const paginationContainer = document.querySelector('.pagination');

    // 총 페이지 수 계산
    const mrtotalPages = Math.ceil(mrList.length / itemsPerPage);
    const mstotalPages = Math.ceil(msList.length / itemsPerPage);
    const grtotalPages = Math.ceil(grList.length / itemsPerPage);


    // 현재 페이지를 추적하는 변수
    let currentPage = 1;

    // 활성화 테이블, 버튼 style
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

    // 페이지네이션 추가, course 개수에 따라 달라지도록
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

    // 4개까지
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

    // 초기화 함수, 맨 처음 전필 테이블
    function initialize() {
        mrTable.forEach(row => row.style.display = 'flex');
        msTable.forEach(row => row.style.display = 'none');
        grTable.forEach(row => row.style.display = 'none');

        currentPage = 1;
        showItems(mrbody, mrList, currentPage, itemsPerPage);
        createPagination(mrbody, mrList, mrtotalPages);
    }

    initialize(); // 초기화

    // 각 버튼 클릭 시~
    // 전필
    mrBtn.addEventListener("click", function() {
        console.log('전필')
        currentPage = 1;
        showItems(mrbody, mrList, mrtotalPages);
        showTable(Array.from(mrTable), Array.from(msTable), Array.from(grTable), mrBtn, msBtn, grBtn);
    });

    // 전선
    msBtn.addEventListener("click", function() {
        console.log('전선')
        currentPage = 1;
        showItems(msbody, msList, mstotalPages);
        showTable(Array.from(msTable), Array.from(mrTable), Array.from(grTable), msBtn, mrBtn, grBtn);
    });

    // 교필
    grBtn.addEventListener("click", function() {
        console.log('교필')
        currentPage = 1;
        showItems(grbody, grList, grtotalPages);
        showTable(Array.from(grTable), Array.from(mrTable), Array.from(msTable), grBtn, mrBtn, msBtn);
    });
})