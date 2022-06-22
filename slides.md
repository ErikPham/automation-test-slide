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

Erik Pham - From #Front with ❤️

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
- Không biết code như nào cho đúng.
- Không biết làm cách nào để tự học và giỏi hơn.

</v-clicks>
---

# Sau khi nghe chém xong bạn sẽ biết những gì?
<v-clicks>

- Có roadmap để có thể tự học.
- Có thể bắt đầu ngay với với Javascript, Typescript, NodeJS và Playwright.
- Tiếp cận được với mindset của Dev dành cho QA.
- Chủ động và biết cách research để giải quyết các vấn đề gặp phải.

</v-clicks>
---

# NodeJS là gì?
<v-clicks>

- NodeJS là một nền tảng được xây dựng trên V8 JavaScript Engine
- Node.js chạy được trên nhiều OS (Windows, Linux, Unix, Mac OS X, etc.)
- Node.js sử dụng JavaScript phía server

</v-clicks>
---

# Example về NodeJS
<div grid="~ cols-2 gap-4">
<div>

Javascript

<v-clicks>

```js
console.log('Javascript');

const person = {
  name: 'Hiền Đỗ',
  age: 29,
  relationship: 'available'
}

console.log('Person', person);
```

</v-clicks>

</div>

<div>

NodeJS

<v-clicks>

```js
console.log('NodeJS');

const person = {
  name: 'Hiền Đỗ',
  age: 29,
  relationship: 'available'
}

console.log('Person', person);
```

</v-clicks>

<v-clicks>

```js
const fs = require('fs');
const data = "This is a file containing a collection"
        + " of programming languages.\n"
        + "1. C\n2. C++\n3. Python";
fs.writeFileSync("programming.txt", data);
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("programming.txt", "utf8"));
```

</v-clicks>

</div>
</div>

---


# NPM & Yarn là gì

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
<img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80" />
</div>
<div>

<v-clicks>

- Cần hiểu xem mình muốn gì?
- Mình đang ở đâu?
- Cần tham lam nhưng cũng bắt đầu từ việc nhỏ.
- Làm cách nào để đạt được từng goal?

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

- Xác định rõ mục tiêu cần đạt trong thời gian tới.
- Học kỹ cơ bản, nắm chắc các kiến thức về Javascript, Typescript, NodeJS.
- Tự setup một project từ đầu.
- Tự viết hoàn chỉnh một case từ đầu đến cuối sử dụng Playwright.
- Kiếm một (nhiều) mentor để support.
- Tự review code cho người khác.
- Tìm các repo có nhiều star trên Github để học cách viết code.
- Nghĩ (hoặc đi hỏi) xem tiếp theo học (làm) cái gì nữa để giỏi hơn.

---

