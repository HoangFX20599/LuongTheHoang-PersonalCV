"use strict";
// Đối tượng chứa dữ liệu ngôn ngữ
const languages = {
  vi: {
    // Project 1
    // Goals
    project1_goals_heading: "Mục tiêu",
    project1_goal1_title: "Mục tiêu 1",
    project1_goal1_text:
      "Tạo ra một trang web CV cá nhân hoàn chỉnh, dễ đọc và chuyên nghiệp.",
    project1_goal2_title: "Mục tiêu 2",
    project1_goal2_text:
      "Cung cấp một cái nhìn tổng quát về bản thân, kỹ năng và kinh nghiệm làm việc.",
    project1_goal3_title: "Mục tiêu 3",
    project1_goal3_text:
      "Tăng cường khả năng tuyển dụng bằng cách tạo ấn tượng tích cực với nhà tuyển dụng.",
    // Scopes
    project1_scopes_heading: "Phạm vi",
    project1_scope_in_title: "IN",
    project1_scope_in_text:
      "Cung cấp cái nhìn tổng quát về bản thân, kỹ năng và những gì đã đạt được; xác định những gì cần cải thiện trong tương lai.",
    project1_scope_out_title: "OUT",
    project1_scope_out_text:
      "Trình bày CV cho nhà tuyển dụng, thu hút sự chú ý của họ và tạo cơ hội phỏng vấn.",
    // Team
    project1_team_heading: "Đội ngũ",
    project1_team_member01_title: "Thành viên 01",
    project1_team_member01_text: "Tên: Lương Thế Hoàng",
    // Primary
    project1_primary_heading: "Chính",
    project1_primary_item01_text:
      "Thiết Kế Giao Diện Thân Thiện Và Dễ Đọc: Một trang web CV cá nhân cần có giao diện thân thiện, dễ đọc và dễ điều hướng.",
    project1_primary_item02_text:
      "Đảm bảo nội dung trang web đầy đủ, chính xác và cập nhật.",
    // Timeline
    project1_timeline_heading: "Lịch trình",
    project1_timeline_item01_title: "Khởi động dự án",
    project1_timeline_item01_date: "7/2/2024",
    project1_timeline_item02_title:
      "Bắt đầu thu thập thông tin và lập kế hoạch cho nội dung",
    project1_timeline_item02_date: "10/3/2024",
    project1_timeline_item03_title:
      "Hoàn thiện thiết kế giao diện và bắt đầu lập trình",
    project1_timeline_item03_date: "11/3/2024",
    project1_timeline_item04_title:
      "Tối ưu hóa trang web và kiểm tra trên các thiết bị khác nhau",
    project1_timeline_item04_date: "13/3/2024",
    project1_timeline_item05_title: "Hoàn tất và triển khai trang web.",
    project1_timeline_item05_date: "15/3/2024",
    project1_timeline_item06_title: "Cập nhật thông tin liên tục",
    project1_timeline_item06_date: "-Hiện nay",
    project1_timeline_item07_title: "Link dự án",

    // Project 2
    // Goals
    project2_goals_heading: "Mục tiêu",
    project2_goal1_title: "Mục tiêu 1",
    project2_goal1_text:
      "Tạo ra một sản phẩm chất lượng: Mục tiêu chính là phát triển một ứng dụng hoặc website đáp ứng nhu cầu thực tế của người dùng.",
    project2_goal2_title: "Mục tiêu 2",
    project2_goal2_text:
      "Nâng cao kỹ năng cá nhân: Thông qua dự án, tôi muốn củng cố kiến thức về lập trình, thiết kế giao diện người dùng (UI/UX) và quản lý dự án.",
    project2_goal3_title: "Mục tiêu 3",
    project2_goal3_text:
      "Thể hiện khả năng giải quyết vấn đề: Phát triển các giải pháp sáng tạo cho những thách thức trong quá trình phát triển.",
    // Scopes
    project2_scopes_heading: "Phạm vi",
    project2_scope_in_title: "IN",
    project2_scope_in_text: "Bài tập trong học phần môn học.",
    project2_scope_out_title: "OUT",
    project2_scope_out_text: "Làm xong bài sẽ nộp cho giáo viên.",
    // Team
    project2_team_heading: "Đội Ngũ",
    project2_team_member1_title: "Thành viên 01",
    project2_team_member1_name: "Tên: Lương Thế Hoàng",
    // Primary
    project2_primary_heading: "Chính",
    project2_primary_item1_icon: "Biểu tượng câu hỏi",
    project2_primary_item1_text:
      "Chức năng đăng nhập: Phát triển trước để đảm bảo an ninh và quản lý người dùng hiệu quả.",
    project2_primary_item2_text:
      "Giao diện người dùng: Thiết kế UI/UX trực quan và dễ sử dụng để nâng cao trải nghiệm người dùng.",
    // Timeline
    project2_timeline_heading: "Dòng thời gian",
    project2_timeline_item1_title: "Khởi động dự án",
    project2_timeline_item1_date: "19/4/2023",
    project2_timeline_item2_title: "Hoàn thành phân tích yêu cầu",
    project2_timeline_item2_date: "19/4/2023",
    project2_timeline_item3_title: "Thiết kế giao diện",
    project2_timeline_item3_date: "21/4/2023",
    project2_timeline_item4_title: "Hoàn thành phát triển chức năng chính",
    project2_timeline_item4_date: "22/4/2023",
    project2_timeline_item5_title: "Thử nghiệm và sửa lỗi",
    project2_timeline_item5_date: "23/4/2023",
    project2_timeline_item6_title: "Triển khai sản phẩm cuối cùng",
    project2_timeline_item6_date: "23/4/2023",
    project2_timeline_item7_title: "Up to Github",

    // Project 3
    // Goal
    project3_goals_heading: "Mục tiêu",
    project3_goals_item1_title: "Mục tiêu 1",
    project3_goals_item1_text:
      "Tạo ra một nền tảng học tập trực tuyến cho người học lập trình frontend.",
    project3_goals_item2_title: "Mục tiêu 2",
    project3_goals_item2_text:
      "Cung cấp tài liệu và bài tập thực hành phong phú để hỗ trợ quá trình học tập.",
    // Scope
    project3_scopes_heading: "Phạm vi",
    project3_scopes_in_title: "IN",
    project3_scopes_in_text: "Bài tập trong học phần môn học WEB",
    project3_scopes_out_title: "OUT",
    project3_scopes_out_text:
      "Làm xong cái bài Assi này sẽ nộp lại cho bên trường - FUNiX để chấm và đánh giá tổng quan.",
    // Team
    project3_team_heading: "Đội ngũ",
    project3_team_member1_title: "Thành viên 01",
    project3_team_member1_name: "Tên: Lương Thế Hoàng",
    // primary
    project3_primary_heading: "Nội dung chính",
    project3_primary_item1:
      "Ưu tiên phát triển nội dung học tập trước khi hoàn thiện giao diện người dùng.",
    project3_primary_item2:
      "Đảm bảo các tính năng cơ bản như quiz và feedback hoạt động ổn định trước khi triển khai các chức năng nâng cao.",

    //Timeline
    project3_timeline_heading: "Thời gian",
    project3_timeline_item1: "Khởi động dự án",
    project3_timeline_date1: "8/5/2023",
    project3_timeline_item2: "Hoàn thành thiết kế",
    project3_timeline_date2: "8/5/2023",
    project3_timeline_item3: "Bắt đầu lập trình",
    project3_timeline_date3: "9/5/2023",
    project3_timeline_item4: "Hoàn tất và triển khai",
    project3_timeline_date4: "9/5/2023",
    project3_timeline_item5: "Up to Github",

    // Project 4
    // Goal
    project4_goals_heading: "Mục tiêu",
    project4_goals_item1: "Mục tiêu 1",
    project4_goals_text1:
      "Tạo ra một trò chơi tương tác đơn giản nhưng thú vị giúp người chơi rèn luyện khả năng phán đoán.",
    project4_goals_item2: "Mục tiêu 2",
    project4_goals_text2:
      "Cung cấp trải nghiệm người dùng mượt mà và trực quan.",
    // Scope
    project4_goals_heading: "Mục tiêu",
    project4_goals_item1: "Mục tiêu 1",
    project4_goals_text1:
      "Tạo ra một trò chơi tương tác đơn giản nhưng thú vị giúp người chơi rèn luyện khả năng phán đoán.",
    project4_goals_item2: "Mục tiêu 2",
    project4_goals_text2:
      "Cung cấp trải nghiệm người dùng mượt mà và trực quan.",
    project4_scopes_heading: "Phạm vi",
    project4_scopes_in: "IN",
    project4_scopes_text_in: "Bài tập học phần môn học.",
    project4_scopes_out: "OUT",
    project4_scopes_text_out: "Hoàn thành và nộp cho giáo viên.",
    // Team
    project4_team_heading: "Đội ngũ",
    project4_team_member1: "Thành viên 01",
    project4_team_name_member1: "Tên: Lương Thế Hoàng",
    // primary
    project4_primary_heading: "Ưu tiên",
    project4_primary_text1:
      "Ưu tiên hoàn thành giao diện và logic chính của trò chơi trước.",
    project4_primary_text2: "Tối ưu hóa trải nghiệm người dùng.",
    // Timeline
    project4_timeline_heading: "Thời gian",
    project4_timeline_start_title: "Khởi động dự án",
    project4_timeline_start_date: "2/7/2023",
    project4_timeline_design_title: "Hoàn thành thiết kế giao diện",
    project4_timeline_design_date: "2/7/2023",
    project4_timeline_logic_title: "Hoàn thành lập trình logic",
    project4_timeline_logic_date: "5/7/2023",
    project4_timeline_github_title: "Hoàn tất Up to Github",

    // Project 5
    // Goal
    project5_goals_heading: "Mục tiêu",
    project5_goals_item1: "Mục tiêu 1",
    project5_goals_text1:
      "Tạo ra một trò chơi gieo xúc xắc hấp dẫn và dễ chơi.",
    project5_goals_item2: "Mục tiêu 2",
    project5_goals_text2:
      "Cung cấp trải nghiệm người dùng thú vị và tương tác giữa hai người chơi.",
    // Scope
    project5_scopes_heading: "Phạm vi",
    project5_scopes_in: "IN",
    project5_scopes_text_in: "Bài tập học phần môn học.",
    project5_scopes_out: "OUT",
    project5_scopes_text_out: "Hoàn thành và nộp cho giáo viên.",
    // Team
    project5_team_heading: "Nhóm",
    project5_team_member01_title: "Thành viên 01",
    project5_team_member01_text: "Tên: Lương Thế Hoàng",
    // primary
    project5_primary_heading: "Ưu tiên",
    project5_primary_item01_text:
      "Ưu tiên hoàn thành logic chơi trò chơi và giao diện người dùng.",
    project5_primary_item02_text:
      "Đảm bảo các chức năng cơ bản hoạt động ổn định, bao gồm việc gieo xúc xắc và giữ điểm.",
    // Timeline
    project5_timeline_heading: "Thời gian thực hiện",
    project5_timeline_item01_title: "Bắt đầu dự án",
    project5_timeline_item01_date: "5/8/2023",
    project5_timeline_item02_title: "Hoàn thành thiết kế giao diện",
    project5_timeline_item02_date: "6/8/2023",
    project5_timeline_item03_title: "Hoàn thành lập trình logic",
    project5_timeline_item03_date: "10/8/2023",
    project5_timeline_item04_title: "Hoàn thành Up to GitHub",

    // Project 6
    // Goal
    project6_goals_heading: "Mục tiêu",
    project6_goals_item01_title: "Mục tiêu 1",
    project6_goals_item01_text:
      "Cung cấp một ứng dụng ngân hàng số thân thiện và dễ sử dụng.",
    project6_goals_item02_title: "Mục tiêu 2",
    project6_goals_item02_text:
      "Đảm bảo các giao dịch được thực hiện an toàn và hiệu quả.",
    project6_goals_item03_title: "Mục tiêu 3",
    project6_goals_item03_text:
      "Phát triển hệ thống có khả năng mở rộng để hỗ trợ thêm các tính năng trong tương lai.",
    // Scope
    project6_scopes_heading: "Phạm vi",
    project6_scopes_in_title: "IN",
    project6_scopes_in_text: "Bài tập học phần môn học.",
    project6_scopes_out_title: "OUT",
    project6_scopes_out_text: "Hoàn thành và nộp cho giáo viên.",
    // Team
    project6_team_heading: "Nhóm",
    project6_team_member01_title: "Thành viên 01",
    project6_team_member01_name: "Tên: Lương Thế Hoàng",
    // Primary
    project6_primary_heading: "Ưu tiên",
    project6_primary_task1:
      "Tập trung vào việc hoàn thành chức năng tạo và quản lý tài khoản trước.",
    project6_primary_task2:
      "Phát triển chức năng rút tiền và ghi lại lịch sử giao dịch như là ưu tiên tiếp theo.",
    // Timeline
    project6_timeline_heading: "Thời gian biểu",
    project6_timeline_start_title: "Khởi động dự án",
    project6_timeline_start_date: "10/4/2024",
    project6_timeline_account_complete_title:
      "Hoàn thành phát triển chức năng tài khoản",
    project6_timeline_account_complete_date: "21/4/2024",
    project6_timeline_transaction_complete_title:
      "Hoàn thành chức năng giao dịch",
    project6_timeline_transaction_complete_date: "10/5/2024",
    project6_timeline_testing_title: "Kiểm thử và sửa lỗi",
    project6_timeline_testing_date: "15/5/2024",
    project6_timeline_github_title: "Hoàn thành giai đoạn đầu Up to GitHub",
    project6_timeline_github_date: "Xem tại liên kết:",
    project6_timeline_development_title: "Tiếp tục phát triển phần mềm",
    project6_timeline_development_date: "- Hiện nay",
  },

  ja: {
    // Project 1
    // Goals
    project1_goals_heading: "目標",
    project1_goal1_title: "目標 1",
    project1_goal1_text:
      "完全で読みやすく、プロフェッショナルな個人CVウェブサイトを作成します。",
    project1_goal2_title: "目標 2",
    project1_goal2_text: "自分自身、スキル、仕事経験の概要を提供します。",
    project1_goal3_title: "目標 3",
    project1_goal3_text:
      "雇用者に良い印象を与えることで、雇用機会を増やします。",
    // Scopes
    project1_scopes_heading: "範囲",
    project1_scope_in_title: "IN",
    project1_scope_in_text:
      "自分自身、スキル、達成したことの概要を提供し、今後の改善が必要な点を特定します。",
    project1_scope_out_title: "OUT",
    project1_scope_out_text:
      "雇用者にCVを提示し、彼らの注意を引き、面接の機会を生み出します。",
    // Team
    project1_team_heading: "チーム",
    project1_team_member01_title: "メンバー 01",
    project1_team_member01_text: "名前: ルオン・テェ・ホアン",
    // Primary
    project1_primary_heading: "プライマリー",
    project1_primary_item01_text:
      "ユーザーフレンドリーで読みやすいデザイン: 個人のCVウェブサイトは、使いやすく、読みやすく、ナビゲートしやすいインターフェースを持っている必要があります。",
    project1_primary_item02_text:
      "ウェブサイトの内容が完全で、正確で、最新であることを確認します。",
    // Timeline
    project1_timeline_heading: "タイムライン",
    project1_timeline_item01_title: "プロジェクトの開始",
    project1_timeline_item01_date: "7/2/2024",
    project1_timeline_item02_title:
      "情報を収集し、コンテンツの計画を開始します。",
    project1_timeline_item02_date: "10/3/2024",
    project1_timeline_item03_title:
      "インターフェースデザインを完成させ、プログラミングを開始します。",
    project1_timeline_item03_date: "11/3/2024",
    project1_timeline_item04_title:
      "ウェブサイトを最適化し、さまざまなデバイスでテストします。",
    project1_timeline_item04_date: "13/3/2024",
    project1_timeline_item05_title: "ウェブサイトを完成させ、展開します。",
    project1_timeline_item05_date: "15/3/2024",
    project1_timeline_item06_title: "情報を継続的に更新します。",
    project1_timeline_item06_date: "-現在",
    project1_timeline_item07_title: "プロジェクトのリンク",

    // Project 2
    // Goals
    project2_goals_heading: "目標",
    project2_goal1_title: "目標 1",
    project2_goal1_text:
      "質の高い製品を作成することです: 主な目標は、ユーザーの実際のニーズを満たすアプリケーションまたはウェブサイトを開発することです。",
    project2_goal2_title: "目標 2",
    project2_goal2_text:
      "個人的なスキルを向上させることです: プロジェクトを通じて、プログラミング、UI/UXデザイン、プロジェクト管理に関する知識を強化したいと思います。",
    project2_goal3_title: "目標 3",
    project2_goal3_text:
      "問題解決能力を示す: 開発過程での課題に対して創造的な解決策を開発することです。",
    // Scopes
    project2_scopes_heading: "範囲",
    project2_scope_in_title: "IN",
    project2_scope_in_text: "授業の課題。",
    project2_scope_out_title: "OUT",
    project2_scope_out_text: "課題が完了したら、教師に提出します。",
    // Team
    project2_team_heading: "チーム",
    project2_team_member1_title: "メンバー 01",
    project2_team_member1_name: "名前: ルオン・テェ・ホアン",
    // Primary
    project2_primary_heading: "プライマリ",
    project2_primary_item1_icon: "質問アイコン",
    project2_primary_item1_text:
      "ログイン機能: セキュリティとユーザー管理を効果的に行うために、最初に開発します。",
    project2_primary_item2_text:
      "ユーザーインターフェース: ユーザーエクスペリエンスを向上させるために、視覚的で使いやすいUI/UXを設計します。",
    // Timeline
    project2_timeline_heading: "タイムライン",
    project2_timeline_item1_title: "プロジェクト開始",
    project2_timeline_item1_date: "2023年4月19日",
    project2_timeline_item2_title: "要件分析の完了",
    project2_timeline_item2_date: "2023年4月19日",
    project2_timeline_item3_title: "インターフェースデザイン",
    project2_timeline_item3_date: "2023年4月21日",
    project2_timeline_item4_title: "主要機能の開発完了",
    project2_timeline_item4_date: "2023年4月22日",
    project2_timeline_item5_title: "テストとデバッグ",
    project2_timeline_item5_date: "2023年4月23日",
    project2_timeline_item6_title: "最終製品の展開",
    project2_timeline_item6_date: "2023年4月23日",
    project2_timeline_item7_title: "Githubにアップロード",

    // Project 3
    // Goal
    project3_goals_heading: "目標",
    project3_goals_item1_title: "目標1",
    project3_goals_item1_text:
      "フロントエンドプログラミングを学ぶためのオンライン学習プラットフォームを作成します。",
    project3_goals_item2_title: "目標2",
    project3_goals_item2_text:
      "学習プロセスをサポートするために、豊富な教材と実践的な演習を提供します。",
    // Scope
    project3_scopes_heading: "範囲",
    project3_scopes_in_title: "IN",
    project3_scopes_in_text: "WEB科目の課題",
    project3_scopes_out_title: "OUT",
    project3_scopes_out_text:
      "このAssiを完成させたら、FUNiXに提出して評価してもらいます。",
    // Team
    project3_team_heading: "チーム",
    project3_team_member1_title: "メンバー 01",
    project3_team_member1_name: "名前: ルオン・テェ・ホアン",
    //Primary
    project3_primary_heading: "プライマリー",
    project3_primary_item1:
      "ユーザーインターフェイスを完成させる前に、学習コンテンツの開発を優先します。",
    project3_primary_item2:
      "クイズやフィードバックなどの基本機能が安定して動作することを確認し、その後、進んだ機能を展開します。",

    //Timeline
    project3_timeline_heading: "タイムライン",
    project3_timeline_item1: "プロジェクト開始",
    project3_timeline_date1: "2023/5/8",
    project3_timeline_item2: "設計完了",
    project3_timeline_date2: "2023/5/8",
    project3_timeline_item3: "プログラミング開始",
    project3_timeline_date3: "2023/5/9",
    project3_timeline_item4: "完了とデプロイ",
    project3_timeline_date4: "2023/5/9",
    project3_timeline_item5: "GitHubにアップ",

    // Project 4
    // Goal
    project4_goals_heading: "目標",
    project4_goals_item1: "目標 1",
    project4_goals_text1:
      "シンプルで魅力的なインタラクティブなゲームを作成し、プレイヤーの推測能力を鍛えます。",
    project4_goals_item2: "目標 2",
    project4_goals_text2:
      "スムーズで直感的なユーザーエクスペリエンスを提供します。",
    // Scope
    project4_goals_heading: "目標",
    project4_goals_item1: "目標 1",
    project4_goals_text1:
      "シンプルで魅力的なインタラクティブなゲームを作成し、プレイヤーの推測能力を鍛えます。",
    project4_goals_item2: "目標 2",
    project4_goals_text2:
      "スムーズで直感的なユーザーエクスペリエンスを提供します。",
    project4_scopes_heading: "範囲",
    project4_scopes_in: "IN",
    project4_scopes_text_in: "学習科目の課題。",
    project4_scopes_out: "OUT",
    project4_scopes_text_out: "完成し、教師に提出します。",
    // Team
    project4_team_heading: "チーム",
    project4_team_member1: "メンバー 01",
    project4_team_name_member1: "名前: ルオン・テェ・ホアン",
    // Primary
    project4_primary_heading: "優先事項",
    project4_primary_text1:
      "ゲームのインターフェースとロジックを先に完成させることを優先します。",
    project4_primary_text2: "ユーザーエクスペリエンスを最適化します。",
    // Timeline
    project4_timeline_heading: "タイムライン",
    project4_timeline_start_title: "プロジェクト開始",
    project4_timeline_start_date: "2/7/2023",
    project4_timeline_design_title: "デザインの完成",
    project4_timeline_design_date: "2/7/2023",
    project4_timeline_logic_title: "ロジックの完成",
    project4_timeline_logic_date: "5/7/2023",
    project4_timeline_github_title: "Githubへのアップロード完了",

    // Project 5
    // Goal
    project5_goals_heading: "目標",
    project5_goals_item1: "目標 1",
    project5_goals_text1: "魅力的で簡単に遊べるサイコロゲームを作成します。",
    project5_goals_item2: "目標 2",
    project5_goals_text2:
      "2人のプレイヤー間の面白くてインタラクティブなユーザーエクスペリエンスを提供します。",
    // Scope
    project5_scopes_heading: "スコープ",
    project5_scopes_in: "IN",
    project5_scopes_text_in: "科目の課題。",
    project5_scopes_out: "OUT",
    project5_scopes_text_out: "完成させて教師に提出します。",
    // Team
    project5_team_heading: "チーム",
    project5_team_member01_title: "メンバー01",
    project5_team_member01_text: "名前: ルオン・テェ・ホアン",
    // primary
    project5_primary_heading: "プライマリー",
    project5_primary_item01_text:
      "ゲームのロジックとユーザーインターフェースを完成させることを優先します。",
    project5_primary_item02_text:
      "サイコロを振ることやスコアを保持することを含む基本機能が安定して動作することを確認します。",
    // Timeline
    project5_timeline_heading: "タイムライン",
    project5_timeline_item01_title: "プロジェクト開始",
    project5_timeline_item01_date: "2023年8月5日",
    project5_timeline_item02_title: "インターフェースデザインの完成",
    project5_timeline_item02_date: "2023年8月6日",
    project5_timeline_item03_title: "ロジックプログラミングの完成",
    project5_timeline_item03_date: "2023年8月10日",
    project5_timeline_item04_title: "GitHubへのアップロードの完成",

    // Project 6
    // Goal
    project6_goals_heading: "目標",
    project6_goals_item01_title: "目標 1",
    project6_goals_item01_text:
      "使いやすいデジタルバンキングアプリを提供します。",
    project6_goals_item02_title: "目標 2",
    project6_goals_item02_text: "安全で効率的な取引を保証します。",
    project6_goals_item03_title: "目標 3",
    project6_goals_item03_text:
      "将来の機能拡張をサポートする拡張可能なシステムを開発します。",
    // Scope
    project6_scopes_heading: "スコープ",
    project6_scopes_in_title: "IN",
    project6_scopes_in_text: "科目の課題。",
    project6_scopes_out_title: "OUT",
    project6_scopes_out_text: "教師に提出して完了します。",
    // Team
    project6_team_heading: "チーム",
    project6_team_member01_title: "メンバー01",
    project6_team_member01_name: "名前: ルオン・テェ・ホアン",
    // Primary
    project6_primary_heading: "プライマリ",
    project6_primary_task1:
      "アカウントの作成と管理機能を最初に完成させることに集中します。",
    project6_primary_task2:
      "次の優先事項として、出金機能を開発し、取引履歴を記録します。",
    // Timeline
    project6_timeline_heading: "タイムライン",
    project6_timeline_start_title: "プロジェクトの開始",
    project6_timeline_start_date: "2024年4月10日",
    project6_timeline_account_complete_title:
      "アカウント機能の開発を完了します。",
    project6_timeline_account_complete_date: "2024年4月21日",
    project6_timeline_transaction_complete_title: "取引機能の完成",
    project6_timeline_transaction_complete_date: "2024年5月10日",
    project6_timeline_testing_title: "テストとバグ修正",
    project6_timeline_testing_date: "2024年5月15日",
    project6_timeline_github_title: "GitHubへの初期段階のアップロード完了",
    project6_timeline_github_date: "リンク先:",
    project6_timeline_development_title: "ソフトウェアのさらなる開発",
    project6_timeline_development_date: "- 現在",
  },

  en: {
    // Project 1
    // Goals
    project1_goals_heading: "Goals",
    project1_goal1_title: "Goal 1",
    project1_goal1_text:
      "Create a complete, easy-to-read, and professional personal CV website.",
    project1_goal2_title: "Goal 2",
    project1_goal2_text:
      "Provide an overview of myself, skills, and work experience.",
    project1_goal3_title: "Goal 3",
    project1_goal3_text:
      "Enhance employability by making a positive impression on recruiters.",

    // Scopes
    project1_scopes_heading: "Scopes",
    project1_scope_in_title: "IN",
    project1_scope_in_text:
      "Provide an overview of myself, skills, and achievements; identify areas for improvement in the future.",
    project1_scope_out_title: "OUT",
    project1_scope_out_text:
      "Present the CV to recruiters, grab their attention, and create interview opportunities.",

    // Team
    project1_team_heading: "Team",
    project1_team_member01_title: "Member 01",
    project1_team_member01_text: "Name: Luong The Hoang",

    // Primary
    project1_primary_heading: "Primary",
    project1_primary_item01_text:
      "User-Friendly and Readable Interface: A personal CV website needs a friendly, easy-to-read, and easy-to-navigate interface.",
    project1_primary_item02_text:
      "Ensure that the website content is comprehensive, accurate, and up-to-date.",

    // Timeline
    project1_timeline_heading: "Timeline",
    project1_timeline_item01_title: "Project Start",
    project1_timeline_item01_date: "2/7/2024",
    project1_timeline_item02_title:
      "Start collecting information and planning content",
    project1_timeline_item02_date: "3/10/2024",
    project1_timeline_item03_title: "Finalize design and begin programming",
    project1_timeline_item03_date: "3/11/2024",
    project1_timeline_item04_title:
      "Optimize website and test on various devices",
    project1_timeline_item04_date: "3/13/2024",
    project1_timeline_item05_title: "Complete and deploy the website.",
    project1_timeline_item05_date: "3/15/2024",
    project1_timeline_item06_title: "Continuous updates",
    project1_timeline_item06_date: "- Now",
    project1_timeline_item07_title: "Project link",

    // Project 2
    // Goals
    project2_goals_heading: "Goals",
    project2_goal1_title: "Goal 1",
    project2_goal1_text:
      "Create a quality product: The main goal is to develop an application or website that meets the real needs of users.",
    project2_goal2_title: "Goal 2",
    project2_goal2_text:
      "Enhance personal skills: Through the project, I want to reinforce my knowledge of programming, UI/UX design, and project management.",
    project2_goal3_title: "Goal 3",
    project2_goal3_text:
      "Demonstrate problem-solving abilities: Develop innovative solutions for challenges encountered during development.",

    // Scopes
    project2_scopes_heading: "Scopes",
    project2_scope_in_title: "IN",
    project2_scope_in_text: "Exercises in course subjects.",
    project2_scope_out_title: "OUT",
    project2_scope_out_text: "Once completed, submit to the teacher.",

    // Team
    project2_team_heading: "Team",
    project2_team_member1_title: "Member 01",
    project2_team_member1_name: "Name: Luong The Hoang",

    // Primary
    project2_primary_heading: "Primary",
    project2_primary_item1_icon: "Question mark icon",
    project2_primary_item1_text:
      "Login function: Develop first to ensure security and efficient user management.",
    project2_primary_item2_text:
      "User interface: Design an intuitive and user-friendly UI/UX to enhance user experience.",

    // Timeline
    project2_timeline_heading: "Timeline",
    project2_timeline_item1_title: "Project Start",
    project2_timeline_item1_date: "4/19/2023",
    project2_timeline_item2_title: "Complete requirements analysis",
    project2_timeline_item2_date: "4/19/2023",
    project2_timeline_item3_title: "Design interface",
    project2_timeline_item3_date: "4/21/2023",
    project2_timeline_item4_title: "Complete development of main functions",
    project2_timeline_item4_date: "4/22/2023",
    project2_timeline_item5_title: "Testing and bug fixing",
    project2_timeline_item5_date: "4/23/2023",
    project2_timeline_item6_title: "Deploy final product",
    project2_timeline_item6_date: "4/23/2023",
    project2_timeline_item7_title: "Up to Github",

    // Project 3
    // Goals
    project3_goals_heading: "Goals",
    project3_goals_item1_title: "Goal 1",
    project3_goals_item1_text:
      "Create an online learning platform for frontend programming learners.",
    project3_goals_item2_title: "Goal 2",
    project3_goals_item2_text:
      "Provide rich materials and practical exercises to support the learning process.",

    // Scopes
    project3_scopes_heading: "Scopes",
    project3_scopes_in_title: "IN",
    project3_scopes_in_text: "Exercises in WEB course subjects.",
    project3_scopes_out_title: "OUT",
    project3_scopes_out_text:
      "Once completed, this assignment will be submitted to FUNiX for evaluation and review.",

    // Team
    project3_team_heading: "Team",
    project3_team_member1_title: "Member 01",
    project3_team_member1_name: "Name: Luong The Hoang",

    // Primary
    project3_primary_heading: "Main Content",
    project3_primary_item1:
      "Prioritize developing learning content before finalizing the user interface.",
    project3_primary_item2:
      "Ensure basic features such as quizzes and feedback work stably before deploying advanced functions.",

    // Timeline
    project3_timeline_heading: "Timeline",
    project3_timeline_item1: "Project Start",
    project3_timeline_date1: "5/8/2023",
    project3_timeline_item2: "Complete design",
    project3_timeline_date2: "5/8/2023",
    project3_timeline_item3: "Start programming",
    project3_timeline_date3: "5/9/2023",
    project3_timeline_item4: "Complete and deploy",
    project3_timeline_date4: "5/9/2023",
    project3_timeline_item5: "Up to Github",

    // Project 4
    // Goals
    project4_goals_heading: "Goals",
    project4_goals_item1: "Goal 1",
    project4_goals_text1:
      "Create a simple yet engaging interactive game to help players develop their guessing skills.",
    project4_goals_item2: "Goal 2",
    project4_goals_text2: "Provide a smooth and intuitive user experience.",

    // Scopes
    project4_scopes_heading: "Scopes",
    project4_scopes_in: "IN",
    project4_scopes_text_in: "Exercises in course subjects.",
    project4_scopes_out: "OUT",
    project4_scopes_text_out: "Complete and submit to the teacher.",

    // Team
    project4_team_heading: "Team",
    project4_team_member1: "Member 01",
    project4_team_name_member1: "Name: Luong The Hoang",

    // Primary
    project4_primary_heading: "Priority",
    project4_primary_text1:
      "Prioritize completing the interface and main logic of the game first.",
    project4_primary_text2: "Optimize the user experience.",

    // Timeline
    project4_timeline_heading: "Timeline",
    project4_timeline_start_title: "Project Start",
    project4_timeline_start_date: "7/2/2023",
    project4_timeline_design_title: "Complete interface design",
    project4_timeline_design_date: "7/2/2023",
    project4_timeline_logic_title: "Complete programming logic",
    project4_timeline_logic_date: "7/5/2023",
    project4_timeline_github_title: "Complete Up to Github",

    // Project 5
    // Goals
    project5_goals_heading: "Goals",
    project5_goals_item1: "Goal 1",
    project5_goals_text1:
      "Create an engaging and easy-to-play dice-rolling game.",
    project5_goals_item2: "Goal 2",
    project5_goals_text2:
      "Provide an enjoyable user experience and interaction between two players.",

    // Scopes
    project5_scopes_heading: "Scopes",
    project5_scopes_in: "IN",
    project5_scopes_text_in: "Exercises in course subjects.",
    project5_scopes_out: "OUT",
    project5_scopes_text_out: "Complete and submit to the teacher.",

    // Team
    project5_team_heading: "Team",
    project5_team_member01_title: "Member 01",
    project5_team_member01_text: "Name: Luong The Hoang",

    // Primary
    project5_primary_heading: "Priority",
    project5_primary_item01_text:
      "Prioritize completing the game logic and user interface.",
    project5_primary_item02_text:
      "Ensure the basic functions work stably, including rolling the dice and keeping score.",

    // Timeline
    project5_timeline_heading: "Timeline",
    project5_timeline_item01_title: "Project Start",
    project5_timeline_item01_date: "8/5/2023",
    project5_timeline_item02_title: "Complete interface design",
    project5_timeline_item02_date: "8/6/2023",
    project5_timeline_item03_title: "Complete programming logic",
    project5_timeline_item03_date: "8/10/2023",
    project5_timeline_item04_title: "Complete Up to GitHub",

    // Project 6
    // Goals
    project6_goals_heading: "Goals",
    project6_goals_item01_title: "Goal 1",
    project6_goals_item01_text:
      "Provide a user-friendly and easy-to-use digital banking application.",
    project6_goals_item02_title: "Goal 2",
    project6_goals_item02_text:
      "Ensure transactions are performed securely and efficiently.",
    project6_goals_item03_title: "Goal 3",
    project6_goals_item03_text:
      "Develop a scalable system to support additional features in the future.",

    // Scopes
    project6_scopes_heading: "Scopes",
    project6_scopes_in_title: "IN",
    project6_scopes_in_text: "Exercises in course subjects.",
    project6_scopes_out_title: "OUT",
    project6_scopes_out_text: "Complete and submit to the teacher.",

    // Team
    project6_team_heading: "Team",
    project6_team_member01_title: "Member 01",
    project6_team_member01_name: "Name: Luong The Hoang",

    // Primary
    project6_primary_heading: "Priority",
    project6_primary_task1:
      "Focus on completing account creation and management functionality first.",
    project6_primary_task2:
      "Develop withdrawal functionality and transaction history recording as the next priority.",

    // Timeline
    project6_timeline_heading: "Timeline",
    project6_timeline_start_title: "Project Kickoff",
    project6_timeline_start_date: "4/10/2024",
    project6_timeline_account_complete_title:
      "Complete account functionality development",
    project6_timeline_account_complete_date: "4/21/2024",
    project6_timeline_transaction_complete_title:
      "Complete transaction functionality",
    project6_timeline_transaction_complete_date: "5/10/2024",
    project6_timeline_testing_title: "Testing and bug fixing",
    project6_timeline_testing_date: "5/15/2024",
    project6_timeline_github_title: "Complete initial stage Up to GitHub",
    project6_timeline_github_date: "See at link:",
    project6_timeline_development_title: "Continue software development",
    project6_timeline_development_date: "- Present",
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
