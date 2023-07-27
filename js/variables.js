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

    export { mrBtn, msBtn, grBtn, mrTable, msTable, grTable, clickbtn, page, active, mrbody, msbody, grbody, mrList, msList, grList };