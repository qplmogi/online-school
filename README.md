# آموزش‌یار — پروژه React

یک پروژه CRA (Create React App) برای سایت آموزشی فارسی بر اساس وایرفریم.

## ساختار پروژه

```
src/
├── App.js                  # کامپوننت اصلی
├── App.css
├── index.js                # نقطه ورودی
├── index.css               # استایل‌های گلوبال + متغیرهای CSS
└── components/
    ├── Navbar.jsx           # منوی بالا (sticky + responsive)
    ├── Navbar.css
    ├── Hero.jsx             # بخش هیرو با CTA
    ├── Hero.css
    ├── ProblemCards.jsx     # کارت‌های مشکلات (افت تحصیلی، بی‌انگیزگی، ...)
    ├── ProblemCards.css
    ├── HowWeHelp.jsx        # مراحل کمک (۴ مرحله)
    ├── HowWeHelp.css
    ├── Services.jsx         # خدمات آموزشی (۴ سرویس)
    ├── Services.css
    ├── Teachers.jsx         # استادهای معرب
    ├── Teachers.css
    ├── ParentFeatures.jsx   # ویژگی‌های والدین
    ├── ParentFeatures.css
    ├── Testimonials.jsx     # نظرات خانواده‌ها
    ├── Testimonials.css
    ├── Footer.jsx           # CTA banner + footer
    └── Footer.css
```

## اجرا

```bash
npm install
npm start
```

## ویژگی‌ها

- ✅ RTL کامل (فارسی)
- ✅ فونت Vazirmatn
- ✅ Responsive (موبایل، تبلت، دسکتاپ)
- ✅ Navbar sticky با افکت blur
- ✅ انیمیشن‌های ظاهر شدن (fadeUp)
- ✅ Hover states روی همه کارت‌ها
- ✅ CSS Variables برای تم یکپارچه
- ✅ بدون dependency اضافی (فقط React)
