fetch('uncompletedCourses.json')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('에러에러')
        }
        return response.json();
    })
    .then(function(subjects) {
        subjects.forEach(function(subject) {
            if (oneState) {
                const data =
                    `<tr>
                        <td>${subject.id}</td>
                        <td>${subject.subject}</td>
                        <td>${subject.score}</td>
                    </tr>`;
                $(".majorRequirements").append(data);
            } else if (twoState) {
                const data =
                    `<tr>
                    <td>${subject.id}</td>
                    <td>${subject.subject}</td>
                    <td>${subject.score}</td>
                </tr>`;
                $(".majorSelect").append(data);
            } else {
                const data =
                    `<tr>
                    <td>${subject.id}</td>
                    <td>${subject.subject}</td>
                    <td>${subject.score}</td>
                </tr>`;
                $(".threeState").append(data);
            }

        })

    })