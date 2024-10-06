"use strict";
// Đối tượng chứa dữ liệu ngôn ngữ
const languages = {
  vi: {
    // Header
    bannerName: "Lương Thế Hoàng",
    bannerJobTitle: "Full Stack Developer",
    navInformation: "Thông tin",
    navResume: "Lý lịch",
    navCertificate: "Chứng chỉ",
    navProject: "Dự án",

    //Thông tin cá nhân
    careerGoal: "Mục tiêu nghề nghiệp",
    careerGoalContent:
      "Với nền tảng cơ điện tử và kiến thức lập trình tích lũy từ các môn học liên quan như lập trình C/C++ và hệ thống nhúng, tôi mong muốn phát triển sự nghiệp trong lĩnh vực IT, đặc biệt là lập trình FrontEnd và Java. Tôi đang học IT trực tuyến qua FUNiX và tích lũy kinh nghiệm từ các dự án cá nhân, với mục tiêu áp dụng kiến thức này vào thực tế và trở thành một lập trình viên chuyên nghiệp.",
    personalInfo: "Thông tin cá nhân",
    gender: "Giới tính",
    genderValue: "Nam",
    birthDate: "Ngày sinh",
    birthDateValue: "25/10/1992",
    phone: "Điện thoại",
    phoneValue: "(+81) 070-8598-1992",
    email: "Email",
    emailValue: "hoangbachkhoa@gmail.com",
    address: "Địa chỉ",
    addressValue: "Choueiji, Higashiosaka, Osaka, Japan",
    website: "Website",
    websiteValue: "https://github.com/HoangFX20599",
    visaStatus: "Tư cách lưu trú",
    visaStatusValue: "技術・人文知識・国際業務",
    visaExpiry: "Ngày hết hạn visa",
    visaExpiryValue: "9/2028",
    bloodType: "Nhóm máu",
    bloodTypeValue: "O Rh+",
    maritalStatus: "Tình trạng hôn nhân",
    maritalStatusValue: "Chưa kết hôn",
    emailHelp:
      "Hãy nhập email để xác thực (Nhập một email đúng định dạng bất kỳ để hiển thị chi tiết thông tin).",
    warningMsg: "Hãy nhập email để xác thực",
    submitBtn: "Submit",

    //Kinh nghiệm
    experienceTitle: "Kinh nghiệm",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    kinkiPosition:
      "Production engineering staff - Công ty Cổ phần Kinki Kinzoku (Nhật Bản)",
    kinkiDuration: "09/2018 - Hiện tại",
    kinkiTask1:
      "- Thực hiện cải tiến quy trình sản xuất và khắc phục các vấn đề kỹ thuật liên quan.",
    kinkiTask2:
      "- Tham gia vào các dự án bảo trì và sửa chữa, chế tạo thiết bị JIG, đảm bảo hiệu suất hoạt động ổn định.",
    kinkiTask3:
      "- Thông dịch và dịch các tài liệu công việc, hỗ trợ các thực tập sinh trong quá trình làm việc và học tập.",
    samsungPosition:
      "Leader - Công ty Samsung Electronics Việt Nam Thái Nguyên",
    samsungDuration: "01/2016 - 06/2017",
    samsungTask1:
      "- Quản lý và cung cấp linh kiện cho dây chuyền sản xuất, đảm bảo quy trình sản xuất diễn ra suôn sẻ.",
    samsungTask2:
      "- Lãnh đạo nhóm trong việc sắp xếp và cung cấp các bộ phận cần thiết để đáp ứng yêu cầu sản xuất.",
    samsungTask3:
      "- Chịu trách nhiệm theo dõi và tối ưu hóa hiệu suất của bộ phận, phối hợp với các phòng ban khác để giải quyết các vấn đề.",

    //Học ván
    educationTitle: "Học vấn",
    funixTitle: "FUNiX",
    funixDuration: "12/2022 - Hiện tại",
    funixTask1: "- Xây dựng Website - FrontEnd.",
    funixTask2: "- Lập trình Java",
    bkTitle: "Kỹ sư - ĐH Bách Khoa Hà Nội",
    bkDuration: "08/2010 - 03/2016",
    bkMajor: "- Chuyên ngành: Cơ điện tử",
    bkGPA: "- GPA: 3.34/4",
    bkClassification: "- Xếp loại: Giỏi",

    // Hoạt động
    activityTitle: "Hoạt động",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    volunteerTitle: "Tình nguyện viên tại HONK - 東大阪日本語教室",
    volunteerDuration: "9/2018 - Hiện tại",
    volunteerTask1:
      "- Tham gia vào các hoạt động tình nguyện nhằm học tập và trao đổi văn hóa.",
    volunteerTask2:
      "- Thực hiện các hoạt động như viết thư pháp, nấu ăn, và giao lưu văn hóa với các thành viên trong lớp.",
    clubTitle: "Câu lạc bộ FUNiX",
    clubDuration: "12/2022 - Hiện tại",
    clubTask:
      "- Thảo luận và trao đổi kiến thức với các thành viên khác để nâng cao kỹ năng lập trình.",

    // Sở thích
    hobbyTitle: "Sở thích",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    hobbyMusic: "Âm nhạc",
    hobbyTravel: "Du lịch",
    hobbyReading: "Đọc sách",
    hobbyGenshin: "Genshin",

    // Ngôn ngữ
    languageTitle: "Ngôn ngữ",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    englishSkill: "Tiếng Anh - TOEIC 455",
    japaneseSkill: "Tiếng Nhật - JLPT N2",

    // Kỹ năng
    skillsTitle: "Kỹ năng",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    itSkillsTitle: "Kỹ năng IT:",
    htmlSkill: "HTML/CSS: Intermediate",
    javascriptSkill: "JavaScript: Intermediate",
    javaSkill: "Java: Fundamental",
    bootstrapSkill: "Bootstrap: Fundamental",
    mechatronicsSkillsTitle: "Kỹ năng Cơ điện tử:",
    matlabSkill: "MATLAB: Intermediate",
    mapleSkill: "MAPLE: Intermediate",
    autocadSkill: "AUTOCAD: Intermediate",
    autolispSkill: "AUTOLISP: Fundamental",
    solidworksSkill: "SOLIDWORKS: Intermediate",
    catiaSkill: "CATIA: Intermediate",
    msOfficeSkill: "MS OFFICE: Intermediate",

    // Chứng chỉ - Giải thưởng
    certificatesTitle: "Chứng chỉ - Giải thưởng",
    universityDegreeTitle: "BẰNG ĐẠI HỌC - ĐẠI HỌC BÁCH KHOA HÀ NỘI",
    universityDegreeMajor: "- Kỹ thuật cơ điện tử",
    universityDegreeGPA: "- GPA: 3.34 - Giỏi",
    webCertificateTitle: "CHỨNG CHỈ LẬP TRÌNH WEBSITE - FUNIX",
    webCertificateProgram: "- Chứng chỉ thuộc chương trình CCDN",
    webCertificateGPA: "- GPA: 8.8",
    jlptCertificateTitle: "CHỨNG CHỈ TIẾNG NHẬT - JLPT",
    jlptLevel: "- JLPT: N2",

    // Dự án
    projectsTitle: "Dự án",
    projectsDescription: "Nhấp vào từng dự án để xem chi tiết.",

    //project 1
    project1Title: "CV cá nhân",
    project1Year: "2023",
    project1Client: "Funix",
    project1Role: "Developer",
    project1DescriptionLabel: "Mô tả",
    project1DescriptionText:
      'Dự án "CV cá nhân" nhằm tạo ra một trang web giới thiệu bản thân, liệt kê các kỹ năng, kinh nghiệm làm việc và mục tiêu nghề nghiệp. Trang web này không chỉ là một công cụ để thể hiện khả năng và thành tựu cá nhân mà còn giúp nhà tuyển dụng có cái nhìn rõ hơn về ứng viên.',
    project1TasksLabel: "Nhiệm vụ",
    project1Task1: "- Thiết kế giao diện thân thiện và dễ sử dụng.",
    project1Task2:
      "- Hiển thị thông tin cá nhân, kỹ năng, kinh nghiệm làm việc và dự án.",
    project1Task3: "- Tối ưu hóa trang web cho thiết bị di động.",
    project1Task4:
      "- Tạo các liên kết đến các dự án và hồ sơ trực tuyến khác (như LinkedIn, GitHub).",
    project1TechnologyLabel: "Công nghệ",
    project1Technology: "- HTML, CSS, Javascript, Bootstrap",

    // Dự án 2
    project2Title: "TRANG WEB LƯU TRỮ ĐÁM MÂY - LORUKI",
    project2Year: "2023",
    project2Client: "Funix",
    project2Role: "Developer",
    project2DescriptionLabel: "Mô tả",
    project2DescriptionText:
      "Xây dựng website responsive với Media Query, tối ưu hóa trải nghiệm người dùng.",
    project2TasksLabel: "Nhiệm vụ",
    project2Task:
      "- Thiết kế giao diện - Phát triển code - Kiểm thử và tối ưu hóa.",
    project2TechnologyLabel: "Công nghệ",
    project2Technology: "- HTML, CSS, Javascript",

    // Dự án 3
    project3Title: "Website Frontend Bootcamp",
    project3Year: "2023",
    project3Client: "Funix",
    project3Role: "Developer",
    project3DescriptionLabel: "Mô tả",
    project3DescriptionText:
      "Dự án cung cấp nền tảng học tập trực tuyến cho người học lập trình frontend, với tài liệu và bài tập được tổ chức dễ hiểu. Sử dụng Bootstrap để đảm bảo thiết kế responsive.",
    project3TasksLabel: "Nhiệm vụ",
    project3Task:
      "- Thiết kế và phát triển trang web thân thiện với người dùng. Cung cấp tài liệu và bài tập thực hành. Tạo các phần quiz và feedback để nâng cao trải nghiệm học.",
    project3TechnologyLabel: "Công nghệ",
    project3Technology:
      "- HTML, CSS, Javascript, Bootstrap để tạo responsive layout",

    // Dự án 4
    project4Title: "Game Guess My Number",
    project4Year: "2023",
    project4Client: "Funix",
    project4Role: "Developer",
    project4DescriptionLabel: "Mô tả",
    project4DescriptionText:
      'Game "Guess My Number" cho phép người chơi đoán một số bí mật nằm giữa 1 và 20. Người chơi sẽ nhập số dự đoán và nhận phản hồi về mức độ chính xác của dự đoán đó.',
    project4TasksLabel: "Nhiệm vụ",
    project4Task:
      "- Tạo ra một giao diện người dùng hấp dẫn cho trò chơi. Cung cấp phản hồi chính xác cho mỗi lần đoán của người chơi. Quản lý điểm số và high score của người chơi. Tích hợp chức năng bắt đầu lại trò chơi.",
    project4TechnologyLabel: "Công nghệ",
    project4Technology: "- HTML, CSS, Javascript",

    // Dự án 5
    project5Title: "Game Pig Game",
    project5Year: "2023",
    project5Client: "Funix",
    project5Role: "Developer",
    project5DescriptionLabel: "Mô tả",
    project5DescriptionText:
      'Dự án "Pig Game" là một trò chơi tương tác giữa hai người chơi, nơi họ lần lượt gieo xúc xắc và cố gắng đạt được số điểm tổng cộng cao hơn 100. Người chơi sẽ có cơ hội giữ lại điểm số hiện tại hoặc tiếp tục gieo xúc xắc để tăng thêm điểm. Nếu họ gieo được số 1, điểm số hiện tại sẽ bị reset và chuyển sang lượt chơi của đối thủ.',
    project5TasksLabel: "Nhiệm vụ",
    project5Task:
      "- Tạo giao diện người dùng cho trò chơi. Lập trình logic để quản lý các lượt chơi và tính toán điểm số. Cung cấp phản hồi về điểm số và kết quả trò chơi. Đảm bảo trò chơi có thể bắt đầu lại sau khi hoàn thành.",
    project5TechnologyLabel: "Công nghệ",
    project5Technology: "- HTML, CSS, Javascript",

    // Dự án 6
    project6Title: "NGÂN HÀNG SỐ",
    project6Year: "2024",
    project6Client: "Funix",
    project6Role: "Developer",
    project6DescriptionLabel: "Mô tả",
    project6DescriptionText:
      'Dự án "Ngân hàng số" là một ứng dụng phần mềm mô phỏng một hệ thống ngân hàng trực tuyến, cho phép khách hàng quản lý tài khoản, thực hiện các giao dịch như rút tiền và xem lịch sử giao dịch. Hệ thống hỗ trợ nhiều loại tài khoản khác nhau như tài khoản ATM và tài khoản vay, cung cấp giao diện thân thiện với người dùng và tích hợp các tính năng bảo mật để đảm bảo an toàn trong các giao dịch tài chính.',
    project6TasksLabel: "Nhiệm vụ",
    project6Task1:
      "- Quản lý tài khoản: Cho phép người dùng tạo và quản lý các loại tài khoản như tài khoản ATM và tài khoản vay.",
    project6Task2:
      "- Thực hiện giao dịch: Hỗ trợ rút tiền từ tài khoản và ghi lại lịch sử giao dịch.",
    project6Task3:
      "- Báo cáo giao dịch: Cung cấp thông tin chi tiết về các giao dịch đã thực hiện, bao gồm thời gian, số tiền và trạng thái.",
    project6Task4:
      "- Kiểm tra tính hợp lệ: Đảm bảo rằng các giao dịch đều tuân thủ các quy tắc như số tiền tối thiểu và tối đa được phép rút.",
    project6TechnologyLabel: "Công nghệ",
    project6Technology: "- Java (IntelliJ IDEA)",

    // Footer
    footerFacebook: "Facebook",
    footerLinkedin: "Linkedin",
    footerGithub: "Github",
  },

  ja: {
    // Header
    bannerName: "ルオン・テェ・ホアン",
    bannerJobTitle: "フルスタック開発者",
    navInformation: "情報",
    navResume: "履歴書",
    navCertificate: "証明書",
    navProject: "プロジェクト",

    // Thông tin cá nhân
    careerGoal: "職業目標",
    careerGoalContent:
      "メカトロニクスのバックグラウンドとC/C++プログラミングなどの関連科目から得た知識を活かし、IT業界でキャリアを発展させたいと考えています。現在、FUNiXでITをオンライン学習し、個人プロジェクトからの経験を積み、これらの知識を実際に応用してプロのプログラマーになることを目指しています。",
    personalInfo: "個人情報",
    gender: "性別",
    genderValue: "男性",
    birthDate: "生年月日",
    birthDateValue: "1992年10月25日",
    phone: "電話",
    phoneValue: "(+81) 070-8598-1992",
    email: "メール",
    emailValue: "hoangbachkhoa@gmail.com",
    address: "住所",
    addressValue: "日本、大阪、東大阪市長栄寺",
    website: "ウェブサイト",
    websiteValue: "https://github.com/HoangFX20599",
    visaStatus: "在留資格",
    visaStatusValue: "技術・人文知識・国際業務",
    visaExpiry: "ビザ有効期限",
    visaExpiryValue: "2028年9月",
    bloodType: "血液型",
    bloodTypeValue: "O Rh+",
    maritalStatus: "結婚状況",
    maritalStatusValue: "未婚",
    emailHelp:
      "確認のためにメールアドレスを入力してください（詳細表示のため、正しい形式のメールアドレスを入力してください。)",
    warningMsg: "メールを入力してください",
    submitBtn: "送信",

    //Kinh nghiệm
    experienceTitle: "経験",
    viewMoreBtn: "もっと表示",
    viewLessBtn: "少なく表示",
    kinkiPosition: "生産技術スタッフ - 近畿金属株式会社（日本）",
    kinkiDuration: "2018年9月 - 現在",
    kinkiTask1:
      "- 生産プロセスの改善を実施し、関連する技術的問題を解決します。",
    kinkiTask2:
      "- メンテナンスおよび修理プロジェクトに参加し、JIG機器を製造して、安定した稼働を保証します。",
    kinkiTask3: "- 業務文書を通訳および翻訳し、研修生を支援します。",
    samsungPosition: "リーダー - サムスン電子ベトナム・タイグエン",
    samsungDuration: "2016年1月 - 2017年6月",
    samsungTask1:
      "- 生産ラインへの部品供給を管理し、スムーズな生産プロセスを保証します。",
    samsungTask2:
      "- 生産要件に応じて必要な部品を整理および供給するチームをリードします。",
    samsungTask3:
      "- 部門のパフォーマンスを監視および最適化し、他の部門と連携して問題を解決します。",

    //Học ván
    educationTitle: "学歴",
    funixTitle: "FUNiX",
    funixDuration: "2022年12月 - 現在",
    funixTask1: "- ウェブサイトを構築 - フロントエンド。",
    funixTask2: "- Javaプログラミング",
    bkTitle: "エンジニア - ハノイ工科大学",
    bkDuration: "2010年8月 - 2016年3月",
    bkMajor: "- 専攻: メカトロニクス",
    bkGPA: "- GPA: 3.34/4",
    bkClassification: "- 成績: 優",

    // Hoạt động
    activityTitle: "活動",
    viewMoreBtn: "もっと表示",
    viewLessBtn: "少なく表示",
    volunteerTitle: "Honk - 東大阪日本語教室でのボランティア",
    volunteerDuration: "2018年9月 - 現在",
    volunteerTask1:
      "- 学習と文化交流を目的としたボランティア活動に参加します。",
    volunteerTask2:
      "- 書道、料理、クラスメンバーとの文化交流などの活動を行います。",
    clubTitle: "FUNiXクラブ",
    clubDuration: "2022年12月 - 現在",
    clubTask:
      "- 他のメンバーとのディスカッションと知識の交換を行い、プログラミングスキルを向上させます。",

    // Sở thích
    hobbyTitle: "趣味",
    viewMoreBtn: "もっと表示",
    viewLessBtn: "少なく表示",
    hobbyMusic: "音楽",
    hobbyTravel: "旅行",
    hobbyReading: "読書",
    hobbyGenshin: "原神",

    // Ngôn ngữ
    languageTitle: "言語",
    viewMoreBtn: "もっと表示",
    viewLessBtn: "少なく表示",
    englishSkill: "英語 - TOEIC 455",
    japaneseSkill: "日本語 - JLPT N2",

    // Kỹ năng
    skillsTitle: "スキル",
    viewMoreBtn: "もっと表示",
    viewLessBtn: "少なく表示",
    itSkillsTitle: "ITスキル:",
    htmlSkill: "HTML/CSS: 中級",
    javascriptSkill: "JavaScript: 中級",
    javaSkill: "Java: 基礎",
    bootstrapSkill: "Bootstrap: 基礎",
    mechatronicsSkillsTitle: "メカトロニクススキル:",
    matlabSkill: "MATLAB: 中級",
    mapleSkill: "MAPLE: 中級",
    autocadSkill: "AUTOCAD: 中級",
    autolispSkill: "AUTOLISP: 基礎",
    solidworksSkill: "SOLIDWORKS: 中級",
    catiaSkill: "CATIA: 中級",
    msOfficeSkill: "MS OFFICE: 中級",

    // Chứng chỉ - Giải thưởng
    certificatesTitle: "証明書 - 賞",
    universityDegreeTitle: "大学の学位 - ハノイ工科大学",
    universityDegreeMajor: "- メカトロニクス技術",
    universityDegreeGPA: "- GPA: 3.34 - 優",
    webCertificateTitle: "ウェブサイトプログラミング証明書 - FUNiX",
    webCertificateProgram: "- CCDNプログラムに属する証明書",
    webCertificateGPA: "- GPA: 8.8",
    jlptCertificateTitle: "日本語能力試験証明書 - JLPT",
    jlptLevel: "- JLPT: N2",

    // Dự án
    projectsTitle: "プロジェクト",
    projectsDescription: "各プロジェクトをクリックして詳細を表示します。",

    // Project 1 - 修正版
    project1Title: "個人のCV",
    project1Year: "2023",
    project1Client: "Funix",
    project1Role: "開発者",
    project1DescriptionLabel: "説明",
    project1DescriptionText:
      "「個人のCV」プロジェクトは、自己紹介のウェブサイトを作成し、スキル、職務経験、キャリア目標をリストアップすることを目的としています。このウェブサイトは、能力や成果を示すためのツールであるだけでなく、雇用主に候補者についての明確な見解を提供します。",
    project1TasksLabel: "タスク",
    project1Task1: "- ユーザーフレンドリーなインターフェースを設計します。",
    project1Task2: "- 個人情報、スキル、職務経験、プロジェクトを表示します。",
    project1Task3: "- モバイルデバイス向けにもウェブサイトを最適化します。",
    project1Task4:
      "- プロジェクトやオンラインプロフィールへのリンクを作成します（LinkedIn、GitHubなど）。",
    project1TechnologyLabel: "テクノロジー",
    project1Technology: "- HTML、CSS、Javascript、Bootstrap",

    // Dự án 2
    project2Title: "クラウドストレージウェブサイト - LORUKI",
    project2Year: "2023",
    project2Client: "Funix",
    project2Role: "開発者",
    project2DescriptionLabel: "説明",
    project2DescriptionText:
      "メディアクエリを使用してレスポンシブウェブサイトを構築し、ユーザーエクスペリエンスを最適化します。",
    project2TasksLabel: "タスク",
    project2Task:
      "- インターフェースを設計 - コードを開発 - テストと最適化を行います。",
    project2TechnologyLabel: "テクノロジー",
    project2Technology: "- HTML、CSS、Javascript",

    // Dự án 3
    project3Title: "フロントエンドブートキャンプウェブサイト",
    project3Year: "2023",
    project3Client: "Funix",
    project3Role: "開発者",
    project3DescriptionLabel: "説明",
    project3DescriptionText:
      "このプロジェクトは、フロントエンドプログラミングを学ぶためのオンライン学習プラットフォームを提供し、文書と演習が理解しやすく整理されています。レスポンシブデザインを確保するためにBootstrapを使用しています。",
    project3TasksLabel: "タスク",
    project3Task:
      "- ユーザーフレンドリーなウェブサイトを設計し、開発します。資料や実習を提供します。学習体験を向上させるために、クイズやフィードバックセクションを作成します。",
    project3TechnologyLabel: "テクノロジー",
    project3Technology:
      "- レスポンシブレイアウトを作成するためのHTML、CSS、Javascript、Bootstrap",

    // Dự án 4
    project4Title: "ゲーム「Guess My Number」",
    project4Year: "2023",
    project4Client: "Funix",
    project4Role: "開発者",
    project4DescriptionLabel: "説明",
    project4DescriptionText:
      "「Guess My Number」ゲームは、プレイヤーが1から20の間の秘密の数字を推測することを可能にします。プレイヤーは推測した数字を入力し、その推測の正確さについてのフィードバックを受け取ります。",
    project4TasksLabel: "タスク",
    project4Task:
      "- ゲームのユーザーフレンドリーなインターフェースを作成します。プレイヤーの推測ごとに正確なフィードバックを提供します。プレイヤーのスコアとハイスコアを管理します。ゲームを再スタートする機能を統合します。",
    project4TechnologyLabel: "テクノロジー",
    project4Technology: "- HTML、CSS、Javascript",

    // Dự án 5
    project5Title: "ゲーム「Pig Game」",
    project5Year: "2023",
    project5Client: "Funix",
    project5Role: "開発者",
    project5DescriptionLabel: "説明",
    project5DescriptionText:
      "「Pig Game」プロジェクトは、2人のプレイヤーが交互にサイコロを振り、合計得点を100以上にすることを目指すインタラクティブなゲームです。プレイヤーは現在の得点を保持するか、得点を増やすためにサイコロを振り続ける機会があります。1が出た場合、現在の得点はリセットされ、相手のターンになります。",
    project5TasksLabel: "タスク",
    project5Task:
      "- ゲームのユーザーフレンドリーなインターフェースを作成します。プレイヤーのターンと得点を管理するロジックをプログラムします。得点とゲームの結果に関するフィードバックを提供します。ゲームが完了した後に再スタートできることを確認します。",
    project5TechnologyLabel: "テクノロジー",
    project5Technology: "- HTML、CSS、Javascript",

    // Dự án 6
    project6Title: "デジタルバンキング",
    project6Year: "2024",
    project6Client: "Funix",
    project6Role: "開発者",
    project6DescriptionLabel: "説明",
    project6DescriptionText:
      "「デジタルバンキング」プロジェクトは、顧客が口座を管理し、出金や取引履歴の確認などの取引を実行できるオンラインバンキングシステムを模擬したソフトウェアアプリケーションです。ATM口座やローン口座など、さまざまな種類の口座をサポートし、ユーザーフレンドリーなインターフェースを提供し、金融取引の安全性を保証するためのセキュリティ機能を統合しています。",
    project6TasksLabel: "タスク",
    project6Task1:
      "- アカウント管理: ユーザーがATM口座やローン口座を作成および管理できるようにします。",
    project6Task2:
      "- 取引実行: アカウントからの出金をサポートし、取引履歴を記録します。",
    project6Task3:
      "- 取引レポート: 実行された取引の詳細情報を提供し、時間、金額、ステータスを含めます。",
    project6Task4:
      "- 有効性確認: 取引が最小および最大金額のルールに準拠していることを確認します。",
    project6TechnologyLabel: "テクノロジー",
    project6Technology: "- Java (IntelliJ IDEA)",

    // Footer
    footerFacebook: "フェイスブック",
    footerLinkedin: "リンクトイン",
    footerGithub: "ギットハブ",
  },

  en: {
    // Header
    bannerName: "Luong The Hoang",
    bannerJobTitle: "Full Stack Developer",
    navInformation: "Information",
    navResume: "Resume",
    navCertificate: "Certificate",
    navProject: "Projects",

    // Personal Information
    careerGoal: "Career Goal",
    careerGoalContent:
      "With a background in mechatronics and programming knowledge accumulated from related subjects like C/C++ programming and embedded systems, I aim to develop my career in IT, especially in FrontEnd and Java programming. I am currently studying IT online through FUNiX and gaining experience from personal projects, with the goal of applying this knowledge practically and becoming a professional programmer.",
    personalInfo: "Personal Information",
    gender: "Gender",
    genderValue: "Male",
    birthDate: "Date of Birth",
    birthDateValue: "10/25/1992",
    phone: "Phone",
    phoneValue: "(+81) 070-8598-1992",
    email: "Email",
    emailValue: "hoangbachkhoa@gmail.com",
    address: "Address",
    addressValue: "Choueiji, Higashiosaka, Osaka, Japan",
    website: "Website",
    websiteValue: "https://github.com/HoangFX20599",
    visaStatus: "Visa Status",
    visaStatusValue:
      "Technical / Humanities Knowledge / International Business",
    visaExpiry: "Visa Expiry Date",
    visaExpiryValue: "9/2028",
    bloodType: "Blood Type",
    bloodTypeValue: "O Rh+",
    maritalStatus: "Marital Status",
    maritalStatusValue: "Single",
    emailHelp:
      "Please enter your email to verify (Enter any valid email format to display detailed information).",
    warningMsg: "Please enter your email for verification",
    submitBtn: "Submit",

    // Experience
    experienceTitle: "Experience",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    kinkiPosition:
      "Production Engineering Staff - Kinki Kinzoku Corporation (Japan)",
    kinkiDuration: "09/2018 - Present",
    kinkiTask1:
      "- Implement process improvements and solve related technical issues.",
    kinkiTask2:
      "- Participate in maintenance and repair projects, manufacture JIG devices, ensuring stable operation performance.",
    kinkiTask3:
      "- Translate and interpret work documents, support interns during their work and study.",
    samsungPosition: "Leader - Samsung Electronics Vietnam Thai Nguyen",
    samsungDuration: "01/2016 - 06/2017",
    samsungTask1:
      "- Manage and supply components to the production line, ensuring smooth production processes.",
    samsungTask2:
      "- Lead the team in organizing and supplying necessary parts to meet production requirements.",
    samsungTask3:
      "- Responsible for monitoring and optimizing department performance, coordinating with other departments to resolve issues.",

    // Education
    educationTitle: "Education",
    funixTitle: "FUNiX",
    funixDuration: "12/2022 - Present",
    funixTask1: "- Build Website - FrontEnd.",
    funixTask2: "- Java Programming",
    bkTitle: "Engineer - Hanoi University of Science and Technology",
    bkDuration: "08/2010 - 03/2016",
    bkMajor: "- Major: Mechatronics",
    bkGPA: "- GPA: 3.34/4",
    bkClassification: "- Classification: Very Good",

    // Activity
    activityTitle: "Activities",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    volunteerTitle: "Volunteer at HONK - 東大阪日本語教室",
    volunteerDuration: "9/2018 - Present",
    volunteerTask1:
      "- Participate in volunteer activities to learn and exchange culture.",
    volunteerTask2:
      "- Engage in activities such as calligraphy, cooking, and cultural exchanges with classmates.",
    clubTitle: "FUNiX Club",
    clubDuration: "12/2022 - Present",
    clubTask:
      "- Discuss and exchange knowledge with other members to enhance programming skills.",

    // Hobby
    hobbyTitle: "Hobbies",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    hobbyMusic: "Music",
    hobbyTravel: "Travel",
    hobbyReading: "Reading",
    hobbyGenshin: "Genshin",

    // Language
    languageTitle: "Languages",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    englishSkill: "English - TOEIC 455",
    japaneseSkill: "Japanese - JLPT N2",

    // Skills
    skillsTitle: "Skills",
    viewMoreBtn: "View More",
    viewLessBtn: "View Less",
    itSkillsTitle: "IT Skills:",
    htmlSkill: "HTML/CSS: Intermediate",
    javascriptSkill: "JavaScript: Intermediate",
    javaSkill: "Java: Fundamental",
    bootstrapSkill: "Bootstrap: Fundamental",
    mechatronicsSkillsTitle: "Mechatronics Skills:",
    matlabSkill: "MATLAB: Intermediate",
    mapleSkill: "MAPLE: Intermediate",
    autocadSkill: "AUTOCAD: Intermediate",
    autolispSkill: "AUTOLISP: Fundamental",
    solidworksSkill: "SOLIDWORKS: Intermediate",
    catiaSkill: "CATIA: Intermediate",
    msOfficeSkill: "MS OFFICE: Intermediate",

    // Certificates and Achievements
    certificatesTitle: "Certificates - Awards",
    universityDegreeTitle:
      "UNIVERSITY DEGREE - HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    universityDegreeMajor: "- Major: Mechatronics",
    universityDegreeGPA: "- GPA: 3.34 - Very Good",
    webCertificateTitle: "WEB PROGRAMMING CERTIFICATE - FUNiX",
    webCertificateProgram: "- Certificate from the CCDN program",
    webCertificateGPA: "- GPA: 8.8",
    jlptCertificateTitle: "JAPANESE LANGUAGE CERTIFICATE - JLPT",
    jlptLevel: "- JLPT: N2",

    // Projects
    projectsTitle: "Projects",
    projectsDescription: "Click on each project to see details.",

    // Project 1
    project1Title: "Personal CV",
    project1Year: "2023",
    project1Client: "Funix",
    project1Role: "Developer",
    project1DescriptionLabel: "Description",
    project1DescriptionText:
      "The 'Personal CV' project aims to create a website introducing myself, listing skills, work experience, and career goals. This website serves not only as a tool to showcase personal abilities and achievements but also helps employers gain a clearer insight into candidates.",
    project1TasksLabel: "Tasks",
    project1Task1: "- Design a user-friendly interface.",
    project1Task2:
      "- Display personal information, skills, work experience, and projects.",
    project1Task3: "- Optimize the website for mobile devices.",
    project1Task4:
      "- Create links to other projects and online profiles (like LinkedIn, GitHub).",
    project1TechnologyLabel: "Technology",
    project1Technology: "- HTML, CSS, Javascript, Bootstrap",

    // Project 2
    project2Title: "CLOUD STORAGE WEBSITE - LORUKI",
    project2Year: "2023",
    project2Client: "Funix",
    project2Role: "Developer",
    project2DescriptionLabel: "Description",
    project2DescriptionText:
      "Build a responsive website using Media Query to optimize user experience.",
    project2TasksLabel: "Tasks",
    project2Task: "- Design interface - Develop code - Test and optimize.",
    project2TechnologyLabel: "Technology",
    project2Technology: "- HTML, CSS, Javascript",

    // Project 3
    project3Title: "Frontend Bootcamp Website",
    project3Year: "2023",
    project3Client: "Funix",
    project3Role: "Developer",
    project3DescriptionLabel: "Description",
    project3DescriptionText:
      "This project provides an online learning platform for frontend programming learners, with easy-to-understand documentation and exercises. Bootstrap is used to ensure responsive design.",
    project3TasksLabel: "Tasks",
    project3Task:
      "- Design and develop a user-friendly website. Provide documentation and practical exercises. Create quizzes and feedback sections to enhance the learning experience.",
    project3TechnologyLabel: "Technology",
    project3Technology:
      "- HTML, CSS, Javascript, Bootstrap to create a responsive layout",

    // Project 4
    project4Title: "Game Guess My Number",
    project4Year: "2023",
    project4Client: "Funix",
    project4Role: "Developer",
    project4DescriptionLabel: "Description",
    project4DescriptionText:
      'The "Guess My Number" game allows players to guess a secret number between 1 and 20. Players will input their guessed number and receive feedback on the accuracy of that guess.',
    project4TasksLabel: "Tasks",
    project4Task:
      "- Create an attractive user interface for the game. Provide accurate feedback for each player’s guess. Manage player scores and high scores. Integrate the restart game function.",
    project4TechnologyLabel: "Technology",
    project4Technology: "- HTML, CSS, Javascript",

    // Project 5
    project5Title: "Game Pig Game",
    project5Year: "2023",
    project5Client: "Funix",
    project5Role: "Developer",
    project5DescriptionLabel: "Description",
    project5DescriptionText:
      'The "Pig Game" project is an interactive game between two players, where they take turns rolling dice and trying to achieve a total score higher than 100. Players will have the chance to keep their current score or continue rolling the dice to increase their points. If they roll a 1, their current score will be reset and it will be the opponent’s turn.',
    project5TasksLabel: "Tasks",
    project5Task:
      "- Create a user interface for the game. Program logic to manage turns and calculate scores. Provide feedback on scores and game results. Ensure the game can restart after completion.",
    project5TechnologyLabel: "Technology",
    project5Technology: "- HTML, CSS, Javascript",

    // Project 6
    project6Title: "DIGITAL BANKING",
    project6Year: "2024",
    project6Client: "Funix",
    project6Role: "Developer",
    project6DescriptionLabel: "Description",
    project6DescriptionText:
      'The "Digital Banking" project is a software application that simulates an online banking system, allowing customers to manage accounts, perform transactions like withdrawals, and view transaction history. The system supports various account types such as ATM accounts and loan accounts, providing a user-friendly interface and integrating security features to ensure safety in financial transactions.',
    project6TasksLabel: "Tasks",
    project6Task1:
      "- Account management: Allow users to create and manage various types of accounts such as ATM accounts and loan accounts.",
    project6Task2:
      "- Perform transactions: Support withdrawals from accounts and record transaction history.",
    project6Task3:
      "- Transaction reporting: Provide detailed information about completed transactions, including time, amount, and status.",
    project6Task4:
      "- Validity check: Ensure that transactions comply with rules such as minimum and maximum allowable withdrawal amounts.",
    project6TechnologyLabel: "Technology",
    project6Technology: "- Java (IntelliJ IDEA)",

    // Footer
    footerFacebook: "Facebook",
    footerLinkedin: "Linkedin",
    footerGithub: "Github",
  },
};

// Hàm chuyển đổi ngôn ngữ
function setLanguage(language) {
  // Tìm tất cả các phần tử có thuộc tính data-translate
  document.querySelectorAll("[data-translate]").forEach(function (element) {
    // Lấy khóa từ thuộc tính data-translate
    const key = element.getAttribute("data-translate");
    // Cập nhật nội dung dựa trên ngôn ngữ được chọn
    element.innerText = languages[language][key];
  });

  // Lưu lựa chọn ngôn ngữ vào localStorage
  localStorage.setItem("selectedLanguage", language);
}

// Hàm khởi tạo ngôn ngữ
function initLanguage() {
  // Kiểm tra xem có ngôn ngữ đã được lưu trong localStorage không
  const savedLanguage = localStorage.getItem("selectedLanguage");

  // Nếu không có, sử dụng ngôn ngữ mặc định (tiếng Việt)
  const defaultLanguage = savedLanguage || "ja";
  setLanguage(defaultLanguage);
}

// Gọi hàm khởi tạo ngôn ngữ khi trang được tải
document.addEventListener("DOMContentLoaded", initLanguage);

// Thêm sự kiện cho các nút lựa chọn ngôn ngữ
document
  .getElementById("language-selector")
  .addEventListener("click", function (event) {
    const language = event.target.getAttribute("data-lang");
    if (language) {
      setLanguage(language);
    }
  });
