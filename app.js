var toggleSkillsButton = document.getElementById('toggle-skills-btn');
var skillsList = document.getElementById('skills-list');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsList.style.display === 'none' || !skillsList.style.display) {
        skillsList.style.display = 'block';
    }
    else {
        skillsList.style.display = 'none';
    }
});
