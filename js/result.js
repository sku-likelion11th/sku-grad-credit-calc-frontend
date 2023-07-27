document.addEventListener('DOMContentLoaded', function() {
    // 버튼들을 선택하여 변수에 할당
    const mrBtn = document.getElementById('majorRequirementsbtn');
    const msBtn = document.getElementById('majorSelectbtn');
    const gsBtn = document.getElementById('generalrequirementsbtn');

    const mrTable = document.getElementsByClassName('MR');
    const msTable = document.getElementsByClassName('MS');
    const grTable = document.getElementsByClassName('GR');

    mrState = true;
    msState = false;
    grState = false;



    // 전필
    mrBtn.addEventListener('click', function() {
        mrState = true;
        msState = false;
        grState = false;
        console.log('전공필수');
        // 전필 테이블 활성화
        if (mrState) {
            mrBtn.style.backgroundColor = 'blue';
            mrTable.style.display = 'block';

        } else {
            mrTable.style.display = 'none';
            mrBtn.style.backgroundColor = 'white';
        }
    });

    // 전선
    msBtn.addEventListener('click', function() {
        mrState = false;
        msState = true;
        grState = false;
        // '전공선택' 버튼이 클릭되었을 때 할 동작 정의
        console.log('전공선택 버튼이 클릭되었습니다.');
        // 추가로 원하는 동작을 이 부분에 작성할 수 있습니다.
        if (msState) {
            msBtn.style.backgroundColor = 'red';
            msTable.style.display = 'block';

        } else {
            msTable.style.display = 'none';
            msBtn.style.backgroundColor = 'black';
        }

    });

    // 교필
    gsBtn.addEventListener('click', function() {
        mrState = false;
        msState = false;
        grState = true;

        console.log('교양필수 버튼이 클릭되었습니다.');
        if (gsState) {
            mrBtn.style.backgroundColor = 'blue';
            mrTable.style.display = 'block';
            msState = false;
            grState = false;

        } else {
            grTable.style.display = 'none';
        }
    });
});

if (mrState) {
    mrBtn.style.backgroundColor = 'blue';
    mrTable.style.display = 'block';

} else {
    mrTable.style.display = 'none';
    mrBtn.style.backgroundColor = 'white';
}


fetch('uncompletedCourses.json')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('에러에러')
        }
        return response.json();
    })
    .then(function(subjects) {
        subjects.forEach(function(subject) {
            // 전필, 전선, 교필 테이블에 맞는 데이터 들어가도록
            if (mrState && subject.id == '전필') { // 전필버튼 && 전필이면
                const data =
                    `<tr>
                        <td>${subject.id}</td>
                        <td>${subject.subject}</td>
                        <td>${subject.score}</td>
                    </tr>`;
                $("#majorRequirements").append(data); // 전필 테이블에 추가
            } else if (mrState && subject.id == '전선') { // 전선이면
                const data =
                    `<tr>
                    <td>${subject.id}</td>
                    <td>${subject.subject}</td>
                    <td>${subject.score}</td>
                </tr>`;
                $("#majorSelect").append(data); // 전선 테이블에 추가
            } else { // 교필이면
                const data =
                    `<tr>
                    <td>${subject.id}</td>
                    <td>${subject.subject}</td>
                    <td>${subject.score}</td>
                </tr>`;
                $("#generalrequirements").append(data); // 교필 테이블에 추가
            }

        })

    })