const recommendedBody = document.querySelector('.recommendedBody'); // 데이터 추가할 테이블 tbody
const paginationContainerRe = document.querySelector('.paginationRe'); // 페이지네이션 

async function getRecommendedData() { // 데이터 요청 함수
    try {
        const response = await fetch('js/recommended.json'); // 데이터 요청
        if (!response.ok) {
            throw new Error('error');
        }
        const recommendedData = await response.json();
        return recommendedData; // 응답 promise 객체로 들어잇음
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function responseData() {
    try {
        const recommendedData = await getRecommendedData(); // promise 객체 들어있음
        const tableData = recommendedData.map(data =>
            `
            <tr>
                <td>${data.category}</td>
                <td>${data.subject}</td>
                <td>${data.score}</td>
                <td>${data.grade}</td>
            </tr>
        `).join('');
        console.log(tableData) // 테이블 형식으로 들어가있음. join으로 연결된 상태
        recommendedBody.innerHTML = tableData; // 재수강 추천 리스트에 한번에 넣기
    } catch (error) {
        console.error(error);
    }
}

responseData()