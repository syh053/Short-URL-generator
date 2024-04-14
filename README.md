# 短網址產生器
這是使用 express 框架和 express-handlebars 打造的短網址產生器

## 產品功能 :
+ 輸入原始網址並送出表單之後，畫面會回傳格式化後的短網址。
+ 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入你提供的短網址，瀏覽器就會導向原本的網站。


## 規格 :
+ 程式邏輯需包括以下「例外處理」，請使用註解標註出相關段落：
  - 輸入相同網址時，產生一樣的縮址。
  -使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者
+ 使用者可以按 Copy 來複製縮短後的網址

## 如何使用本專案

1. 開啟終端機，Clone 此專案至本機電腦

```
git clone https://github.com/syh053/restaurants.git
```
___

2. 使用 npm 安裝 express 與 express-handlebars 套件

```
npm install express
```

```
npm install express-handlebars
```
___

3. 安裝 nodemon 套件(全局安裝)

```
npm install -g nodemon
```
___

4. 設置 package.json 檔案

![image](https://github.com/syh053/Short-URL-generator/blob/main/photo/setting%20package.png)

___

5. 啟動方式

 ```
npm run dev
```
