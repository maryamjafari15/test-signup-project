# مستندات پروژه ثبت‌نام

## مقدمه

این پروژه یک برنامه تحت وب برای ثبت‌نام و ورود کاربران است که از تکنولوژی‌های مختلفی استفاده می‌کند. در این مستند، مراحل انجام پروژه و نحوه استفاده از آن به تفصیل توضیح داده شده است.

---

## تکنولوژی‌ها و ابزارهای مورد استفاده

1. **TypeScript**: برای بهره‌گیری از تایپ‌های استاتیک و بهبود کیفیت کدنویسی
2. **Tailwind CSS**: برای طراحی رابط کاربری و استایل‌دهی سریع و کارآمد
3. **React Router DOM**: برای مدیریت مسیرها و صفحه‌بندی در برنامه
4. **Formik و Yup**: برای ساخت فرم‌ها و اعتبارسنجی داده‌های ورودی
5. **Firebase**: به‌عنوان سرور برای ذخیره‌سازی داده‌ها و احراز هویت کاربران
6. **Redux**: برای مدیریت وضعیت

---

## مراحل انجام پروژه

### 1. نصب TypeScript

### 2. نصب و پیکربندی Tailwind CSS

### 3. استفاده از React Router DOM

### 4. ایجاد صفحات و طراحی رابط کاربری

صفحات مورد نیاز شامل:

- صفحه ثبت‌نام (Sign Up)
- صفحه ورود (Login)
- خانه (homePage)

### 5. استفاده از Formik و Yup

برای ساخت فرم‌های ثبت‌نام و ورود و همچنین اعتبارسنجی داده‌های ورودی، از کتابخانه‌های Formik و Yup استفاده شد. نصب این ابزارها به صورت زیر انجام شد:

```bash
npm install formik yup
```

با استفاده از Yup، قوانین اعتبارسنجی برای فیلدهای فرم تعریف شدند. مثال:

```typescript
import * as Yup from "yup";
```

### 6. استفاده از Firebase

Firebase به عنوان سرور این پروژه استفاده شده است. این سرویس برای ذخیره اطلاعات کاربران و احراز هویت استفاده می‌شود. ابتدا Firebase به پروژه اضافه شد:

```bash
npm install firebase
```

سپس پروژه در کنسول Firebase ایجاد شد و اطلاعات تنظیمات آن در پروژه وارد گردید. مثال کد اتصال:

```typescript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

initializeApp(firebaseConfig);
```

اطلاعات کاربران در Firebase Authentication ذخیره می‌شوند و داده‌ها در Realtime Database یا Firestore مدیریت می‌گردند.

### 7. مدیریت وضعیت با Redux

برای مدیریت وضعیت (State) در برنامه، از Redux استفاده شد. ابتدا Redux و ابزارهای مرتبط نصب شدند:

```bash
npm install @reduxjs/toolkit react-redux
```

---

## قابلیت‌های پروژه

- ثبت‌نام کاربران جدید و ذخیره اطلاعات آن‌ها در Firebase.
- ورود کاربران با اطلاعات ثبت‌شده و بررسی اعتبار آن‌ها.
- طراحی رابط کاربری زیبا و ریسپانسیو با استفاده از Tailwind CSS.
- مدیریت وضعیت کاربران با Redux.
- اعتبارسنجی فرم‌ها با استفاده از Yup و جلوگیری از ورود اطلاعات نامعتبر.

---

## نحوه اجرای پروژه

1. پروژه را کلون کنید:

```bash
git clone https://github.com/your-repo/signup-project.git
```

2. وارد پوشه پروژه شوید و وابستگی‌ها را نصب کنید:

```bash
cd signup-project
npm install
```

3. پروژه را اجرا کنید:

```bash
npm run dev
```

4. پروژه در مرورگر به صورت پیش‌فرض در آدرس `http://localhost:5173` در دسترس خواهد بود.

---
