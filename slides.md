---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: 'text-center'
lineNumbers: false
# persist drawings in exports and build
drawings:
  persist: false
---

# Test automation like a boss

Erik Pham - Made with ❤️

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Nội dung
<v-clicks>

- Tại sao lại có buổi chém này?
- Sau khi nghe chém xong bạn sẽ biết những gì?
- NodeJS là gì?
- Một vài example cơ bản.
- Npm & Yarn là gì?
- Làm cách nào để bắt đầu với một project?
- Bắt đầu với playwright.
- Tư duy khi làm một việc mới.
- Làm gì tiếp theo?

</v-clicks>
---

# Tại sao lại có buổi chém này?
<v-clicks>

- Mọi người đang mơ hồ, chưa biết bắt đầu từ đâu.
- Ngôn ngữ mới, framework mới nên khó tiếp cận.
- Chưa biết code như nào để like a boss.

</v-clicks>
---

# Sau khi nghe chém xong bạn sẽ biết những gì?
<v-clicks>

- Tiếp cận được với mindset của Dev dành cho QA
- Không còn mơ hồ, có thể bắt đầu với NodeJS, Playwright
- Chủ động và biết cách research để giải quyết các vấn đề gặp phải
- Code automation like a boss

</v-clicks>
---

# NodeJS là gì?
<v-clicks>

- NodeJS là một nền tảng được xây dựng trên V8 JavaScript Engine
- Node.js chạy được trên nhiều OS (Windows, Linux, Unix, Mac OS X, etc.)
- Node.js sử JavaScript trên server

</v-clicks>
---

# Example về NodeJS
<div grid="~ cols-2 gap-4">
<div>

Javascript

```js
console.log('Javascript');

const person = {
  name: 'Hiền Đỗ',
  age: 29,
  relationship: 'available'
}

console.log('Person', person);

```

</div>

<div>

NodeJS

```js
console.log('NodeJS');

const person = {
  name: 'Hiền Đỗ',
  age: 29,
  relationship: 'available'
}

console.log('Person', person);

const fs = require('fs');
const data = "This is a file containing a collection"
        + " of programming languages.\n"
        + "1. C\n2. C++\n3. Python";
fs.writeFileSync("programming.txt", data);
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("programming.txt", "utf8"));
```

</div>
</div>

---


# Npm & Yarn là gì

<v-clicks>

- Viết tắt của Node Package Manager
- Là công cụ để quản lý các packages
- Giúp manage package của project hiệu quả.

</v-clicks>

---

# Làm cách nào để bắt đầu với một project?

<div grid="~ cols-2 gap-4">
<div>

```bash
yarn init
```

</div>
<div>

- name: Tên
- version: Version hiện tại
- author: Tác giả
- main: File main khi chạy project

</div>
</div>

---

# Chi tiết hơn về package

<v-clicks>

#### Thêm một package mới
```shell
yarn add eslint --dev
```

</v-clicks>

<v-clicks>

#### Thêm một script với
```json
{
  "scripts": {
    "serve": "echo Xin chào Hiền Béo"
  }
}
```

</v-clicks>

---

# Bắt đầu với Playwright

<v-clicks>

#### Install
```shell
yarn create playwright
```

#### Thêm một test file

```shell
# tests/example.spec.ts
// example.spec.ts
import { test, expect } from '@playwright/test';

test('my test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Expect an attribute "to be strictly equal" to the value.
  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');
});
```
</v-clicks>

---

# Sử dụng Playwright CLI

<v-clicks>

#### Chạy một file test case
```shell
npx playwright test tests/examples.spec.ts
```

#### Chạy test case với script
```json
{
  "scripts": {
    "test": "npx playwright test"
  }
}
```

</v-clicks>

---

# Tư duy khi bắt đầu việc với
<div grid="~ cols-2 gap-4">
<div>
<img src="img/mindset/run.png" />
</div>
<div>

<v-clicks>

- Cần hiểu xem mình muốn gì?
- Mình đang ở đâu?
- Cần tham lam nhưng bắt đầu từ việc nhỏ.
- Làm cách nào để improve?

```html
- Muốn chạy để giảm béo
- Hiện tại đang 82kg. Chưa có kinh nghiệm chạy, chạy được 200m - 300m thở dốc.
- Mong muốn chạy được 5km mỗi lần. Bắt đầu từ 200m, 500m, 1km.
- Luyện tập hàng ngày. Xem video để học kinh nghiệp chạy, thở.
```

</v-clicks>
</div>
</div>

---

# Làm gì tiếp theo?

- Xác định rõ mục tiêu cần đạt trong thời gian tới
- Học kỹ cơ bản, nắm chắc các kiến thức về NodeJS
- Setup một project từ đầu
- Viết hoàn chỉnh một case từ đầu đến cuối sử dụng Playwright
- Tham gia buổi training tiếp theo.

---

