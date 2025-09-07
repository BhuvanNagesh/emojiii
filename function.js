// Questions database
const pictureQuestions = {
  1: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/1.png", 
    a: "देखा एक ख्वाब", 
    video: "videos/video1.mp4", 
    text: "देखा एक ख्वाब तो ये सिलसिले."
  },
  2: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/2.png", 
    a: "लिखे जो खत तुझे", 
    video: "videos/video2.mp4", 
    text: "लिखे जो खत तुझे."
  },
  
  3: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/3.png", 
    a: "Eiffel Tower, Paris", 
    video: "videos/video3.mp4", 
    text: " अखियों के झरोखों से"
  },
  4: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/4.png", 
    a: "Lion", 
    video: "videos/video4.mp4", 
    text: "ओ मेरे, दिल के चैन."
  },
  5: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/5.jpg", 
    a: "Eiffel Tower, Paris", 
    video: "videos/video5.mp4", 
    text: "फूल तुम्हे भेजा है खत में"
  },
  6: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/6.png", 
    a: "Lion", 
    video: "videos/video6.mp4", 
    text: "मुझे नींद ना आए।"
  },
  7: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/7.png", 
    a: "Eiffel Tower, Paris", 
    video: "videos/video7.mp4", 
    text: "आज मैं ऊपर, आसमान नीचे"
  },
  8: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/8.png", 
    a: "Lion", 
    video: "videos/video8.mp4", 
    text: "एक लड़की को देखा तो ऐसा लगा।"
  },
  9: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/9.png", 
    a: "Eiffel Tower, Paris", 
    video: "videos/video9.mp4", 
    text: "दो दिल मिल रहे हैं।"
  },
  10: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/10.png", 
    a: "Lion", 
    video: "videos/video10.mp4", 
    text: "चाँद छुपा बादल में।"
  },
  11: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/11.png", 
    a: "Eiffel Tower, Paris", 
    video: "videos/video11.mp4", 
    text: "सूरज हुआ मद्धम, चाँद जलने लगा।"
  },
  12: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/12.png", 
    a: "Lion", 
    video: "videos/video12.mp4", 
    text: "तू खीच मेरी फोटो।"
  },
  13: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/13.png", 
    a: "Eiffel Tower, Paris", 
    video: "videos/video13.mp4", 
    text: "मटरगश्ती।"
  },
  14: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/14.png", 
    a: "Lion", 
    video: "videos/video14.mp4", 
    text: "तू लॉन्ग में इलायची।"
  },
  15: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/15.png", 
    a: "Eiffel Tower, Paris", 
    video: "videos/video15.mp4", 
    text: "तूने मारी एंट्री."
  },
  16: { 
    q: "इस गाने का अंदाज़ा लगाइए", 
    img: "images/16.png", 
    a: "Lion", 
    video: "videos/video16.mp4", 
    text: "चुरा के दिल मेरा ."
  }

};

let currentQuestion = null;

// Open Question
function openQuestion(num, btn) {
  currentQuestion = num;
  btn.classList.add("clicked");

  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("quizPage").classList.remove("hidden");

  const q = pictureQuestions[num];
  document.getElementById("questionText").innerText = q.q;
  document.getElementById("questionImage").src = q.img;
}

// 000 Show Video Page (instead of showing text directly)
//function goToVideo() {
//  const q = pictureQuestions[currentQuestion];
//  document.getElementById("quizPage").classList.add("hidden");
//  document.getElementById("videoPage").classList.remove("hidden");

//  document.getElementById("videoSource").src = q.video;
//  document.getElementById("questionVideo").load();
//  document.getElementById("videoText").innerText = q.text;

  // Auto stop video after 10 sec
//  setTimeout(() => {
//    document.getElementById("questionVideo").pause();
//  }, 36000);
// 00}

function goToVideo() {
  const q = pictureQuestions[currentQuestion];
  document.getElementById("quizPage").classList.add("hidden");
  document.getElementById("videoPage").classList.remove("hidden");

  const video = document.getElementById("questionVideo");
  const source = document.getElementById("videoSource");

  source.src = q.video;
  video.load();
  document.getElementById("videoText").innerText = q.text;

  // Remove any previous listeners
  video.onloadedmetadata = null;
  video.ontimeupdate = null;

  // Start fresh
  video.onloadedmetadata = () => {
    video.currentTime = 0;   // always start at beginning
    video.play();
  };

  // Stop exactly at 30s
  video.ontimeupdate = () => {
    if (video.currentTime >= 30) {
      video.pause();
      video.currentTime = 30; // freeze on last frame at 30s
    }
  };
}


// Go Back to Home
function goBack() {
  document.getElementById("quizPage").classList.add("hidden");
  document.getElementById("videoPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}
