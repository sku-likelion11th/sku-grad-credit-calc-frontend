fetch('source/person.json').then(function(response){
    if(!response.ok){
        throw new Error('에러');
    }
    return response.json();
}).then(function(items){
    items.forEach(function(items, i){
        const template = `
            <div class="col-md-2 p-2">
                <div class="profile-card text-center py-4">
                    <img src="${items.image}" alt="프로필 이미지">
                    <div class="pretendard-font fw-medium fs-4">${items.name}</div>
                    <div class="pretendard-font fw-medium">${items.department}</div>
                    <div class="pretendard-font fw-medium mt-3">${items.position}</div>
                    <div class="pretendard-font fw-medium">${items.role}</div>
                </div>
            </div>
        `;
        $(".profile").append(template);
    })
}).catch(function(error){
    console.log(error);
});
