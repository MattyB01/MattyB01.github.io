function checkEvent() {
    const thresholdtop = window.innerHeight * 0.15;
    const threshold = window.innerHeight * 0.9;

//    if (document.getElementById('homeinfo1').getBoundingClientRect().bottom >= thresholdtop) {
//        if (!document.getElementById('homeinfo1').classList.contains('slidein')) {
//            document.getElementById('homeinfo1').classList.add('slidein');
//        }
//    } else {
//        document.getElementById('homeinfo1').classList.remove('slidein');
//    }
    for (i = 0; i < document.getElementsByClassName('info').length; i++) {
        if (document.getElementsByClassName('info')[i].getBoundingClientRect().top <= threshold && document.getElementsByClassName('info')[i].getBoundingClientRect().bottom >= thresholdtop) {
            if (!document.getElementsByClassName('info')[i].classList.contains('slidein')) {
                document.getElementsByClassName('info')[i].classList.add('slidein');
            }
        } else {
            document.getElementsByClassName('info')[i].classList.remove('slidein');
        }
    }
}

window.addEventListener('scroll', checkEvent);