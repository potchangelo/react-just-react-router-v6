# React Just React Router v6

อัพเดทตัวอย่างโปรเจ็คจากคลิปสอน React Ep.17-19 ของ Zinglecode จาก React Router v5 เป็น v6

เนื่องจากคลิปสอนเหล่านั้นทำขึ้นในตอนต้นปี 2021 ซึ่ง React Router ตอนนั้นเป็น v5 ดังนั้นใครที่ลองทำตามในคลิปแล้วไม่สามารถใช้งานได้ ขอให้ดูตัวอย่างโค้ดของ React Router v6 ได้ที่ Github Repo อันนี้


## YouTube Videos (React Router v5)

- Basic routes -> https://www.youtube.com/watch?v=1ZrlSpnNvug
- Nested routes -> https://www.youtube.com/watch?v=a_jKlluY-cc
- Dynamic routes -> https://www.youtube.com/watch?v=xbdo978mpIc


## Changed from v5 to v6

- \<Switch\> ใน v5 เปลี่ยนไปใช้เป็น \<Routes\> ใน v6
- \<Route\> ใน v5 ที่เขียนแบบแท็กคู่เปิด/ปิด ครอบ Component ไว้ เปลี่ยนไปใช้เป็น \<Route path="..." element={\<Component /\>} /\> ใน v6
- \<NavLink\> ไม่มี props ชื่อ activeClassName แล้วใน v6 ให้ใช้วิธีตั้งชื่อ className ด้วย Function แทน
- \<NavLink\> props ที่ชื่อ exact ใน v5 เปลี่ยนเป็นชื่อ end ใน v6
- \<Link\>, \<NavLink\> props ที่ชื่อ to ไม่จำเป็นต้องใส่ "/" นำหน้าลิ้งค์เสมอไป ใน v6
- \<Redirect\> ใน v5 เปลี่ยนไปใช้เป็น \<Navigate\> ใน v6


## Install and Run project on VSCode

0. ติดตั้ง Node.js ลงเครื่องให้เรียบร้อยก่อน (ใช้ Version 14 หรือ 16 ก็ได้)

1. ดาวน์โหลดโปรเจ็คนี้ลงเครื่อง (เลือกจาก Github branch ที่ต้องการได้)

2. เปิดโฟลเดอร์โปรเจ็คใน VSCode

3. เปิด VSCode Terminal

4. ติดตั้ง Packages ของโปรเจ็ค (สามารถแก้ไขเลขเวอร์ชั่นของ Packages, Libraries ต่างๆ ให้เป็นเวอร์ชั่นล่าสุด ก่อนทำการติดตั้งได้ ที่ในไฟล์ package.json)

```
npm install
```

5. Run เว็บโปรเจ็ค

```
npm start
```


## Github branches

1. [React Router basic routes](https://github.com/potchangelo/react-just-react-router-v6/tree/01-react-router)
2. [React Router nested routes](https://github.com/potchangelo/react-just-react-router-v6/tree/02-react-router-nested)
3. [React Router dynamic routes](https://github.com/potchangelo/react-just-react-router-v6/tree/03-react-router-dynamic)

