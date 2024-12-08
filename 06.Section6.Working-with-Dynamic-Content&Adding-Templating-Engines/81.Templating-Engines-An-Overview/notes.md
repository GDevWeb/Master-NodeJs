# Section 6: Working with Dynamic Content & Adding Templating Engines

## **81. Templating Engines – An Overview**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11577388#overview)

---

### **What is a Templating Engine?**

A **templating engine** is a tool that allows you to generate **dynamic HTML content** on the server side. Instead of writing static HTML files, you can use placeholders, loops, and conditionals to create pages that adapt based on the data you provide.

Templating engines help separate **server-side logic** from **HTML presentation**, making your code cleaner and more maintainable.

---

### **Why Use a Templating Engine?**

1. **Dynamic Content**:

   - Inject dynamic data (e.g., user details, product listings) into HTML pages.

2. **Reusability**:

   - Create reusable components (partials) like headers, footers, and navigation bars.

3. **Cleaner Code**:

   - Maintain a clear separation between business logic and presentation.

4. **Efficiency**:

   - Reduce code duplication by using layouts and templates.

5. **Simplified Workflow**:
   - Write less HTML by using loops and conditionals directly in your templates.

---

### **Popular Templating Engines**

Here are three widely used templating engines in Express.js:

---

#### 1. **Pug (formerly Jade)**

- **Syntax**: Minimalistic, indentation-based (no HTML tags).
- **Features**:
  - Clean and concise syntax.
  - Easy to write nested elements.
  - Built-in support for conditionals and loops.

**Example**:

```pug
html
  head
    title= pageTitle
  body
    h1 Welcome, #{username}!
    ul
      each item in items
        li= item
```

**Rendered HTML**:

```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome, John!</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </body>
</html>
```

**Documentation**: [Pug Official Docs](https://pugjs.org/)

---

#### 2. **EJS (Embedded JavaScript)**

- **Syntax**: Similar to HTML with embedded JavaScript.
- **Features**:
  - Familiar syntax for developers comfortable with HTML.
  - Easy to embed JavaScript expressions and logic.
  - Supports partials and layouts.

**Example**:

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= pageTitle %></title>
  </head>
  <body>
    <h1>Welcome, <%= username %>!</h1>
    <ul>
      <% items.forEach(item => { %>
      <li><%= item %></li>
      <% }); %>
    </ul>
  </body>
</html>
```

**Rendered HTML**:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome, John!</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </body>
</html>
```

**Documentation**: [EJS Official Docs](https://ejs.co/)

---

#### 3. **Handlebars**

- **Syntax**: Similar to Mustache but with more features.
- **Features**:
  - Logic-less templates (minimal logic in views).
  - Supports partials and helpers.
  - Easy to use for simple applications.

**Example**:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{{pageTitle}}</title>
  </head>
  <body>
    <h1>Welcome, {{username}}!</h1>
    <ul>
      {{#each items}}
      <li>{{this}}</li>
      {{/each}}
    </ul>
  </body>
</html>
```

**Rendered HTML**:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome, John!</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </body>
</html>
```

**Documentation**: [Handlebars Official Docs](https://handlebarsjs.com/)

---

### **Comparison of Templating Engines**

| **Feature**            | **Pug**                        | **EJS**                      | **Handlebars**          |
| ---------------------- | ------------------------------ | ---------------------------- | ----------------------- |
| **Syntax**             | Indentation-based              | HTML-like with `<%= %>` tags | HTML-like with `{{ }}`  |
| **Learning Curve**     | Steeper                        | Easy                         | Easy                    |
| **Logic in Templates** | Supports logic                 | Supports JavaScript logic    | Limited logic (helpers) |
| **Use Cases**          | Clean syntax for complex views | Simple HTML templates        | Logic-less templates    |

---

### **Choosing the Right Templating Engine**

1. **Pug**:
   - Choose Pug if you prefer a **minimalistic syntax** and want to avoid writing HTML tags.
2. **EJS**:
   - Choose EJS if you prefer **traditional HTML** with embedded JavaScript.
3. **Handlebars**:
   - Choose Handlebars if you prefer a **logic-less templating** approach and want to keep your views simple.

---

### **What’s Next?**

In the next lecture, we’ll start by setting up a **Pug templating engine** in an Express.js application. You’ll learn how to render dynamic content and use features like conditionals and loops in your templates.

---

### 🚀 **Get Ready to Build Dynamic Web Pages!** 💻
