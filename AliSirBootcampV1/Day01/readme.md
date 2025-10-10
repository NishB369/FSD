# FSD Bootcamp Day 01 | 30 May 2025

## Repo Structure
### `MVC` Model | (Model-View-Controller)

Its a design pattern that separates your application into three main parts:

| Component | What It Does | Example |
|-----------|--------------|---------|
| **Model** | Handles data and business logic | Database operations, data validation |
| **View** | Handles what user sees | HTML templates, React components, UI |
| **Controller** | Handles user input and connects Model & View | Route handlers, API endpoints |

### Typical Folder Structure
```
project/
├── models/          # Database schemas, data logic
│   ├── User.js
│   └── Product.js
├── views/           # Templates, UI components
│   ├── home.ejs
│   └── login.ejs
├── controllers/     # Route handlers, business logic
│   ├── userController.js
│   └── productController.js
└── routes/          # URL routing
    └── index.js
```

### Flow Example
```javascript
// 1. Route receives request
app.get('/users', userController.getAllUsers);

// 2. Controller handles the request
const getAllUsers = async (req, res) => {
    const users = await User.findAll();  // Model
    res.render('users', { users });      // View
};

// 3. Model fetches data
const User = {
    findAll: () => db.query('SELECT * FROM users')
};

// 4. View displays data
<% users.forEach(user => { %>
    <p><%= user.name %></p>
<% }) %>
```

### Benefits
- **Organized code** - Everything has its place
- **Easy to maintain** - Change one part without breaking others
- **Team collaboration** - Different people can work on different parts
- **Reusable** - Models and Views can be used in multiple places

## Database Schema Design - Many-to-Many Relationships

### Problem: Books & Authors
- One book can have multiple authors
- One author can write multiple books
- Direct relationship creates data duplication

### Solution: Junction/Relation Table

```sql
-- Books table
CREATE TABLE books (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    isbn VARCHAR(13),
    published_date DATE
);

-- Authors table  
CREATE TABLE authors (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

-- Central relation table (Junction table)
CREATE TABLE book_authors (
    id INT PRIMARY KEY,
    book_id INT,
    author_id INT,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (author_id) REFERENCES authors(id)
);
```

### Example Data

```sql
-- Books
INSERT INTO books VALUES (1, 'JavaScript Guide', '1234567890', '2023-01-01');
INSERT INTO books VALUES (2, 'Node.js Handbook', '0987654321', '2023-06-01');

-- Authors  
INSERT INTO authors VALUES (1, 'John Doe', 'john@email.com');
INSERT INTO authors VALUES (2, 'Jane Smith', 'jane@email.com');

-- Relations (book_authors)
INSERT INTO book_authors VALUES (1, 1, 1); -- JS Guide by John
INSERT INTO book_authors VALUES (2, 1, 2); -- JS Guide by Jane  
INSERT INTO book_authors VALUES (3, 2, 1); -- Node.js by John
```

### Benefits of Junction Table
- **No data duplication** - Each book and author stored once
- **Flexible relationships** - Easy to add/remove co-authors
- **Clean queries** - Join tables to get related data
- **Scalable** - Works for any many-to-many relationship

## General Pointers
- Directory
  - Files
    - Sequence of bytes
    - they have Header Bytes that define the type of file
    - png - RGB-alpha channels
    - jpg - RGB channels


- CLI Commands are used for Backend
  - Try ot skips using GUI in IDE
  - (~) in Linus points to path of logged user

- What is a web browser?
  - A web browser is a client-side application that renders web content and interprets various file formats.

  - Parses and renders HTML, CSS, and JavaScript
  - Executes HTTP/HTTPS protocols to communicate with web servers
  - Interprets multiple file formats locally and remotely
  - Provides a runtime environment for web applications

#### Core Functions:
  - Network requests - Makes HTTP/HTTPS requests to remote servers
  - File system access - Reads local files via file:// protocol
  - Document parsing - Parses HTML DOM, CSS stylesheets, JavaScript
  - Rendering engine - Converts markup into visual representation
  - JavaScript engine - Executes client-side scripts

#### HTML

  - "Hyper" = Beyond ordinary text
  - Ability to link to other documents/resources
  - Non-linear navigation - jump from one document to another
  - Interactive text that can contain references to other content

  - "Markup" = Instructions for how to structure/present content
  - Tags and elements that describe content semantics
  - Declarative syntax - you describe what something IS, not how to display it
Structured format with opening and closing tags

- HTML is a declarative markup language that uses:
  - Elements defined by angle brackets <tag>
  - Attributes that provide metadata <tag attribute="value">
  - Nested structure creating a document tree (DOM)
  - Semantic meaning - tags describe content purpose, not appearance

#### Basic Networking Concepts

##### Ethernet
- **Physical network technology** for connecting devices in a local area network (LAN)
- Uses **cables and switches** to transmit data packets
- **MAC addresses** identify devices at the hardware level
- **Collision detection** and **full-duplex** communication

##### Router - Packet Manager
- **Gateway device** that forwards data packets between networks
- **Routes traffic** between different IP networks (LAN to WAN)
- **Network Address Translation (NAT)** - maps private IPs to public IPs
- **Packet inspection** and **forwarding decisions** based on routing tables

##### Protocols - TCP/IP
- **TCP (Transmission Control Protocol)** - Reliable, connection-oriented transport
  - **Error checking** and **packet ordering**
  - **Three-way handshake** for connection establishment
- **IP (Internet Protocol)** - Network layer addressing and routing
  - **IPv4** (32-bit) and **IPv6** (128-bit) addressing
  - **Packet fragmentation** and **reassembly**

##### IP Address and Port Numbers
- **IP Address** - Unique identifier for devices on a network
  - **Private ranges**: 192.168.x.x, 10.x.x.x, 172.16-31.x.x
  - **Public IPs** - globally routable addresses
- **Port Numbers** - Identify specific services/applications
  - **Well-known ports**: 0-1023 (system services)
  - **Registered ports**: 1024-49151 (user applications)
  - **Dynamic ports**: 49152-65535 (temporary connections)

##### DNS (Domain Name System)
- **Hierarchical naming system** that translates domain names to IP addresses
- **DNS servers** maintain distributed database of domain records
- **Record types**: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail)
- **DNS resolution process**: Local cache → ISP DNS → Root servers → TLD servers

###### HTTP/HTTPS Default Ports
- **HTTP (Port 80)** - HyperText Transfer Protocol (unencrypted)
  - **Stateless protocol** for web communication
  - **Request/Response model** with methods (GET, POST, PUT, DELETE)
- **HTTPS (Port 443)** - HTTP Secure (encrypted with TLS/SSL)
  - **Certificate-based authentication**
  - **End-to-end encryption** for secure data transmission

##### Network Stack Overview
```
Application Layer    │ HTTP, HTTPS, DNS, FTP
Transport Layer      │ TCP, UDP (with ports)
Network Layer        │ IP (with IP addresses)
Data Link Layer      │ Ethernet (with MAC addresses)
Physical Layer       │ Cables, wireless signals
```