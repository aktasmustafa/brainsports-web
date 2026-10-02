export const siteData = {
  global: {
    title: "BRAINSPORTS",
    subtitle: "Beyin, Yapay Zeka ve Spor Bilimlerinde Yenilikçilik",
    phone: "+90 (462) 377 30 00",
    email: "info@brainsports.com.tr",
    address: "METAM Laboratuvarı / Trabzon Spor Performans Ölçüm Merkezi"
  },
  project: {
    badge: "TÜBİTAK 1001",
    title: "Göz İzleme Teknolojisi ve Galvanik Cilt Tepkisiyle Birleştirilmiş Elektroensefalografik Sinyaller Kullanılarak Futbolcuların Fiziksel Performans Düzeylerini Belirleyen Makine Öğrenme Temelli Tahmin Modelinin Geliştirilmesi",
    description: "Karadeniz Teknik Üniversitesi, Trabzon Üniversitesi ve Recep Tayyip Erdoğan Üniversitesi'nden araştırmacıların ortak çalışması.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    sections: [
      {
        id: "amacy",
        title: "Araştırmanın Amacı",
        content: "Futbolda başarı, sadece fiziksel kapasiteyle değil, aynı zamanda bilişsel hız, stres yönetimi ve odaklanma becerisiyle de doğrudan ilişkilidir. Projemiz; saha içi performansı salt fiziksel testlerin ötesine taşıyarak, sporcunun anlık beyin dalgaları (EEG), stres tepkileri (EDA/GSR) ve görsel odaklanma (Göz İzleme) verileriyle bütünleşik bir performans tahmin modeli oluşturmayı hedeflemektedir."
      },
      {
        id: "yontem",
        title: "Çok Boyutlu Analiz Yöntemi",
        content: "Proje kapsamında, profesyonel futbolculardan alınan EEG (beyin aktivitesi), GSR (stres ve duygusal uyarılma) ve Göz İzleme (görsel dikkat ve karar verme) verileri, eşzamanlı fiziksel performans testleriyle birleştirilmektedir. Toplanan devasa büyüklükteki fizyolojik veri seti, ileri düzey Yapay Zeka algoritmaları ile analiz edilerek sporcuların gizli potansiyelleri haritalandırılır."
      }
    ],
    team: [
      { name: "Dr. Öğr. Üyesi Murat Emirzeoğlu", role: "Proje Yürütücüsü", institution: "KTÜ Sağlık Bilimleri Fizyoterapi ve Rehabilitasyon", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500", socials: { twitter: "#", linkedin: "#", mail: "#" } },
      { name: "Prof. Dr. Önder Aydemir", role: "Araştırmacı", institution: "KTÜ Mühendislik Elektrik-Elektronik", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500", socials: { twitter: "#", linkedin: "#", mail: "#" } },
      { name: "Dr. Öğr. Üyesi Abdülkadir Birol", role: "Araştırmacı", institution: "Trabzon Üniversitesi Spor Bilimleri Antrenörlük", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500", socials: { twitter: "#", linkedin: "#", mail: "#" } },
      { name: "Dr. Öğr. Üyesi Ebru Ergün", role: "Araştırmacı", institution: "RTEÜ Mimarlık ve Mühendislik Elektrik-Elektronik", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500", socials: { twitter: "#", linkedin: "#", mail: "#" } },
      { name: "Arş. Gör. Fatih Aydın", role: "Proje Bursiyeri", institution: "KTÜ Mühendislik Elektrik-Elektronik", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500", socials: { twitter: "#", linkedin: "#", mail: "#" } },
      { name: "Mustafa Taha Yıldırmış", role: "Proje Bursiyeri (YL)", institution: "KTÜ Sağlık Bilimleri Fizyoloji", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500", socials: { twitter: "#", linkedin: "#", mail: "#" } }
    ]
  },
  about: {
    mission: "BrainSportsLab olarak temel misyonumuz, spor bilimleri, nörobilim ve yapay zeka kesişiminde yenilikçi araştırmalar yaparak sporcu performansını en üst düzeye çıkarmak ve bilimsel literatüre değerli katkılar sağlamaktır.",
    vision: "Ulusal ve uluslararası arenada spor bilimleri araştırmalarına yön veren, multidisipliner yapısıyla teknoloji ve sporu birleştiren öncü bir araştırma merkezi olmak."
  },
  researchAreas: [
    {
      id: "eeg",
      title: "Elektroensefalografi (EEG)",
      shortDesc: "Beynin elektriksel aktivitesini ileri teknoloji ile analiz ederek dikkat, odaklanma ve reaksiyon süreçlerini değerlendirir.",
      content: "Elektroensefalografi (EEG), beynin elektriksel aktivitesini ileri teknoloji ile analiz ederek dikkat, odaklanma, reaksiyon ve bilişsel performans süreçlerini bilimsel verilerle değerlendiren nörofizyolojik ölçüm yöntemidir. Uluslararası 10-20 sistemine göre konumlandırılan taşınabilir EEG elektrotları, sporcuların baskı altında beyin dalgalarını milisaniyeler düzeyinde kaydeder. Amacımız sadece fiziksel eforu değil; baskı altında 'en doğru kararı verebilen' beyni sayısal verilerle ortaya koymaktır.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "eda",
      title: "Elektrodermal Aktivite (EDA)",
      shortDesc: "Bireylerin stres seviyeleri ve otonom sinir sistemi tepkilerini ölçerek performans analizinde önemli veriler sunar.",
      content: "Galvanik Cilt Tepkisi (GSR) olarak da bilinen Elektrodermal aktivite (EDA) ölçümleri, sporcunun otonom sinir sistemi tepkilerini ve duygusal uyarılmasını anlık olarak kaydeder. Kritik anlarda yaşanan ani stres yükselişlerinin fiziksel uygunluk performansı ve göz takip sistemleri üzerindeki etkileri birlikte ele alınmaktadır. Bu sayede sporcunun 'görünmez stres' seviyeleri rakamsal bir veriye dönüştürülür.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "goz-takip",
      title: "Göz Takip Sistemi",
      shortDesc: "Dikkat, odaklanma ve bilişsel yük gibi süreçlerin değerlendirilmesinde kritik rol oynar.",
      content: "Göz takip (Eye Tracking) sistemleri, dikkat, odaklanma ve bilişsel yük gibi bilişsel süreçlerin değerlendirilmesinde kritik rol oynar. Elit bir futbolcu ile amatör bir oyuncu arasındaki en büyük farklardan biri, topa vurmadan önce veya dar alanda paslaşırken sahayı tarama (visual scanning) hızlarıdır. Özel sensörlü cihazlarımızla sporcuların saha içindeki görsel tarama stratejilerini ve odaklanma sürelerini ölçerek, refleks ve karar mekanizmalarını sayısal verilere döküyoruz.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "fiziksel-uygunluk",
      title: "Fiziksel Uygunluk",
      shortDesc: "Sporcunun genel performansını, kuvvetini ve dayanıklılığını ölçen kapsamlı test bataryaları.",
      content: "Nörolojik verilerin bir anlam ifade edebilmesi için fiziksel kapasite ile birleşmesi şarttır. Laboratuvarımızda, sporcunun potansiyelini maksimize etmek için özel olarak tasarlanmış test bataryaları kullanılmaktadır. Sporcunun kassal kuvvetinden asimetrik dengesizliklerine, patlayıcı gücünden anaerobik eşiğine kadar her detayı standart ve teknolojik testlerle milimetrik olarak ölçüyoruz. Bu veriler, beyinden gelen sinyallerle kasın gerçek çıktısı arasındaki bağlantıyı çözmemizi sağlar.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
    }
  ],
  fitnessTests: [
    { id: "sprint", title: "Sprint", description: "Sporcunun kısa mesafedeki hızlanma ve maksimum sürat performansını değerlendiren testtir." },
    { id: "denge", title: "Denge Değerlendirmesi", description: "Bireyin statik ve dinamik denge kontrolünü analiz ederek postüral stabilitesini ölçen testtir." },
    { id: "izokinetik", title: "İzokinetik Kuvvet", description: "Kas kuvveti ve eklem performansını sabit açısal hızda değerlendirerek kas dengesini analiz eden test yöntemidir." },
    { id: "izometrik", title: "İzometrik Kuvvet", description: "Kas gruplarının kuvvet, dayanıklılık ve performans düzeylerini sabit hızda analiz eden ölçüm yöntemidir." },
    { id: "wingate", title: "Wingate", description: "Anaerobik güç ve kapasiteyi belirlemek amacıyla yüksek şiddetli bisiklet egzersiziyle uygulanan performans testidir." },
    { id: "sicrama", title: "Sıçrama", description: "Alt ekstremite patlayıcı kuvvetini, güç üretimini ve atletik performansı ölçmek amacıyla uygulanan testlerdir." },
    { id: "ceviklik", title: "Çeviklik", description: "Yön değiştirme hızı, reaksiyon zamanı ve koordinasyonu ölçen test bataryası." },
    { id: "aerobik", title: "Aerobik Kapasite", description: "Kardiyovasküler dayanıklılığı ve vücudun oksijen kullanım kapasitesini değerlendiren performans testidir." }
  ],
  collaborations: [
    { 
      id: "1461-trabzon", 
      name: "1461 Trabzon FK", 
      description: "Profesyonel futbol takımının fiziksel uygunluk ve nörobilişsel testlerinin yürütülmesi alanında çözüm ortağımız.",
      logo: "https://upload.wikimedia.org/wikipedia/tr/6/64/1461_Trabzon_logosu.png" 
    },
    { 
      id: "ofspor", 
      name: "Yeşilyurt D.Ç Ofspor", 
      description: "Altyapı ve A takım seviyesinde sporcu performans ölçümleri ve akademik araştırmalarda işbirliği.",
      logo: "https://upload.wikimedia.org/wikipedia/tr/0/02/Ofspor.png" 
    }
  ],
  faq: [
    {
      id: "faq-1",
      question: "BrainSportsLab projesinin ana amacı nedir?",
      answer: "Projemizin ana amacı, sporda performansı yalnızca kas kuvveti olarak değil; beyin, sinir sistemi ve odaklanma süreçleriyle birlikte bütüncül bir yaklaşımla analiz etmektir. EEG, Göz İzleme (Eye Tracking) ve Fiziksel Test verilerini Yapay Zeka modelleriyle harmanlayarak futbolcuların performans düşüşlerini ve karar hatalarını önceden tahmin edebilen sistemler geliştiriyoruz."
    },
    {
      id: "faq-2",
      question: "EEG ve EDA (Elektrodermal Aktivite) sistemleri sporda nasıl bir avantaj sağlar?",
      answer: "Klasik antrenman sistemleri oyuncunun ne kadar hızlı koştuğunu ölçer. Ancak EEG ve EDA cihazları; oyuncunun koşarken ne kadar bilişsel stres yaşadığını ve beynin yorgunluk sinyallerini nasıl yönettiğini gösterir. Bu veriler, sporcunun 'Oyun Zekasını' ve 'Baskı Altında Karar Verme' yetisini rakamlara dökerek antrenörlere eşsiz bir avantaj sağlar."
    },
    {
      id: "faq-3",
      question: "Tahmin modelleriniz hangi verilerle besleniyor?",
      answer: "Modellerimiz, profesyonel sporculardan toplanan çok boyutlu veri setleriyle beslenir: Elektroensefalografi (EEG) ile beyin dalgaları, Galvanik Cilt Tepkisi (EDA/GSR) ile stres seviyeleri, Göz İzleme sensörleriyle odaklanma süreleri ve bunlarla eş zamanlı uygulanan Fiziksel Uygunluk (İzokinetik, Wingate, Sıçrama vb.) testi verileri makine öğrenmesi algoritmalarımıza girdi olarak sunulur."
    },
    {
      id: "faq-4",
      question: "Araştırma sonuçları kulüpler ve antrenörler tarafından nasıl kullanılabilir?",
      answer: "Geliştirdiğimiz tahmin modelleri sayesinde kulüpler, oyuncuların kişisel 'Bilişsel ve Fiziksel Yorgunluk' profillerini çıkarabilir. Antrenörler; maça hangi oyuncuyla başlanması gerektiği, yoğun maç takviminde kimin sakatlık riskinin daha yüksek olduğu ve taktiksel idmanlarda oyuncuların dikkatini nasıl artırabilecekleri konularında doğrudan bilimsel (veri odaklı) kararlar alabilirler."
    },
    {
      id: "faq-5",
      question: "Laboratuvar araştırmalarına gönüllü sporcu olarak katılabilir miyim?",
      answer: "Evet! Veri tabanımızı genişletmek ve farklı branş/lig seviyelerinden sporcuların nörofiziksel profillerini incelemek için dönem dönem gönüllü alımları yapıyoruz. İletişim sayfası üzerinden araştırma grubumuza e-posta göndererek uygun test periyotları hakkında bilgi alabilirsiniz."
    }
  ]
};
