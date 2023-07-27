const recommendedBody = document.querySelector('.recommendedBody'); // 데이터 추가할 테이블 tbody
const paginationContainerRe = document.querySelector('.paginationRe'); // 페이지네이션 

const recommendedarr = []

const itemsPerPage = 4;
let currentPage = 1;

// 데이터 요청 함수
async function getRecommendedData() {
    try {
        const response = await fetch('js/recommended.json'); // 데이터 요청
        if (!response.ok) {
            throw new Error('error');
        }
        const recommendedData = await response.json();
        return recommendedData; // 응답 promise 객체로 들음
    } catch (error) {
        console.error(error);
        return null;
    }
}

// 받은 데이터 객체 형태로 배열에 추가하는 함수
async function responseData() {
    try {
        const recommendedData = await getRecommendedData(); // promise 객체 들어있음
        recommendedData.forEach(function(course) {
            recommendedarr.push(course);
        });
        console.log('객체형태로 배열에 추가', recommendedarr)
            // 초기 렌더링
        renderData(recommendedarr, currentPage);
    } catch (error) {
        console.error(error);
    }
}

// 4개씩 잘라서 렌더링
async function renderData(dataArr, page) {
    try {
        // 데이터를 페이지 단위로 분할
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = dataArr.slice(startIndex, endIndex);
        console.log(pageData) // 4개 잘림

        // 테이블에 데이터 4개 업데이트 map으로 돌려요이~
        recommendedBody.innerHTML = pageData.map(course => `
            <tr>
                <td>${course.category}</td>
                <td>${course.subject}</td>
                <td>${course.score}</td>
                <td>${course.grade}</td>
            </tr>
        `).join('');

        // 페이지네이션 생성
        createPagination(dataArr.length);
    } catch (error) {
        console.log(error);
    }
}

// 페이지네이션 함수
async function createPagination(totalItems) {
    paginationContainerRe.innerHTML = '';

    const totalPages = Math.ceil(totalItems / itemsPerPage); // 총 페이지 수

    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement('span'); // span 태그 생성
        page.textContent = i; // span 태그 안에 페이지 번호 넣기
        page.classList.add('page');
        if (i === currentPage) {
            page.classList.add('active');
        }

        // 페이지 번호를 클릭하면 해당 페이지로 이동
        page.addEventListener('click', function() {
            currentPage = i;
            renderData(recommendedarr, currentPage);
        });

        paginationContainerRe.appendChild(page);
    }
}

responseData()