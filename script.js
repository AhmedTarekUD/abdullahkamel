document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const quranList = document.getElementById('quranList');
  const quran = [
    { name: 'إذاعة القراَن الكريم', url: '  https://n06.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABh-5NENoAdwhyhg8_HZRrQA' },
    { name: 'الفاتحة', url: 'https://download.tvquran.com/download/recitations/345/269/001.mp3' },
    { name: 'البقرة', url: 'https://download.tvquran.com/download/recitations/345/269/002.mp3' },
    { name: 'ال عمران', url: 'https://download.tvquran.com/download/recitations/345/269/003.mp3' },
    { name: 'النساء', url: 'https://download.tvquran.com/download/recitations/345/269/004.mp3' },
    { name: 'المائدة', url: 'https://download.tvquran.com/download/recitations/345/269/005.mp3' },
    { name: 'الأنعام', url: 'https://download.tvquran.com/download/recitations/345/269/006.mp3' },
    { name: 'الأعراف', url: 'https://download.tvquran.com/download/recitations/345/269/007.mp3' },
    { name: 'الأنفال', url: 'https://download.tvquran.com/download/recitations/345/269/008.mp3' },
    { name: 'التوبة', url: 'https://download.tvquran.com/download/recitations/345/269/009.mp3' },
    { name: 'يونس', url: 'https://download.tvquran.com/download/recitations/345/269/010.mp3' },
    { name: 'هود', url: 'https://download.tvquran.com/download/recitations/345/269/011.mp3' },
    { name: 'يوسف', url: 'https://download.tvquran.com/download/recitations/345/269/012.mp3' },
    { name: 'الرعد', url: 'https://download.tvquran.com/download/recitations/345/269/013.mp3' },
    { name: 'إبراهيم', url: 'https://download.tvquran.com/download/recitations/345/269/014.mp3' },
    { name: 'الحجر', url: 'https://download.tvquran.com/download/recitations/345/269/015.mp3' },
    { name: 'النحل', url: 'https://download.tvquran.com/download/recitations/345/269/016.mp3' },
    { name: 'الإسراء', url: 'https://download.tvquran.com/download/recitations/345/269/017.mp3' },
    { name: 'الكهف', url: 'https://download.tvquran.com/download/recitations/345/269/018.mp3' },
    { name: 'مريم', url: 'https://download.tvquran.com/download/recitations/345/269/019.mp3' },
    { name: 'طه', url: 'https://download.tvquran.com/download/recitations/345/269/020.mp3' },
    { name: 'الأنبياء', url: 'https://download.tvquran.com/download/recitations/345/269/021.mp3' },
    { name: 'الحج', url: 'https://download.tvquran.com/download/recitations/345/269/022.mp3' },
    { name: 'المؤمنون', url: 'https://download.tvquran.com/download/recitations/345/269/023.mp3' },
    { name: 'النور', url: 'https://download.tvquran.com/download/recitations/345/269/024.mp3' },
    { name: 'الفرقان', url: 'https://download.tvquran.com/download/recitations/345/269/025.mp3' },
    { name: 'الشعراء', url: 'https://download.tvquran.com/download/recitations/345/269/026.mp3 ' },
    { name: 'النمل', url: 'https://download.tvquran.com/download/recitations/345/269/027.mp3' },
    { name: 'القصص', url: 'https://download.tvquran.com/download/recitations/345/269/028.mp3' },
    { name: 'العنكبوت', url: 'https://download.tvquran.com/download/recitations/345/269/029.mp3' },
    { name: 'الروم', url: 'https://download.tvquran.com/download/recitations/345/269/030.mp3' },
    { name: 'لقمان', url: 'https://download.tvquran.com/download/recitations/345/269/031.mp3' },
    { name: 'السجدة', url: 'https://download.tvquran.com/download/recitations/345/269/032.mp3' },
    { name: 'الأحزاب', url: 'https://download.tvquran.com/download/recitations/345/269/033.mp3' },
    { name: 'سبأ', url: 'https://download.tvquran.com/download/recitations/345/269/034.mp3' },
    { name: 'فاطر', url: 'https://download.tvquran.com/download/recitations/345/269/035.mp3' },
    { name: 'يس', url: 'https://download.tvquran.com/download/recitations/345/269/036.mp3' },
    { name: 'الصافات', url: 'https://download.tvquran.com/download/recitations/345/269/037.mp3    ' },
    { name: 'ص', url: 'https://download.tvquran.com/download/recitations/345/269/038.mp3' },
    { name: 'الزمر', url: 'https://download.tvquran.com/download/recitations/345/269/039.mp3' },
    { name: 'غافر', url: 'https://download.tvquran.com/download/recitations/345/269/040.mp3' },
    { name: 'فصلت', url: 'https://download.tvquran.com/download/recitations/345/269/041.mp3' },
    { name: 'الشورى', url: 'https://download.tvquran.com/download/recitations/345/269/042.mp3' },
    { name: 'الزخرف', url: 'https://download.tvquran.com/download/recitations/345/269/043.mp3' },
    { name: 'الدخان', url: 'https://download.tvquran.com/download/recitations/345/269/044.mp3' },
    { name: 'الجاثية', url: 'https://download.tvquran.com/download/recitations/345/269/045.mp3' },
    { name: 'الأحقاف', url: 'https://download.tvquran.com/download/recitations/345/269/046.mp3' },
    { name: 'محمد', url: 'https://download.tvquran.com/download/recitations/345/269/047.mp    ' },
    { name: 'الفتح', url: 'https://download.tvquran.com/download/recitations/345/269/048.mp3' },
    { name: 'الحجرات', url: 'https://download.tvquran.com/download/recitations/345/269/049.mp3' },
    { name: 'ق', url: 'https://download.tvquran.com/download/recitations/345/269/050.mp3' },
    { name: 'الذاريات', url: 'https://download.tvquran.com/download/recitations/345/269/051.mp3' },
    { name: 'الطور', url: 'https://download.tvquran.com/download/recitations/345/269/052.mp3' },
    { name: 'النجم', url: 'https://download.tvquran.com/download/recitations/345/269/053.mp3' },
    { name: 'القمر', url: 'https://download.tvquran.com/download/recitations/345/269/054.mp3' },
    { name: 'الرحمن', url: 'https://download.tvquran.com/download/recitations/345/269/055.mp3' },
    { name: 'الواقعة', url: 'https://download.tvquran.com/download/recitations/345/269/056.mp3' },
    { name: 'الحديد', url: 'https://download.tvquran.com/download/recitations/345/269/057.mp3' },
    { name: 'المجادلة', url: 'https://download.tvquran.com/download/recitations/345/269/058.mp3' },
    { name: 'الحشر', url: 'https://download.tvquran.com/download/recitations/345/269/059.mp3' },
    { name: 'الممتحنة', url: 'https://download.tvquran.com/download/recitations/345/269/060.mp3' },
    { name: 'الصف', url: 'https://download.tvquran.com/download/recitations/345/269/061.mp3' },
    { name: 'الجمعة', url: 'https://download.tvquran.com/download/recitations/345/269/062.mp3' },
    { name: 'المنافقون', url: 'https://download.tvquran.com/download/recitations/345/269/063.mp3' },
    { name: 'التغابن', url: 'https://download.tvquran.com/download/recitations/345/269/064.mp3' },
    { name: 'الطلاق', url: 'https://download.tvquran.com/download/recitations/345/269/065.mp3' },
    { name: 'التحريم', url: 'https://download.tvquran.com/download/recitations/345/269/066.mp3' },
    { name: 'الملك', url: 'https://download.tvquran.com/download/recitations/345/269/067.mp3' },
    { name: 'القلم', url: 'https://download.tvquran.com/download/recitations/345/269/068.mp3' },
    { name: 'الحاقة', url: 'https://download.tvquran.com/download/recitations/345/269/069.mp3' },
    { name: 'المعارج', url: 'https://download.tvquran.com/download/recitations/345/269/070.mp3' },
    { name: 'نوح', url: 'https://download.tvquran.com/download/recitations/345/269/071.mp3' },
    { name: 'الجن', url: 'https://download.tvquran.com/download/recitations/345/269/072.mp3' },
    { name: 'المزمل', url: 'https://download.tvquran.com/download/recitations/345/269/073.mp3' },
    { name: 'المدثر', url: 'https://download.tvquran.com/download/recitations/345/269/074.mp3' },
    { name: 'القيامة', url: 'https://download.tvquran.com/download/recitations/345/269/075.mp3' },
    { name: 'الإنسان', url: 'https://download.tvquran.com/download/recitations/345/269/076.mp3' },
    { name: 'المرسلات', url: 'https://download.tvquran.com/download/recitations/345/269/077.mp3' },
    { name: 'النبأ', url: 'https://download.tvquran.com/download/recitations/345/269/078.mp3' },
    { name: 'النازعات', url: 'https://download.tvquran.com/download/recitations/345/269/079.mp3' },
    { name: 'عبس', url: 'https://download.tvquran.com/download/recitations/345/269/080.mp3' },
    { name: 'التكوير', url: 'https://download.tvquran.com/download/recitations/345/269/081.mp3' },
    { name: 'الأنفطار', url: 'https://download.tvquran.com/download/recitations/345/269/082.mp3' },
    { name: 'المطففين', url: 'https://download.tvquran.com/download/recitations/345/269/083.mp3' },
    { name: 'الأنشقاق', url: 'https://download.tvquran.com/download/recitations/345/269/084.mp3' },
    { name: 'البروج', url: 'https://download.tvquran.com/download/recitations/345/269/085.mp3' },
    { name: 'الطارق', url: 'https://download.tvquran.com/download/recitations/345/269/086.mp3' },
    { name: 'الأعلى', url: 'https://download.tvquran.com/download/recitations/345/269/087.mp3' },
    { name: 'الغاشية', url: 'https://download.tvquran.com/download/recitations/345/269/088.mp3' },
    { name: 'الفجر', url: 'https://download.tvquran.com/download/recitations/345/269/089.mp3' },
    { name: 'البلد', url: 'https://download.tvquran.com/download/recitations/345/269/090.mp3' },
    { name: 'الشمس', url: 'https://download.tvquran.com/download/recitations/345/269/091.mp3' },
    { name: 'الليل', url: 'https://download.tvquran.com/download/recitations/345/269/092.mp3' },
    { name: 'الضحى', url: 'https://download.tvquran.com/download/recitations/345/269/093.mp3' },
    { name: 'الشرح', url: 'https://download.tvquran.com/download/recitations/345/269/094.mp3' },
    { name: 'التين', url: 'https://download.tvquran.com/download/recitations/345/269/095.mp3' },
    { name: 'العلق', url: 'https://download.tvquran.com/download/recitations/345/269/096.mp3' },
    { name: 'القدر', url: 'https://download.tvquran.com/download/recitations/345/269/097.mp3' },
    { name: 'البينة', url: 'https://download.tvquran.com/download/recitations/345/269/098.mp3' },
    { name: 'الزلزلة', url: 'https://download.tvquran.com/download/recitations/345/269/099.mp3' },
    { name: 'العاديات', url: 'https://download.tvquran.com/download/recitations/345/269/100.mp3' },
    { name: 'القارعة', url: 'https://download.tvquran.com/download/recitations/345/269/101.mp3' },
    { name: 'التكاثر', url: 'https://download.tvquran.com/download/recitations/345/269/102.mp3' },
    { name: 'العصر', url: 'https://download.tvquran.com/download/recitations/345/269/103.mp3' },
    { name: 'الهمزة', url: 'https://download.tvquran.com/download/recitations/345/269/104.mp3' },
    { name: 'الفيل', url: 'https://download.tvquran.com/download/recitations/345/269/105.mp3' },
    { name: 'قريش', url: 'https://download.tvquran.com/download/recitations/345/269/106.mp3' },
    { name: 'الماعون', url: 'https://download.tvquran.com/download/recitations/345/269/107.mp3' },
    { name: 'الكوثر', url: 'https://download.tvquran.com/download/recitations/345/269/108.mp3' },
    { name: 'الكافرون', url: 'https://download.tvquran.com/download/recitations/345/269/109.mp3' },
    { name: 'النصر', url: 'https://download.tvquran.com/download/recitations/345/269/110.mp3' },
    { name: 'المسد', url: 'https://download.tvquran.com/download/recitations/345/269/111.mp3' },
    { name: 'الإخلاص', url: 'https://download.tvquran.com/download/recitations/345/269/112.mp3' },
    { name: 'الفلق', url: 'https://download.tvquran.com/download/recitations/345/269/113.mp3' },
    { name: 'الناس', url: 'https://download.tvquran.com/download/recitations/345/269/114.mp3' },

  ];

  let currentSurahIndex = null;

  quran.forEach((surah, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = surah.name;
    listItem.addEventListener('click', () => {
      audioPlayer.src = surah.url;
      audioPlayer.play();
      setActiveSurah(index);
    });
    quranList.appendChild(listItem);
  });

  function setActiveSurah(index) {
    if (currentSurahIndex !== null) {
      const previousSurah = quranList.children[currentSurahIndex];
      previousSurah.classList.remove('active');
    }

    const currentSurah = quranList.children[index];
    currentSurah.classList.add('active');
    currentSurah.scrollIntoView({ behavior: 'smooth', block: 'center' });

    currentSurahIndex = index;
  }
});
