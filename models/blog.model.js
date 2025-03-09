class Blog {
    constructor(title, content) {
        this.id = Blog.incrementId();
        this.title = title;
        this.content = content;
        this.date = new Date().toISOString();
    }

    static incrementId() {
        if (!this.currentId) this.currentId = 1;
        else this.currentId++;
        return this.currentId;
    }

    save() {
        Blog.posts.push(this);
    }

    static getAll() {
        return Blog.posts;
    }

    static findById(id) {
        return Blog.posts.find(post => post.id === parseInt(id));
    }

    static deleteById(id) {
        Blog.posts = Blog.posts.filter(post => post.id !== parseInt(id));
    }
}

Blog.posts = [];

module.exports = Blog;
