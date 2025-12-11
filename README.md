
# 📒 MERN Notes App — Narla’s Code Not Defteri ✩

Bu proje, kullanıcıların hızlıca not ekleyip, listeleyip, güncelleyip ve silebildiği tam bir MERN Stack CRUD uygulamasıdır.
Backend tamamen Express & MongoDB ile sıfırdan yazıldı, frontend React ile oluşturuldu.
Ayrıca tüm HTTP metotları Postman kullanılarak test edilmiştir: GET, POST, DELETE, PATCH, PUT.

---

# 🚀✨ Bilgi:

Bu proje, benim ilk backend yolculuğumun başlangıcı olarak geliştirdiğim küçük ama güçlü bir MERN CRUD uygulamasıdır.
İlk kez Node.js ⚙️, Express 🌐, MongoDB 🍃, MongoDB Atlas ☁️ ve Compass 🧭 kullanarak tamamen kendi başıma bir backend altyapısı oluşturdum.
API isteklerimi Postman 📨 üzerinde test ederek GET, POST, DELETE, PATCH, PUT gibi tüm temel HTTP metotlarını uyguladım.

Bu süreçte hem REST API mantığını hem de veritabanı yönetimini öğrenerek not ekleme–silme–güncelleme işlemlerini gerçekleştiren tam fonksiyonlu bir uygulama geliştirdim.
Bu proje, backend dünyasına attığım ilk gerçek ve güçlü adımı temsil ediyor. ✨

---

# 🚀 Kullanılan Teknolojiler:

# 🟣 Frontend:

⚛️ React 19

🧭 React Router DOM

🌐 Fetch API

🎨 Pastel temalı modern UI | Modern ve neşeli UI (Pastel temalı CSS)

# 🟢 Backend:

🟩 Node.js

🌐 Express

🍃 MongoDB Atlas

🗂️ Mongoose

🔐 Dotenv

🔄 RESTful API yapısı

🧪 Postman ile CRUD testleri

---
### 🟣 Frontend
![React](https://img.shields.io/badge/React-61dafb?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-ca4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white)

### 🟢 Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge)

### 🧪 Araçlar
![Postman](https://img.shields.io/badge/Postman-ff6c37?style=for-the-badge&logo=postman&logoColor=white)

---

# 📌 Özellikler:

📝 Yeni not ekleme (title + description)

📚 Tüm notları listeleme (grid yapısı)

🕒 Her nota oluşturulma tarihi ekleme (createdAt)

🔍 ID’ye göre tek not görüntüleme

🗑️ Not silme

✏️ Notu güncelleme (PATCH)

🔄 PUT endpoint’i örnek olarak eklendi

❗ Geçersiz ID kontrolü

🌈 Renkli & canlı React arayüzü

---

# 🗄️ API Rotaları:

| Metod      | URL             | Açıklama                 |
| ---------- | --------------- | ------------------------ |
| **GET**    | /api/notlar     | Tüm notları getir        |
| **GET**    | /api/notlar/:id | ID’ye göre tek not getir |
| **POST**   | /api/notlar     | Yeni not oluştur         |
| **DELETE** | /api/notlar/:id | Not sil                  |
| **PATCH**  | /api/notlar/:id | Notu güncelle            |
| **PUT**    | /api/notlar/:id | Tam güncelleme (demo)    |

---

# ⚙️ Backend Çalıştırma:
cd backend
npm install
npm run dev

# 📄 .env:
PORT=4000
MONGO_URI=Atlas_URL

# 💻 Frontend Çalıştırma:
cd frontend
npm install
npm start

# package.json proxy:
"proxy": "http://localhost:4000"

---

# 🧪 Postman CRUD Testleri:

POST → Yeni not ekleme

GET → Tüm notları çekme

GET :id → Tek notu çekme

DELETE :id → Not silme

PATCH :id → Not güncelleme

PUT :id → Örnek tam güncelleme

---

# 💬 İletişim :
Proje hakkında sorularınız varsa, lütfen benimle iletişime geçin...
E-posta: akgundogduesr@gmail.com

---

# 🖼️Görseller-Hikaye görünümü:  

Kapak:
<img width="1668" height="823" alt="MernStackpic" src="https://github.com/user-attachments/assets/675411f9-5877-40ac-a755-97c2ceb8c19e" />

---

Demo:

https://github.com/user-attachments/assets/d54bad4b-b47c-4257-9f5b-306ed443176d






