# 研習連結產生器

輸入 7 位數字的研習代碼，即可產生全國教師在職進修資訊網的直達連結。支援開啟研習頁面、複製網址，以及手機與電腦版面。

## 使用方式

輸入 `5758673`，產生：

https://www5.inservice.edu.tw/NAPP/CourseView.aspx?cid=5758673

## GitHub Pages

純靜態 HTML、CSS 與 JavaScript，無需安裝套件或建置。在儲存庫的 Settings → Pages，選擇 Deploy from a branch，來源設定為 `main` 和 `/ (root)`，即可發布。

也可以直接開啟 `index.html` 使用。瀏覽器若限制剪貼簿存取，工具會選取網址供手動複製。

本工具僅組合網址，不查詢研習是否存在；研習內容以官方頁面為準。
