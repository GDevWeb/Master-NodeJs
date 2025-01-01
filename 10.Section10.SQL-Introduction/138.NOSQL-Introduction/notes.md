# Section 10: SQL Introduction

## **Lesson 138: NoSQL Introduction**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738944#overview)

---

### **Objective**

In this lesson, we’ll introduce NoSQL databases, explain their purpose, and explore how they differ from SQL databases.

---

### **What is NoSQL?**

- **NoSQL (Not Only SQL)**: A database approach designed for flexibility, scalability, and handling large volumes of unstructured or semi-structured data.
- Unlike SQL, NoSQL databases don’t rely on a rigid table-and-row schema.

---

### **Types of NoSQL Databases**

1. **Key-Value Stores**:

   - **Structure**: Data stored as key-value pairs.
   - **Examples**: Redis, DynamoDB.
   - **Use Case**: Caching, session storage.

2. **Document Databases**:

   - **Structure**: Data stored as JSON-like documents.
   - **Examples**: MongoDB, CouchDB.
   - **Use Case**: Flexible schema applications like content management systems.

3. **Column-Family Stores**:

   - **Structure**: Data organized into columns.
   - **Examples**: Cassandra, HBase.
   - **Use Case**: Analytics and time-series data.

4. **Graph Databases**:
   - **Structure**: Data stored as nodes and edges (relationships).
   - **Examples**: Neo4j, Amazon Neptune.
   - **Use Case**: Social networks, recommendation engines.

---

### **Advantages of NoSQL Databases**

1. **Flexibility**:

   - Schema-less design allows for dynamic changes to the data model.

2. **Scalability**:

   - Horizontal scaling (adding more servers) is straightforward.

3. **Performance**:

   - Optimized for high-speed reads and writes, making them ideal for real-time applications.

4. **Handling Big Data**:
   - Designed to manage massive volumes of unstructured or semi-structured data.

---

### **When to Use NoSQL?**

- You don’t need strict relationships between data.
- Your data structure frequently changes.
- Your application requires real-time analytics or scalability.
- Examples:
  - Social media feeds.
  - Internet of Things (IoT) systems.
  - Recommendation engines.

---

### **Takeaway**

NoSQL databases are highly flexible and performant but aren’t ideal for every use case. In this course, we’ll focus on SQL databases to manage structured, relational data.
