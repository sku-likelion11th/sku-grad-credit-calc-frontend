document.addEventListener('DOMContentLoaded', function() {
    const mrBtn = document.getElementById('majorRequirementsbtn');
    const msBtn = document.getElementById('majorSelectbtn');
    const grBtn = document.getElementById('generalrequirementsbtn');
    const addbody = document.querySelector('.addbody');
    const paginationContainer = document.querySelector('.pagination');
    const clickbtn = document.querySelectorAll('.clickbtn');

    let mrarr = [];
    let msarr = [];
    let grarr = [];
    const itemsPerPage = 4;
    let currentPage = 1;
    let activeBtn = 'mrBtn';

    function handleButtonClick(event) {
        // 버튼 상태 변경
        if (event.target.id === 'majorRequirementsbtn') {
            activeBtn = 'mrBtn';
        } else if (event.target.id === 'majorSelectbtn') {
            activeBtn = 'msBtn';
        } else if (event.target.id === 'generalrequirementsbtn') {
            activeBtn = 'grBtn';
        }

        // 활성화된 버튼에 active 클래스 추가하고 다른 버튼에서 제거
        mrBtn.classList.toggle('clickbtn', activeBtn === 'mrBtn');
        msBtn.classList.toggle('clickbtn', activeBtn === 'msBtn');
        grBtn.classList.toggle('clickbtn', activeBtn === 'grBtn');

        currentPage = 1;
        renderData(getCurrentDataArray(), currentPage);
    }

    mrBtn.addEventListener('click', handleButtonClick);
    msBtn.addEventListener('click', handleButtonClick);
    grBtn.addEventListener('click', handleButtonClick);

    fetch('js/uncompletedCourses.json')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('error');
            }
            return response.json();
        })
        .then(function(courses) {
            courses.forEach(function(course) {
                if (course.category === '전필') {
                    mrarr.push(course);
                } else if (course.category === '전선') {
                    msarr.push(course);
                } else {
                    grarr.push(course);
                }
            });

            // 초기 렌더링
            renderData(mrarr, currentPage);
        })
        .catch(function(error) {
            console.error(error);
        });

    function renderData(dataArr, page) {
        mrBtn.classList.toggle('clickbtn', activeBtn === 'mrBtn');
        // 데이터를 페이지 단위로 분할
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = dataArr.slice(startIndex, endIndex);

        // 테이블 내용 업데이트
        addbody.innerHTML = pageData.map(course => `
            <tr>
                <td>${course.category}</td>
                <td>${course.subject}</td>
                <td>${course.score}</td>
            </tr>
        `).join('');

        // 페이지네이션 생성
        createPagination(dataArr.length);
    }

    function createPagination(totalItems) {
        paginationContainer.innerHTML = '';

        const totalPages = Math.ceil(totalItems / itemsPerPage);

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
                renderData(getCurrentDataArray(), currentPage);
            });

            paginationContainer.appendChild(page);
        }
    }

    function getCurrentDataArray() {
        if (activeBtn === 'mrBtn') {
            return mrarr;
        } else if (activeBtn === 'msBtn') {
            return msarr;
        } else {
            return grarr;
        }
    }
});