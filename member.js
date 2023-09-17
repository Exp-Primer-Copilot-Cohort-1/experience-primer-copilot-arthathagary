function skillsMember() {
    const member = document.querySelector('.member');
    const skills = document.querySelector('.skills');
    const memberClose = document.querySelector('.member-close');

    member.addEventListener('click', function () {
        member.classList.toggle('active');
        skills.classList.toggle('active');
    });
    memberClose.addEventListener('click', function () {
        member.classList.toggle('active');
        skills.classList.toggle('active');
    });
}