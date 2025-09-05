document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.profile-img');
    const icons = document.querySelectorAll('.icon');

    // Add a hover effect to the profile image
    profileImg.addEventListener('mouseover', () => {
        profileImg.style.transform = 'scale(1.1)';
        profileImg.style.transition = 'transform 0.3s';
    });

    profileImg.addEventListener('mouseout', () => {
        profileImg.style.transform = 'scale(1)';
    });

    // Add hover effects to social media icons
    icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1)';
            icon.style.transition = 'transform 0.3s';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});