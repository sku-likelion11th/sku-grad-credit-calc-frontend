fetch('source/person.json').then(function(response){
    if(!response.ok){
        throw new Error('에러');
    }
    return response.json();
}).then(function(items){
    items.forEach(function(items, i){
        const template = `
            <div class="col-6 col-md-4 col-lg-2 p-2">
                <div class="profile-card text-center py-4">
                    <img class="img-fluid" src="${items.image}" alt="프로필 이미지">
                    <div class="pretendard-font maker-name">${items.name}</div>
                    <div class="pretendard-font maker-department">${items.department}</div>
                    <div class="pretendard-font maker-position mt-3">${items.position}</div>
                    <div class="pretendard-font maker-role">${items.role}</div>
                </div>
            </div>
        `;
        $(".profile").append(template);
    })
}).catch(function(error){
    console.log(error);
});
